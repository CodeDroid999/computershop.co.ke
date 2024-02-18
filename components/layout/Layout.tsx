/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import React from 'react'

import Footer from './Footer'
import CustomNavbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>
          Computershop | Travel with comfort.
          Comfortable. Efficient. Affordable .
          At North Express, we are redefining the luxury transport, and setting new standards of excellence and reliability.

          | Post any booking. Pick the best person. Get it
          done. |Travel with comfort.
          Comfortable. Efficient. Affordable .
          At North Express, we are redefining the luxury transport, and setting new standards of excellence and reliability.


        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/favicon/computershop-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon/computershop-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon/computershop-logo.png"
        />
        <meta
          name="description"
          content="Post your booking for free | Earn money as a tutor| Discover how Computershop works | Trusted ratings and reviews| Insurance for peace of mind | Join Computershop today!"
        />

      </Head>
      <header id="home" className="header_section">
        <div className="header_bottom">
          <CustomNavbar />
        </div>
      </header>
      <main className="mt-2 lg:mt-24">{children}</main>
      <Footer />
    </div>
  )
}
