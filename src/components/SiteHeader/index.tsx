import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import useBreakpoint from '@w11r/use-breakpoint'

import { IMPORT } from '@/config/URL'

const StyledSiteHeader = styled.div`
    display: grid;
    width: 100%;
    height: var(--dim-header-height);
    position: fixed;
    top: 0;
    left: 0;
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ cols }) => cols && `grid-template-columns: ${cols};`}
    ${({ rows }) => rows && `grid-template-rows: ${rows};`}
`

const SiteHeader = () => {
    const cols = useBreakpoint('auto auto auto', ['tablet-', 'auto auto'])
    return (
        <StyledSiteHeader cols={cols} rows="1fr">
            <div> </div>
            <div>OAT - Test Takers</div>
            <Link to={IMPORT}>import</Link>
        </StyledSiteHeader>
    )
}

export default SiteHeader
