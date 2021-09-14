import React from 'react';
import { Link as MUILink } from '@material-ui/core';
import Link from 'next/link';

type Props = {
    href: string;
    as?: string;
    label: string;
    color?: 'inherit' | 'initial' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
};

export default function CustomLink({ href, as, label, color = 'inherit' }: Props) {
    return (
        <Link passHref href={href} as={as}>
            <MUILink color={color}>{label}</MUILink>
        </Link>
    );
}
