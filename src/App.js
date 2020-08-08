import React from 'react';
import {
  ClassComponentWithDecorator,
  ClassComponentWithObserver,
  FunctionComponentWithObserver,
  UsingObserverComponent,
  UsingObserverComponentAsRenderProps,
} from './components';
import { Store } from './store';

/**
 * App with MobX stores added via React Context API
 */
function App() {
  return (
    <Store>
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
    </Store>
  );
}

export default App;
