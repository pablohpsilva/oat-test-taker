import React from 'react'

import { Container, SiteContent, SiteHeader, SiteFooter } from '@/components'

const Main = ({ children }) => {
    return (
        <>
            <SiteHeader />
            <SiteContent>
                <Container>{children}</Container>
            </SiteContent>
            <SiteFooter />
        </>
    )
}

export default Main
