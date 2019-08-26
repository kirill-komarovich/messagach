defmodule MessagachWeb.SessionControllerTest do
  use MessagachWeb.ConnCase
  import Messagach.UserFactory, only: [insert: 2]
  import Messagach.Auth.GuardianTestHelper

  @valid_credentials %{email: "some_email@test.com", password: "some password"}
  @invalid_credentials %{email: "some_invalid_email@test.com", password: nil}

  setup %{conn: conn} do
    conn = conn
      |> bypass_through(Messagach.Router, [:api, :authentication])
      |> put_req_header("accept", "application/json")
    {:ok, conn: conn}
  end

  describe "create" do
    test "signs in user and renders it when credentials is valid", %{conn: conn} do
      user = insert(:user, @valid_credentials)
      conn = post(conn, Routes.session_path(conn, :create), user: @valid_credentials)
      expected_response = %{id: user.id, email: user.email}
      assert expected_response = json_response(conn, 200)["data"]

      conn = get(conn, Routes.session_path(conn, :show))
      assert expected_response = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.session_path(conn, :create), user: @invalid_credentials)
      assert json_response(conn, 401)["errors"] == %{"authentication" => "invalid_credentials"}
    end

    test "renders errors when user already authenticated", %{conn: conn} do
      user = insert(:user, @valid_credentials)
      conn = guardian_login(conn, user)

      conn = post(conn, Routes.session_path(conn, :create), user: @invalid_credentials)
      assert json_response(conn, 401)["errors"] == %{"authentication" => "already_authenticated"}
    end
  end

  describe "destroy" do
    test "signs out current user", %{conn: conn} do
      user = insert(:user, @valid_credentials)
      conn = guardian_login(conn, user)

      conn = delete(conn, Routes.session_path(conn, :destroy))
      assert response(conn, 204)

      conn = get(conn, Routes.session_path(conn, :show))
      assert json_response(conn, 401)["errors"] == %{"authentication" => "unauthenticated"}
    end
  end
end
