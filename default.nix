{ pkgs }:

with pkgs;

mkYarnPackage {
  name = "cv2";

  src = ./.;

  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  yarnNix = ./yarn.nix;
}
