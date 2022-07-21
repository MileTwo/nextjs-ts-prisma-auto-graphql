import { gql } from '@apollo/client';
import { Button, Grid, List, Typography } from '@mui/material';
import ToolDialog from 'components/dialog/ToolDialog';
import Layout from 'components/layout';
import { LinkProps } from 'components/link/Link';
import ListItem from 'components/list/ListItem';
import { useState } from 'react';
import { useToolsQuery } from 'types/gen/graphql-types';

export const QUERY_TOOLS = gql`
    query Tools {
        tools(orderBy: { name: asc }) {
            id
            name
            description
            link
            image
        }
    }
`;

export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false);
    // CSR(Client-side rendering) example
    const { data } = useToolsQuery();

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" sx={{ padding: '2em' }}>
                    <Grid item container spacing={4} direction="column">
                        <Grid
                            item
                            container
                            spacing={4}
                            alignContent="center"
                            justifyContent="center"
                            direction="column"
                        >
                            <Grid item container justifyContent="center">
                                <Typography variant="h5" component="h2">
                                    Tools
                                </Typography>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                                    Create
                                </Button>
                            </Grid>
                            <ToolDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
                        </Grid>
                        <Grid item container justifyContent="center">
                            <List
                                aria-label={data?.tools.map((tool) => tool.name).join(', ')}
                                sx={(theme) => ({
                                    minWidth: theme.breakpoints.values.sm,
                                    [theme.breakpoints.down('sm')]: {
                                        width: '100%',
                                        minWidth: 100,
                                    },
                                })}
                            >
                                {data?.tools.map(({ name, image, id }) => {
                                    const link: LinkProps = {
                                        href: '/tool/[id]',
                                        as: `/tool/${id}`,
                                        label: 'Learn More',
                                    };
                                    return <ListItem key={name} name={name} image={image} link={link} />;
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
