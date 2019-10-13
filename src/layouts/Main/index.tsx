import React from 'react'

import { Container, SiteContent, SiteHeader } from '@/components'

const Main = ({ children }) => {
    return (
        <>
            <SiteHeader />
            <SiteContent>
                <Container>{children}</Container>
            </SiteContent>
        </>
    )
}

export default Main
