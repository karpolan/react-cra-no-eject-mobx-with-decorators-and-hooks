import React from 'react';
import {
  ClassComponentWithDecorator,
  ClassComponentWithObserver,
  FunctionComponentWithObserver,
  UsingObserverComponent,
  UsingObserverComponentAsRenderProps,
} from './components';
import { StoreProvider, CombinedStore } from './store';

// Instance of the MobX Store
const store = new CombinedStore();

/**
 * App with MobX stores added via React Context API
 */
function App() {
  return (
    <StoreProvider store={store}>
      <div className="app">
        <header>
          <h1>Create React App with MobX Demo</h1>
        </header>
        <main>
          <ClassComponentWithDecorator />
          <ClassComponentWithObserver />
          <FunctionComponentWithObserver />
          <UsingObserverComponent />
          <UsingObserverComponentAsRenderProps />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
