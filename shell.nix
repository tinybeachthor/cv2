{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    git
    gnumake

    nodejs
    yarn

    rclone
    yarn2nix
  ];
}
