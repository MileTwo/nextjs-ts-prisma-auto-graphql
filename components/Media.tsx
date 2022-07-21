import { Avatar } from '@mui/material';
import NextImage from 'next/image';
import React, { ReactElement } from 'react';
import { Maybe } from 'types/gen/graphql-types';

interface Props {
    image: Maybe<string> | undefined;
    name: string;
}

export default function Media({ image, name }: Props): ReactElement {
    const firstLetter = name.slice(0, 1).toUpperCase();

    if (!image) {
        return (
            <Avatar
                sx={(theme) => ({ color: theme.palette.common.white, backgroundColor: theme.palette.primary.main })}
            >
                {firstLetter}
            </Avatar>
        );
    }

    if (image.startsWith('/')) {
        return <NextImage src={image || firstLetter} width={50} height={50} alt={name} data-testid="image" />;
    }

    return (
        <>
            {/* used for non optimizable entries (files not stored in public directory) */}
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img data-testid="image" src={image || firstLetter} width={50} height={50} alt={name} />
        </>
    );
}
