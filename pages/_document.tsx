import React, { FunctionComponent } from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument: FunctionComponent = () => (
  <Html lang='en'>
    <Head>
      <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
