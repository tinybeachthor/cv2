{
  inputs = {
    flake-utils.url = github:numtide/flake-utils;
    nixpkgs.url = github:NixOS/nixpkgs;
  };
  outputs = { self, flake-utils, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = (import nixpkgs {
        inherit system;
        overlays = [ ];
      });
    in {
      devShell = with pkgs; mkShell {
        buildInputs = [
          git
          gnumake

          nodejs
          yarn

          rclone
        ];
      };
    });
}
