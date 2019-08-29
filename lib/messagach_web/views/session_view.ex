defmodule MessagachWeb.SessionView do
  import MessagachWeb.Gettext

  use MessagachWeb, :view
  alias MessagachWeb.SessionView

  def render("show.json", %{user: user}) do
    %{data: render_one(user, SessionView, "user.json", as: :user)}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      email: user.email}
  end
end
