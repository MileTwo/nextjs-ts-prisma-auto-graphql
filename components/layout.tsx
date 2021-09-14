import { makeStyles, createStyles, Typography } from '@material-ui/core';
import { ReactElement } from 'react';
import Head from 'next/head';

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            padding: '1em 2em',
        },
    })
);

interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={classes.header}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
