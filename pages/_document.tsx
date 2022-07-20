import theme from 'lib/theme';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

// Fixes SSR with Material UI styles - https://developerhandbook.com/react/how-to-set-up-nextjs-material-ui/
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
