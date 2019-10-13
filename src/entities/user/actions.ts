import { IUser } from '@/types'
import fetchUsers, { fetchOneUser } from '@/resources/user'
import createUser from './createUser'

export enum EAction {
    USER_CONCAT_USER_LIST = 'USER_CONCAT_USER_LIST',
    USER_UPDATE_ITEM = 'USER_UPDATE_ITEM',
    USER_RESET = 'USER_RESET'
}

export interface IAction {
    type: EAction
    value: IUser | IUser[]
}

export const loadUsersAction = (dispatch, users) => {
    const value = users.map(u => createUser(u))
    dispatch({ type: EAction.USER_CONCAT_USER_LIST, value })
}

export const fetchUsersAction = (dispatch, offset, limit = 20) => {
    return fetchUsers({ limit, offset: offset * limit }).then(async data => {
        const users = await Promise.all(data.map(({ userId }) => fetchOneUser({ userId })))

        dispatch({ type: EAction.USER_CONCAT_USER_LIST, value: users.map(u => createUser(u)) })
        return users
    })
}
