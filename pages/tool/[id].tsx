import { Button, Grid, Theme, Link as MUILink, Typography, Breadcrumbs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/layout';
import Media from 'components/Media';
import gql from 'graphql-tag';
import { useToolQuery } from 'types/gen/graphql-types';

const useStyles = makeStyles((theme: Theme) => ({
    description: {
        maxWidth: '80ch',
        paddingLeft: 100,
    },
    root: {
        padding: '.5em 2em',
    },
    title: {
        paddingLeft: '1em',
        color: theme.palette.text.secondary,
    },
}));

interface URLParams {
    id?: string;
}

export const QUERY_TOOL = gql`
    query Tool($id: Int!) {
        tool(where: { id: $id }) {
            id
            name
            description
            link
            image
        }
    }
`;

export default function ToolInfo(): ReactElement {
    const classes = useStyles();
    const { query }: { query: URLParams } = useRouter();
    // client side fetch
    const { data } = useToolQuery({ variables: { id: Number(query.id) } });

    if (!data) {
        return (
            <Grid container spacing={4} className={classes.root}>
                <Grid item xs={12}>
                    <Link href="/" passHref>
                        <Breadcrumbs aria-label="breadcrumb">Home</Breadcrumbs>
                    </Link>
                </Grid>
                <Grid item xs={12} container>
                    <Typography variant="h3">Tool not found.</Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <>
            <Layout title={`${data?.tool?.name} | Next.js example`}>
                <Grid container spacing={4} className={classes.root}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/" passHref>
                                <MUILink>Home</MUILink>
                            </Link>
                            <Typography color="textPrimary">{data?.tool?.name}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        {data?.tool?.image && (
                            <Media image={data?.tool?.image} name={data?.tool?.name} aria-hidden="true" />
                        )}
                        <Typography variant="h2" className={classes.title}>
                            {data?.tool?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Typography variant="body1" className={classes.description}>
                            {data?.tool?.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center">
                        <Button
                            variant="contained"
                            href={data?.tool?.link}
                            color="primary"
                            target="_blank"
                            component="a"
                        >
                            Visit {data?.tool?.name} documentation
                        </Button>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
