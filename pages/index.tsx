import { Typography, Theme, List, Grid, Button } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { useState } from 'react';
import { gql } from '@apollo/client';
import Layout from 'components/layout';
import ToolDialog from 'components/dialog/ToolDialog';
import { useToolsQuery } from 'types/gen/graphql-types';
import ListItem from 'components/list/ListItem';
import { LinkProps } from 'components/link/Link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            minWidth: theme.breakpoints.values.sm,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                minWidth: 100,
            },
        },
        root: {
            padding: '2em',
        },
        linkButton: {
            marginLeft: '1em',
        },
    })
);

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
    const classes = useStyles();

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" className={classes.root}>
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
                            <List aria-label={data?.tools.map((tool) => tool.name).join(', ')} className={classes.list}>
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
