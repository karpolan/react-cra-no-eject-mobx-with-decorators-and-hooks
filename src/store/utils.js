import React from 'react';
import 'mobx-react-lite/batchingForReactDom'; // Read why it is needed: https://github.com/mobxjs/mobx-react-lite/#observer-batching

/**
 * Store Context
 * Note: It is internal singleton, not exported
 */
const StoreContext = React.createContext();

/**
 * Store Context Provider to wrap parts of Application into StoreContext
 */
export const StoreProvider = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

/**
 * Hook to use the Store in functional components
 */
export const useStore = () => React.useContext(StoreContext);

/**
 * HOC to inject the Store to functional or class component
 */
export const withStore = (Component) => (props) => {
  return <Component {...props} store={useStore()} />;
};
