import React from "react"
import {createStore} from 'redux';
import { Provider } from "react-redux"
import reducer from './src/store/reducers';
import {Router} from '@reach/router'


// eslint-disable-next-line react/display-name,react/prop-types
const App =  ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return <Provider store={store}>
              {element}
          </Provider>
}

export default App;