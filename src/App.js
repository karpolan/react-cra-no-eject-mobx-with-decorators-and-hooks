import React from 'react';
import { Store } from './store';
import {
  ClassComponentWithDecorator,
  ClassComponentWithObserver,
  FunctionComponentWithObserver,
  UsingObserverComponent,
  UsingObserverComponentAsRenderProps,
  Header,
} from './components';

/**
 * App with MobX store(s) injected via React Context API
 */
function App() {
  return (
    <Store>
      <div className="app">
        <Header />
        <main>
          <ClassComponentWithDecorator />
          <ClassComponentWithObserver />
          <FunctionComponentWithObserver />
          <UsingObserverComponent />
          <UsingObserverComponentAsRenderProps />
        </main>
        <footer>
          Copyright &copy; <a href="https://karpolan.com">KARPOLAN</a>
        </footer>
      </div>
    </Store>
  );
}

export default App;
