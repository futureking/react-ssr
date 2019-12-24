import React from 'react';
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { Provider } from 'react-redux';
import store from '../src/store/store';
import App from '../src/app'

const app = express()
app.use(express.static('public'));

app.get('*',(req,res) => {
    // const content = renderToString(App);
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                {App}
            </StaticRouter>
        </Provider>
    );
    res.send(`
        <html>
            <head>
                <meta charset="utf-8" /meta>
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `)
})

app.listen(9003,() => {
    console.info('监听完毕')
})