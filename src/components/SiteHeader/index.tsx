import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import useBreakpoint from '@w11r/use-breakpoint'

import { Icon } from '@/components'
import { ROOT, IMPORT } from '@/config/URL'
import importSVG from '@/assets/icons/import.svg'

const StyledSiteHeader = styled.div`
    display: grid;
    width: 100%;
    max-width: 100vw;
    height: var(--dim-header-height);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    ${({ color }) => color && `background-color: ${color};`}
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ cols }) => cols && `grid-template-columns: ${cols};`}
    ${({ rows }) => rows && `grid-template-rows: ${rows};`}
`

const StyledColumn = styled.div`
    display: flex;
    justify-content: ${({ align = 'initial' }) => align};
    align-items: ${({ valign = 'initial' }) => valign};
    ${({ padding }) => padding && `padding: ${padding};`}
`

const SiteHeader = () => {
    const isMobile = useBreakpoint(false, ['tablet-', true])
    const cols = isMobile ? '2fr 8fr 2fr' : 'auto auto auto'

    return (
        <StyledSiteHeader cols={cols} rows="1fr" color="var(--color-light-0)">
            <StyledColumn />
            <StyledColumn align="center" valign="center">
                <Link to={ROOT}>OAT - Test Takers</Link>
            </StyledColumn>
            <StyledColumn align="flex-end" valign="center" padding="0 calc(2 * var(--dim-gutter))">
                <Link to={IMPORT}>
                    <Icon src={importSVG} alt="import test takers" />
                </Link>
            </StyledColumn>
        </StyledSiteHeader>
    )
}

export default SiteHeader
