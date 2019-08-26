defmodule MessagachWeb.FallbackController do
  @moduledoc """
  Translates controller action results into valid `Plug.Conn` responses.

  See `Phoenix.Controller.action_fallback/1` for more details.
  """
  use MessagachWeb, :controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    conn
    |> put_status(:unprocessable_entity)
    |> put_view(MessagachWeb.ChangesetView)
    |> render("error.json", changeset: changeset)
  end

  def call(conn, {:error, :not_found}) do
    conn
    |> put_status(:not_found)
    |> put_view(MessagachWeb.ErrorView)
    |> render(:"404")
  end

  def call(conn, {:error, "invalid user-identifier"}), do: authentication_error_response(conn)
  def call(conn, {:error, "invalid password"}), do: authentication_error_response(conn)

  defp authentication_error_response(conn) do
    conn
    |> put_status(:unauthorized)
    |> put_view(MessagachWeb.ErrorView)
    |> render("error.json", %{authentication: :invalid_credentials})
  end
end
