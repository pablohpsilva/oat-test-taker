import React from 'react'

import { SiteContent, SiteHeader, SiteFooter } from '@/components'

const Main = ({ children }) => {
    return (
        <>
            <SiteHeader />
            <SiteContent>
                {children}
            </SiteContent>
            <SiteFooter />
        </>
    )
}

export default Main
