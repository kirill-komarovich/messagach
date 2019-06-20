defmodule MessagachWeb.Router do
  use MessagachWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :authentication do
    plug Messagach.Auth.Pipeline
  end

  pipeline :ensure_authenticated do
    plug Guardian.Plug.EnsureAuthenticated
    plug Guardian.Plug.LoadResource
  end

  pipeline :ensure_not_authenticated do
    plug Guardian.Plug.EnsureNotAuthenticated
  end

  scope "/api", MessagachWeb do
    pipe_through [:api, :authentication]
  end

  scope "/", MessagachWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
