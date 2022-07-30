import React, { useState } from 'react';
import Navigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { init } from './helpers/db';
import todoReducer from './store/reducer/todo';

init()
  .then(() => {
    console.log('Db Done')
  })
  .catch(() => {
    console.log('Db Error')
  })

const rootReducer = combineReducers({
  todos: todoReducer
});

const fetchFonts = () => {
  return Font.loadAsync({
    'dancing-bold': require('./assets/fonts/DancingScript-Bold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'chakrapetch': require('./assets/fonts/ChakraPetch-Regular.ttf'),
  });
};

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onError={() => alert('Font yüklemesi başarısız')}
      onFinish={() => setFontLoaded(true)}
    />
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}