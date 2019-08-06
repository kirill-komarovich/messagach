defmodule Messagach.Auth.Guardian do
  use Guardian, otp_app: :messagach

  alias Messagach.Users
  alias Messagach.Users.User

  def subject_for_token(user, _claims) do
    {:ok, to_string(user.id)}
  end

  def resource_from_claims(%{"sub" => id}) do
    case Users.get_user!(id) do
      %User{} = user -> {:ok, user}
      _ -> {:error, :resource_not_found}
    end
  end
end
