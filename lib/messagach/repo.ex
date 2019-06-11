defmodule Messagach.Repo do
  use Ecto.Repo,
    otp_app: :messagach,
    adapter: Ecto.Adapters.Postgres
end
