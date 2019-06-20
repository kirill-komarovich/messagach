defmodule Messagach.Factory do
  use ExMachina.Ecto, repo: Messagach.Repo
  use Messagach.UserFactory
end
