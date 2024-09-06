import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import songReducer from '../reducers/song'

const persistConfig = {
    key: 'root',
    storage
}

const mainReducer = combineReducers({
    song: songReducer,
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false
            })
        }
    })
    export const persistor = persistStore(store)