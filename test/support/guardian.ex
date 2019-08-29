defmodule Messagach.Auth.GuardianTestHelper do
  alias Messagach.Auth.Guardian
  alias Phoenix.ConnTest

  def guardian_login(conn, user), do: Guardian.Plug.sign_in(conn, user)
end
