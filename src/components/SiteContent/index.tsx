import React, { FC } from 'react'
import styled from 'styled-components/macro'
import useBreakpoint from '@w11r/use-breakpoint'

import ISiteContent from './types'

const StyledSiteContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100vw;
    min-height: calc(100vh - var(--dim-header-height));
`

const SiteContent: FC<ISiteContent> = ({ children }) => {
    const cols = useBreakpoint('auto auto auto', ['tablet-', 'auto auto'])
    return (
        <StyledSiteContent cols={cols} rows="1fr">
            {children}
        </StyledSiteContent>
    )
}

export default SiteContent
