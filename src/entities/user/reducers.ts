import sessionStorageOr from '@/utils/sessionStorage'
import { USER_CONCAT_USER_LIST, USER_RESET } from './actions'

const initialState = sessionStorageOr([], 'users')

export const userReducer = (state = initialState, action) => {
    const { type, value } = action
    if (type === USER_CONCAT_USER_LIST) {
        const prevUsers = [...state]

        const users = value.reduce((acc, curr) => {
            const item = acc.find(a => a.userid === curr.userid)
            return item ? acc : acc.concat([curr])
        }, prevUsers)

        return users
    }

    if (type === USER_RESET) {
        return initialState
    }

    return state
}

export default userReducer
