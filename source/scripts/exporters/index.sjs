module.exports = function(storage) {
  return {
    webpage: require('./webpage')(storage),
    markdown: require('./markdown')(storage)
  }
}
