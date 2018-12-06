var rehype = require('rehype')
var tape = require('tape')
var urls = require('./')

tape('remove baseUrls', t => {
  var href = '<a href="http://example.com/page.html">text</a>'
  var src = '<img src="http://example.com/image.jpg">'

  var p = rehype()
    .use(urls, url => url.path)
    .freeze()

  t.equal(p.processSync(href).contents, wrap('<a href="/page.html">text</a>'), 'href')
  t.equal(p.processSync(src).contents, wrap('<img src="/image.jpg">'), 'src')
  t.end()
})

function wrap (html) {
  return `<html><head></head><body>${html}</body></html>`
}
