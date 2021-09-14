import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import theme from '../lib/theme';

export const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache(),
});

// Determines if we are running on server or in client.
const isServerSideRendered = () => {
    return typeof window === 'undefined';
};
/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/axe-core-npm
 */
if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
        import('@axe-core/react').then((axe) => {
            axe.default(React, ReactDOM, 1000, {});
        });
    });
}

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default App;
