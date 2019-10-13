import { EAction, IAction } from './actions'

const saveSessionStorage = store => next => (action: IAction) => {
    const settingsActions = [EAction.USER_CONCAT_USER_LIST, EAction.USER_RESET]
    const result = next(action)

    if (settingsActions.find(el => el === action.type)) {
        window.sessionStorage.setItem('users', JSON.stringify(store.getState().users))
    }

    return result
}

export default saveSessionStorage
