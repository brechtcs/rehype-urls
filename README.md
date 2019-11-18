# rehype-urls

Rehype plugin to rewrite URLs of `href` and `src` attributes.

## Installation

```sh
npm install rehype-urls
```

## Usage

Given this markup:

```html
<article>
  <img src="http://internal.site/image.jpg">
  <a href="http://internal.site/page.html">page</a>
  <a href="http://example.com">link</a>
</article>
```

You can use the following script:

```js
var rehype = require('rehype')
var urls = require('rehype-urls')

rehype()
  .use(urls, removeBaseUrl)
  .process(input, handleOutput)

function removeBaseUrl (url) {
  if (url.host === 'internal.site') {
    return url.path
  }
  return url.href
}
```

Which will transform it into:

```html
<article>
  <img src="/image.jpg">
  <a href="/page.html">page</a>
  <a href="http://example.com">link</a>
</article>
```

## License

Apache-2.0
