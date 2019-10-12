import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '@/entities'

type TConfigureStore = (preloadedState) => Store

let storeInstance

const configureStore: TConfigureStore = preloadedState => {
    if (storeInstance) return storeInstance
    const store = createStore(rootReducer, preloadedState, composeWithDevTools())
    storeInstance = store
    return store
}

export default configureStore
