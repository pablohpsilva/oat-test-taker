import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { Avatar } from '@/components'

const StyledWrapper = styled.div`
    position: relative;
    overflow-x: hidden;
    width: 100%;
    min-height: calc(100vh - var(--dim-header-height));
`

const StyledBackground = styled.div`
    ${({ picture }) => `
        background: url(${picture});
        background-size: cover;
        background-position: top;
    `}
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const StyledContent = styled.div`
    ${({ color }) => color && `background-color: ${color};`}
    padding: calc(2 * var(--dim-gutter)) var(--dim-gutter);
    border-radius: calc(20 * var(--s)) calc(20 * var(--s)) 0 0;
    box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.3);
    display: grid;
    ${({ cols }) => cols && `grid-template-columns: ${cols};`}
    ${({ rows }) => rows && `grid-template-rows: ${rows};`}
    ${({ gap }) => gap && `grid-gap: ${gap};`}
`

const StyledAvatarWrapper = styled.div`
    position: absolute;
    display: flex;
    top: calc(-40 * var(--s));
    left: 0;
    right: calc(20 * var(--s));
    justify-content: flex-end;
`

const FlatComponent = ({ children }) => <>{children}</>

const getLoremPixelDefaultImage = (index: string) => `http://lorempixel.com/650/650/abstract/${(Number(index) || 1) % 10}/`

const User = ({
    match: {
        params: { userid }
    },
    users = []
}) => {
    const user = useMemo(() => users.find(u => u.userid === userid), [userid])

    if (!user) {
        return null
    }

    const { picture, ...userProps } = user
    const bgPicture = getLoremPixelDefaultImage(userid)
    const keys = Object.keys(userProps)
    const cols = '4fr 8fr'
    const rows = keys
        .map(() => '12fr')
        .join(' ')
        .trim()

    return (
        <StyledWrapper>
            <StyledBackground picture={bgPicture} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <StyledAvatarWrapper>
                    <Avatar picture={picture} />
                </StyledAvatarWrapper>
                <StyledContent color="var(--color-light-0)" cols={cols} rows={rows} gap="var(--dim-gutter)">
                    {keys.map(key => (
                        <FlatComponent key={key}>
                            <div>{key}:</div>
                            <div>{userProps[key]}</div>
                        </FlatComponent>
                    ))}
                </StyledContent>
            </div>
        </StyledWrapper>
    )
}

const mapStateToProps = store => ({
    users: store.users
})

export default connect(mapStateToProps)(User)
