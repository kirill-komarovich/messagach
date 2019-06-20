defmodule Messagach.Users do

  import Ecto.Query, warn: false
  alias Messagach.Repo
  alias Messagach.Users.User

  def list_users do
    Repo.all(User)
  end

  def get_user!(id), do: Repo.get!(User, id)

  def get_user_by(params), do: Repo.get_by(User, params)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.update_changeset(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  def verify_user(%{"email" => email, "password" => password}) do
    get_user_by(email: email)
    |> Bcrypt.check_pass(password)
  end
end
