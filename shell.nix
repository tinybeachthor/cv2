{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell {
  buildInputs = [
    git

    nodejs
    yarn
  ];
  shellHook = ''
  '';
}
