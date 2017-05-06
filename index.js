function hasEnv (key) {
  return key in process.env
}

module.exports = hasEnv
