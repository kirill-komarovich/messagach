defmodule MessagachWeb.SocketTokenController do
  use MessagachWeb, :controller
  alias Messagach.{Auth.Guardian}

  action_fallback MessagachWeb.FallbackController

  def index(conn, _params) do
    token = Guardian.Plug.current_token(conn)
    render(conn, "show.json", %{token: token})
  end
end
