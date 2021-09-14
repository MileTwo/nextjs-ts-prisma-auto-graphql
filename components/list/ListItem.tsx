import Image from '../Image';
import {
    ListItem as MUIListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Grid,
    Typography,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';
import Link from '../link/Link';
import { Image as ImageType } from '../../pages/index';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        info: {
            justify: 'center',
            padding: theme.spacing(2),
        },
        avatar: {
            backgroundColor: theme.palette.grey[100],
        },
    })
);

export type Link = {
    label: string;
    href: string;
    as?: string;
};

type Props = {
    name: string;
    image: ImageType | undefined;
    link: Link;
};

export default function ListItem({ name, image, link }: Props) {
    const classes = useStyles();
    return (
        <MUIListItem divider>
            <Grid container alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={name} className={classes.avatar}>
                        {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
                        <Image image={image} name={name} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <Typography variant="body1">{name}</Typography>
                </ListItemText>
                <Grid
                    container
                    item
                    xs={12}
                    md={3}
                    className={classes.info}
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Link href={link.href} as={link?.as} label={link.label} />
                </Grid>
            </Grid>
        </MUIListItem>
    );
}
