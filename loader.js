/** @type {import("@rspack/core").LoaderDefinitionFunction} */
module.exports = function (source) {
  const callback = this.async()
  callback(null, source)
}
