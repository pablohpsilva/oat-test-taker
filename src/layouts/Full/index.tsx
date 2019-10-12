import React from 'react'

import { SiteContent, SiteHeader } from '@/components'

const Full = ({ children }) => {
    return (
        <>
            <SiteHeader />
            <SiteContent>{children}</SiteContent>
        </>
    )
}

export default Full
