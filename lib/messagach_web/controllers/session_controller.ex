defmodule MessagachWeb.SessionController do
  use MessagachWeb, :controller
  alias Messagach.{Auth.Guardian, Users}

  action_fallback MessagachWeb.FallbackController

  def create(conn, %{"user" => credentials_params}) do
    with {:ok, user} <- Users.verify_user(credentials_params) do
      conn
        |> Guardian.Plug.sign_in(user)
        |> render("show.json", %{user: user})
    end
  end

  def show(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    render(conn, "show.json", %{user: user})
  end

  def destroy(conn, _params) do
    conn
    |> Guardian.Plug.sign_out
    |> send_resp(:no_content, "")
  end
end
