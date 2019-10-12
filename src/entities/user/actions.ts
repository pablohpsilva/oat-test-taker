import fetchUsers, { fetchOneUser } from '@/resources/user'

export const USER_CONCAT_USER_LIST = 'USER_CONCAT_USER_LIST'
export const USER_UPDATE_ITEM = 'USER_UPDATE_ITEM'
export const USER_RESET = 'USER_RESET'

export const loadUsersAction = (dispatch, users) => {
    dispatch({ type: USER_CONCAT_USER_LIST, value: users })
}

export const fetchUsersAction = (dispatch, offset, limit = 20) => {
    return fetchUsers({ limit, offset: offset * limit }).then(async data => {
        const users = await Promise.all(data.map(({ userId }) => fetchOneUser({ userId })))

        dispatch({ type: USER_CONCAT_USER_LIST, value: users })
        return users
    })
}
