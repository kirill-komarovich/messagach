defmodule Messagach.Users.User do

  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string, unique: true
    field :encrypted_password, :string
    field :password, :string, virtual: true

    timestamps()
  end

  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:email, :password])
    |> validate_attributes
  end

  def update_changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :password])
    |> validate_required([:email])
    |> validate_attributes
  end

  defp validate_attributes(user) do
    user
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
    |> validate_password
  end

  defp validate_password(%Ecto.Changeset{changes: %{password: _password}} = changeset) do
    changeset
    |> validate_length(:password, min: 6, max: 100)
    |> hash_password
  end
  defp validate_password(%Ecto.Changeset{} = changeset), do: changeset


  defp hash_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    changeset
    |> change(Bcrypt.add_hash(password, hash_key: :encrypted_password))
  end
  defp hash_password(%Ecto.Changeset{} = changeset), do: changeset
end
