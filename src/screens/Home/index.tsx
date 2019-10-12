import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'
import InfiniteScroll from 'react-infinite-scroller'

import { Loading, Tile } from '@/components'
import { fetchUsersAction } from '@/entities/user/actions'

const StyledWrapper = styled.div`
    padding-top: var(--dim-gutter);
`

const StyledTileWrapper = styled.div`
    margin-bottom: calc(1 * var(--dim-gutter));
`

const Home = ({ users, fetchUsersAction }) => {
    const [hasMore, setHasMore] = useState(true)

    const loadMore = (offset: number) => {
        if (hasMore) {
            fetchUsersAction(offset).then(data => {
                if (!data || !data.length) {
                    return setHasMore(false)
                }
            })
        }
    }

    return (
        <StyledWrapper>
            <InfiniteScroll pageStart={-1} loadMore={loadMore} hasMore={hasMore} threshold={100} loader={<Loading />}>
                {users && users.length ? (
                    users.map(user => (
                        <StyledTileWrapper key={user.userId}>
                            <Tile key={user.userId} {...user} />
                        </StyledTileWrapper>
                    ))
                ) : (
                    <div>{hasMore ? null : 'Empty list'}</div>
                )}
            </InfiniteScroll>
        </StyledWrapper>
    )
}

const mapStateToProps = store => ({
    users: store.users
})

const mapDispatchToProps = dispatch => ({
    fetchUsersAction: (offset, limit = 20) => fetchUsersAction(dispatch, offset, limit)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
