import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import saveSessionStorage from '@/entities/user/middleware'
import rootReducer from '@/entities'
import { TConfigureStore } from '@/types'

type TConfigureStore = (preloadedState) => Store

let storeInstance

const configureStore: TConfigureStore = preloadedState => {
    if (storeInstance) return storeInstance
    const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(saveSessionStorage)))
    storeInstance = store
    return store
}

export default configureStore
