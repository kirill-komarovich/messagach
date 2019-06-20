defmodule Messagach.UsersTest do
  use Messagach.DataCase
  import Messagach.Factory

  alias Messagach.Users

  describe "users" do
    alias Messagach.Users.User

    @valid_attrs %{email: "some_email@test.com", password: "some password"}
    @update_attrs %{email: "some_updated_email@test.com", password: "some updated password"}
    @invalid_attrs %{email: nil, password: nil}

    test "list_users/0 returns all users" do
      user = insert(:user) |> without_password
      assert Users.list_users() == [user]
    end

    test "get_user!/1 returns the user with given id" do
      user = insert(:user) |> without_password
      assert Users.get_user!(user.id) == user
    end

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Users.create_user(@valid_attrs)
      assert user.email == @valid_attrs.email
      assert Bcrypt.verify_pass(@valid_attrs.password, user.encrypted_password) == true
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Users.create_user(@invalid_attrs)
    end

    test "update_user/2 with valid data updates the user" do
      user = insert(:user)
      assert {:ok, %User{} = user} = Users.update_user(user, @update_attrs)
      assert user.email == @update_attrs.email
      assert Bcrypt.verify_pass(@update_attrs.password, user.encrypted_password) == true
    end

    test "update_user/2 with valid data without password updates the user" do
      update_attrs_without_password = Map.delete(@update_attrs, :password)
      user = insert(:user)
      old_encrypted_password = user.encrypted_password
      assert {:ok, %User{} = user} = Users.update_user(user, update_attrs_without_password)
      assert user.email == update_attrs_without_password.email
      assert user.encrypted_password == old_encrypted_password
    end

    test "update_user/2 with invalid data returns error changeset" do
      user = insert(:user) |> without_password
      assert {:error, %Ecto.Changeset{}} = Users.update_user(user, @invalid_attrs)
      assert user == Users.get_user!(user.id)
    end

    test "delete_user/1 deletes the user" do
      user = insert(:user)
      assert {:ok, %User{}} = Users.delete_user(user)
      assert_raise Ecto.NoResultsError, fn -> Users.get_user!(user.id) end
    end

    test "change_user/1 returns a user changeset" do
      user = insert(:user)
      assert %Ecto.Changeset{} = Users.change_user(user)
    end

    test "verify_user/1 with valid email and password returns user" do
      user = insert(:user, @valid_attrs) |> without_password
      assert {:ok, user} == Users.verify_user(string_params_for(:user, @valid_attrs))
    end

    test "verify_user/1 with invalid email returns 'invalid user-identifier' error" do
      insert(:user, @valid_attrs)
      assert {:error, "invalid user-identifier"} == Users.verify_user(string_params_for(:user, %{@valid_attrs | email: ""}))
    end

    test "verify_user/1 with invalid password returns 'invalid password' error" do
      insert(:user, @valid_attrs)
      assert {:error, "invalid password"} == Users.verify_user(string_params_for(:user, %{@valid_attrs | password: ""}))
    end
  end
end
