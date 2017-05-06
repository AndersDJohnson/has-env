# has-env
> CLI to detect whether an environment variable exists.

Cross-platform solution.

## Install
```
npm i has-env
```
or
```
yarn add has-env
```

## Use
### CLI
```
has-env CI
# exit code 1 unless `CI` env var exists, else 0

has-env CI true
# exit code 1 unless `CI` env var exists and has value equal to `true`, else 0

CI=true has-env CI
CI=false has-env CI
CI=true has-env CI true
CI=false has-env CI false
CI= has-env CI
CI= has-env CI ''
# all exit code 0

CI= has-env CI true
CI=false has-env CI true
# all exit code 1

# Only do something on CI:
has-env CI && ./my-script.sh
```
e.g. in `package.json`:
```json
{
  "scripts": {
    "test": "has-env CI && ./my-test-script.sh"
  }
}
```
