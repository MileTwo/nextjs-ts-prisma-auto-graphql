import React, { ReactElement } from 'react';
import NextImage from 'next/image';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Image as ImageType } from '../pages';

interface Props {
    image: ImageType | undefined;
    name: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
        },
    })
);

export default function Image({ image, name }: Props): ReactElement {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const classes = useStyles();

    if (!image) {
        return <Avatar className={classes.avatar}>{firstLetter}</Avatar>;
    }

    if (image.src.startsWith('/')) {
        return <NextImage src={image.src || firstLetter} width={50} height={50} alt={name} data-testid="image" />;
    }

    return (
        <>
            {/* used for non optimizable entries (files not stored in public directory) */}
            <img data-testid="image" src={image.src || firstLetter} width={50} height={50} alt={name} />
        </>
    );
}
