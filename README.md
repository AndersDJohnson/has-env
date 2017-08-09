# has-env
> CLI to detect whether an environment variable exists.

Cross-platform solution.

## Install

[![npm install -D has-env (copy)](https://copyhaste.com/i?t=npm%20install%20-D%20has-env)](https://copyhaste.com/c?t=npm%20install%20-D%20has-env "npm install -D has-env (copy)")

or

[![yarn add -D has-env (copy)](https://copyhaste.com/i?t=yarn%20add%20-D%20has-env)](https://copyhaste.com/c?t=yarn%20add%20-D%20has-env "yarn add -D has-env (copy)")

## Use

### CLI

```
has-env CI
# exit code 1 unless `CI` env var exists, else 0

has-env CI true
# exit code 1 unless `CI` env var exists and has value `true`, else 0

CI=true has-env CI
CI=false has-env CI
CI=true has-env CI true
CI=false has-env CI false
CI= has-env CI
CI= has-env CI ''
# all above exit code 0

CI= has-env CI true
CI=false has-env CI true
# all above exit code 1

# Only do something on CI:
has-env CI && ./my-script.sh

# Do something on CI, something else locally:
has-env CI && ./on-ci.sh || ./elsewhere.sh
```

e.g. in `package.json`:
```json
{
  "scripts": {
    "test": "has-env CI && ./my-test-script.sh"
  }
}
```
