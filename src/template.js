export default ({ body, title, initialState }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel='stylesheet' href='static/styles.css' type='text/css' />
    </head>

    <body>
      <div id="app">${body}</div>
    </body>

    <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
    <script src="/static/bundle.js"></script>
  </html>
`;
