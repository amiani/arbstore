export default ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/assets/index.css" />
    </head>

    <body>
      <div id="app">${body}</div>
    </body>

    <script src="/assets/bundle.js"></script>
  </html>
`;
