import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { Helmet } from 'react-helmet';

import App from '../app/App';

export default (req, res) => {
  const context: StaticRouterContext = {};
  const router = (
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  );
  const markup = ReactDOM.renderToString(router);
  const helmet = Helmet.renderStatic();

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    const html = `
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
          <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
              <div id="app">
                  ${markup}
              </div>
              <script src="/dist/client.js"></script>
          </body>
      </html>
  `;
  res.send(html);
  }
}
