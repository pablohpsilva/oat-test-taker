import React from 'react'

import { SiteHeader, SiteFooter } from '@/components'

const Main = ({ children }) => {
    return (
        <>
            <SiteHeader />
            {children}
            <SiteFooter />
        </>
    )
}

export default Main
