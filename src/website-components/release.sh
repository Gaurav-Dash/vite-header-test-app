#!/bin/bash
set -e

current_version=$(node -p "require('./package').version")
BASEDIR=$(pwd)

printf "Next version (current is $current_version)? "
read next_version

if ! [[ $next_version =~ ^[0-9]+\.[0-9]+\.[0-9](-.+)? ]]; then
  echo "Version must be a valid semver string, e.g. 1.0.2 or 2.3.0-beta.1"
  exit 1
fi

if [[ $current_version = $next_version ]]; then
  echo "Republishing same version. Deleting the older version"
  echo "Successfully deleted older version"
fi

npm version "$next_version" --allow-same-version
echo VersionUpdate: website-components:$next_version

echo ======Building website-components======

yarn build


npm version "$next_version" --allow-same-version

cp package.json dist/
cd dist

echo "Publishing website-components ${next_version}"
npm publish --registry https://prod-nexus.sprinklr.com/nexus/repository/npm-internal/
echo " website-components ${next_version} is successfully published."

