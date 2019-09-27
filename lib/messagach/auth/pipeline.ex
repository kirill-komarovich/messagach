defmodule Messagach.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :messagach,
    error_handler: Messagach.Auth.ErrorHandler,
    module: Messagach.Auth.Guardian

  plug :fetch_session
  plug Guardian.Plug.VerifySession, claims: %{"typ" => "access"}
end
