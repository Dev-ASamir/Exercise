import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const config = {
    key: 'root',
    storage :AsyncStorage,
    blacklist : 'auth',
    blacklist : 'loginReducer',

  };

const reducer = persistReducer(config, reducers);
const store = createStore( reducer, {} , applyMiddleware(ReduxThunk,logger));
const persistor = persistStore(store);

export  default { store, persistor };

