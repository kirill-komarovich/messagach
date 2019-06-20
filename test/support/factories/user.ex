defmodule Messagach.UserFactory do
  alias Messagach.Users.User

  defmacro __using__(_opts) do
    quote do
      def user_factory(attrs) do
        password = Map.get(attrs, :password, "password")

        user = %User{
          email: sequence(:email, &"email-#{&1}@test.com"),
          password: password,
          encrypted_password: Bcrypt.hash_pwd_salt(password)
        }

        merge_attributes(user, attrs)
      end

      def without_password(user) do
        %{user | password: nil}
      end
    end
  end
end
