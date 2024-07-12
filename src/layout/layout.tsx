import React, { FC, FunctionComponent } from 'react'
import { LayoutProps } from './layout.props';
import { Box } from '@chakra-ui/react';
import Header from './header/header';

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Box maxW={'full'} overflow={'hidden'} pos={'relative'}>
            <Header/>
            <Box minW={'full'} minH={'full'}>
                {children}
            </Box>
        </Box>
    )
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};