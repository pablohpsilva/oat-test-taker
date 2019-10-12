import React, { useState, useReducer } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import { Container } from '@/components'
import userReducer from '@/entities/user/reducers'
import { fetchUsersAction } from '@/entities/user/actions'

const Home = () => {
    const [hasMore, setHasMore] = useState(true)
    const [users, dispatch] = useReducer(userReducer, [])

    const loadMore = (offset: number) => {
        if (hasMore) {
            fetchUsersAction(dispatch, offset).then(data => {
                if (!data || !data.length) {
                    return setHasMore(false)
                }
            })
        }
    }

    console.log('users', users)

    return (
        <Container>
            <InfiniteScroll
                pageStart={-1}
                loadMore={loadMore}
                hasMore={hasMore}
                threshold={100}
                loader={
                    <div className="loader" key={0}>
                        Loading ...
                    </div>
                }
            >
                {users.map(i => (
                    <div key={i.userId} style={{ height: 200, width: '100%' }}>
                        {JSON.stringify(i)}
                    </div>
                ))}
            </InfiniteScroll>
        </Container>
    )
}

export default Home
