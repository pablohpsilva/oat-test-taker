import React from 'react'
import styled from 'styled-components/macro'
import useBreakpoint from '@w11r/use-breakpoint'

const StyledSiteContent = styled.div`
    width: 100%;
    max-width: 100vw;
    min-height: calc(100vh - var(--dim-header-height));
`

const SiteContent = ({ children }) => {
    const cols = useBreakpoint('auto auto auto', ['tablet-', 'auto auto'])
    return (
        <StyledSiteContent cols={cols} rows="1fr">
            {children}
        </StyledSiteContent>
    )
}

export default SiteContent
