defmodule MessagachWeb.SocketTokenView do
  import MessagachWeb.Gettext

  use MessagachWeb, :view

  def render("show.json", %{token: token}) do
    %{token: token}
  end
end
