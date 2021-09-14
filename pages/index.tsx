import { GetServerSideProps } from 'next';
import { makeStyles, createStyles, Typography, Theme, List, Grid } from '@material-ui/core';
import Layout from '../components/layout';
import ListItem, { Link } from '../components/list/ListItem';

import { tools } from '../lib/tools';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            minWidth: theme.breakpoints.values.sm,
            [theme.breakpoints.down('xs')]: {
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

export type Image = { src: string; width: number; height: number };
interface Props {
    tools: { name: string; image?: Image }[];
}

export default function Home({ tools }: Props) {
    const classes = useStyles();

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" className={classes.root}>
                    <Grid item container spacing={4} direction="column" xs={12} alignItems="center">
                        <Grid container item alignContent="center" justifyContent="center">
                            <Typography variant="h5" component="h2">
                                Tools
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent="center">
                            <List aria-label={tools.join(', ')} className={classes.list}>
                                {tools.map(({ name, image }) => {
                                    const link: Link = {
                                        href: '/tool/[name]',
                                        as: `/tool/${name}`,
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            tools: tools.map(({ name, image }) => ({
                name,
                image,
            })),
        },
    };
};
