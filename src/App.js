import React from 'react';

import { ClassComponentWithDecorator, ClassComponentWithObserver, FunctionComponentWithObserver } from './components';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Create React App with MobX Demo</h1>
      </header>
      <main>
        <ClassComponentWithDecorator />
        <ClassComponentWithObserver />
        <FunctionComponentWithObserver />
      </main>
    </div>
  );
}

export default App;
