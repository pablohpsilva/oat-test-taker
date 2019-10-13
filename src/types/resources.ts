export interface IAction {
    [key: string]: string | number
}

export interface IFetchOneUserParams {
    userId: string
}

export interface IFetchUsersParams {
    limit: number
    offset: number
}
