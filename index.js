function hasEnv (key, value) {
  if (!(key in process.env)) return false
  if (value != null) {
    return process.env[key] === value
  }
  return true
}

module.exports = hasEnv
