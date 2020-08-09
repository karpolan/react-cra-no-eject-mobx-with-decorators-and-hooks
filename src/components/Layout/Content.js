import React from 'react';
import {
  ClassComponentWithDecorator,
  ClassComponentWithObserver,
  FunctionComponentWithObserver,
  FunctionComponentUseObserver,
  UsingObserverComponent,
  UsingObserverComponentAsRenderProps,
} from '../MobXObserverComponents';

/**
 * Renders Main Content, list of components actually
 */
const Content = () => {
  return (
    <main>
      <ClassComponentWithDecorator />
      <ClassComponentWithObserver />
      <FunctionComponentUseObserver />
      <FunctionComponentWithObserver />
      <UsingObserverComponent />
      <UsingObserverComponentAsRenderProps />
    </main>
  );
};

export default Content;
