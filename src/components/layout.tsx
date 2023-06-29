import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import Head from 'next/head';
import { ReactElement } from 'react';

interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title: string;
}

const StyledHeader = styled('header')({
    header: {
        padding: '1em 2em',
    },
});

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <StyledHeader>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
            </StyledHeader>
            <main>{children}</main>
        </>
    );
};

export default Layout;
