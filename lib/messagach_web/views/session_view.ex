defmodule MessagachWeb.SessionView do
  import MessagachWeb.Gettext

  use MessagachWeb, :view

  def render("error.json", %{type: type}) do
    %{errors: Gettext.dgettext(MessagachWeb.Gettext, "errors", to_string(type))}
  end
end
