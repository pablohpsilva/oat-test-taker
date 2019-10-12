import { USER_CONCAT_USER_LIST, USER_RESET } from './actions'

const saveSessionStorage = store => next => action => {
    const settingsActions = [USER_CONCAT_USER_LIST, USER_RESET]

    const result = next(action)
    if (settingsActions.find(el => el === action.type)) {
        window.sessionStorage.setItem('users', JSON.stringify(store.getState().users))
    }
    return result
}

export default saveSessionStorage
