import { Breadcrumbs, Button, Grid, Link as MUILink, Typography } from '@mui/material';
import Layout from 'components/layout';
import Media from 'components/Media';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { useToolQuery } from 'types/gen/graphql-types';

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
    const { query }: { query: URLParams } = useRouter();
    // client side fetch
    const { data } = useToolQuery({ variables: { id: Number(query.id) } });

    if (!data) {
        return (
            <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
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
                <Grid container spacing={4} sx={{ padding: '.5em 2em' }}>
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
                        <Typography
                            variant="h2"
                            sx={(theme) => ({ paddingLeft: '1em', color: theme.palette.text.secondary })}
                        >
                            {data?.tool?.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <Typography variant="body1" sx={{ maxWidth: '80ch' }}>
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
