const { createElement, Fragment } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Ellipsis, Ring, Ripple } = require('react-loading-shell')

const port = 3000
const app = express()

const html = renderToString(
  createElement(
    Fragment,
    null,
    createElement(Ellipsis),
    createElement(Ring),
    createElement(Ripple)
  )
)

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    ${html}
  </body>
  </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
