FROM elixir:1.8.2

ENV APP_ROOT=/messagach
ENV PORT=4000
ENV NODE_VERSION=v10.16.0
ENV NODE_DIST_FILENAME=node-$NODE_VERSION-linux-x64.tar.xz
ENV NODE_PATH=${APP_ROOT}/client/node_modules
ENV PATH=$PATH:/node_modules/.bin

WORKDIR ${APP_ROOT}

RUN apt-get update -y && apt-get install -y inotify-tools

RUN wget -q https://nodejs.org/dist/$NODE_VERSION/$NODE_DIST_FILENAME
RUN tar -C /usr/local --strip-components 1 -xJvf $NODE_DIST_FILENAME > /dev/null
RUN rm $NODE_DIST_FILENAME
RUN npm i -g yarn

RUN mix local.hex --force && mix local.rebar --force

COPY mix.exs mix.lock ./

RUN mix deps.get

COPY . .

RUN mix compile

EXPOSE ${PORT}

CMD mix phoenix.server
