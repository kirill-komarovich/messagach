defmodule Messagach.Auth.ErrorHandler do
  import Plug.Conn

  use MessagachWeb, :controller

  @behaviour Guardian.Plug.ErrorHandler
  @impl Guardian.Plug.ErrorHandler

  def auth_error(conn, {type, _reason}, _opts) do
    conn
    |> put_resp_content_type("application/json")
    |> put_status(:unauthorized)
    |> put_view(MessagachWeb.ErrorView)
    |> render("error.json", %{authentication: type})
  end
end
