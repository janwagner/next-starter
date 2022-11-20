import '../styles/app.scss'
import type { AppProps } from 'next/app'
import React, { FunctionComponent } from 'react'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />

export default MyApp
