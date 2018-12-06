var has = require('hast-util-has-property')
var url = require('url')
var visit = require('unist-util-visit')

module.exports = function transform (fn) {
  fn = fn || function (url) {
    return url.href
  }

  return function transformer (tree) {
    visit(tree, 'element', function (node) {
      modify(node, 'href')
      modify(node, 'src')
    })
  }

  function modify (node, prop) {
    if (has(node, prop)) {
      var parsed = url.parse(node.properties[prop])
      node.properties[prop] = fn(parsed)
    }
  }
}
