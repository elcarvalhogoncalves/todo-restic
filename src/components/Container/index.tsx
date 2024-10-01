

import { PropsWithChildren } from 'react';
import { Body } from './styles';

export function Container({ children }: PropsWithChildren<{}>) {
    return (
        <Body>
            {children}
        </Body>
    );
}