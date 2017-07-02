export default ({ body, title, initialState }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      <title>${title}</title>
      <link rel="stylesheet" href="/static/index.css" />
    </head>

    <body>
      <div id="app">${body}</div>
    </body>

    <script src="/static/bundle.js"></script>
  </html>
`;
