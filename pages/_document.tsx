import React, { FunctionComponent } from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument: FunctionComponent = () => (
  <Html>
    <Head>
      <html lang='en' />
      <link rel='icon' href='/favicon.ico'></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
