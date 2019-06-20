use Mix.Config

# Configure your database
config :messagach, Messagach.Repo,
  username: "postgres",
  password: "postgres",
  database: "messagach_test",
  hostname: System.get_env("DB_HOST"),
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :messagach, MessagachWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :exredis, host: System.get_env("REDIS_HOST")

config :bcrypt_elixir, :log_rounds, 2
