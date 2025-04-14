import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

// Enhanced Redux configuration
const configureStore = () => {
  const middleware = [thunk];
  
  // Redux DevTools setup
  const composeEnhancers =
    (typeof window !== 'undefined' && 
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // Hot reloading for reducers
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};

const store = configureStore();

export default store;