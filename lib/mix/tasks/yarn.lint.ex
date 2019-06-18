defmodule Mix.Tasks.Yarn.Lint do
  @moduledoc """
    Task to run `yarn lint` script
  """

  use Mix.Task

  def run(_) do
    System.cmd("yarn", ["lint"], [cd: "assets", into: IO.stream(:stdio, :line)])
  end
end
