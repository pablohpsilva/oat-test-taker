import { IUser } from '@/types'
import sessionStorageOr from '@/utils/sessionStorage'
import { EAction, IAction } from './actions'

const initialState = sessionStorageOr<IUser[]>([], 'users')

export const userReducer = (state = initialState, action: IAction) => {
    const { type, value } = action
    if (type === EAction.USER_CONCAT_USER_LIST) {
        const prevUsers = [...state]

        const users = value.reduce((acc, curr) => {
            const item = acc.find(a => a.userId === curr.userId)
            return item ? acc : acc.concat([curr])
        }, prevUsers)

        return users
    }

    if (type === EAction.USER_RESET) {
        return initialState
    }

    return state
}

export default userReducer
