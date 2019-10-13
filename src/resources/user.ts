import { resources } from 'x-resources'

import API_URL from '@/config/ENV'
import IUser, { IUserCompact } from '@/resources'
import { IAction, IFetchOneUserParams, IFetchUsersParams } from '@/types'

const createAction = ({ method = 'GET', url }: IAction): IAction => ({ method, url })

const fetch = (action: IAction, params: IFetchOneUserParams | IFetchUsersParams): PromiseLike<IUser | IUser[]> =>
    resources(API_URL, { fetch: createAction(action) })
        .fetch(params)
        .then(({ data }) => data)

const fetchUsers = (params: IFetchUsersParams): PromiseLike<IUserCompact[]> =>
    fetch({ url: '/users?limit=:limit&offset=:offset' }, params)

export const fetchOneUser = (params: IFetchOneUserParams): PromiseLike<IUser> => fetch({ url: '/user/:userId' }, params)

export default fetchUsers
