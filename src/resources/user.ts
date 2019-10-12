import { resources } from 'x-resources'

import IUser, { IUserCompact } from '@/resources'
import { API_URL } from '@/config/ENV'

const createAction = ({ method = 'GET', url }) => ({ method, url })

const fetch = (action, params) =>
    resources(API_URL, { fetch: createAction(action) })
        .fetch(params)
        .then(({ data }) => data)

const fetchUsers = (params: { limit: number; offset: number }): PromiseLike<IUserCompact[]> =>
    fetch({ url: '/users?limit=:limit&offset=:offset' }, params)

export const fetchOneUser = (params: { userid: string }): PromiseLike<IUser> => fetch({ url: '/user/:userid' }, params)

export default fetchUsers
