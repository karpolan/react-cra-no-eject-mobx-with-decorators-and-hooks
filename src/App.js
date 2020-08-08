import React from 'react';
import { Store } from './store';
import {
  Header,
  Footer,
  ClassComponentWithDecorator,
  ClassComponentWithObserver,
  FunctionComponentWithObserver,
  FunctionComponentUseObserver,
  UsingObserverComponent,
  UsingObserverComponentAsRenderProps,
} from './components';
import './App.css';

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
          <FunctionComponentUseObserver />
          <FunctionComponentWithObserver />
          <UsingObserverComponent />
          <UsingObserverComponentAsRenderProps />
        </main>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
