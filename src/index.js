
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
// import { createStore } from 'redux';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log("action.type=", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // middleware code
    if (typeof action !== "function") {
      console.log("action.type =", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     // middleware code
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("store", store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movie:{name:'SuperMan'}
// })
// console.log('AFTER STATE',store.getState());

// export const StoreContext = createContext();
// // console.log("StoreContext", StoreContext);
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const allDataToPass = callback(state);
//         return <Component {...allDataToPass} dispatch={store.dispatch} />;
//       }
//     }
//     class connectedAppComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return connectedAppComponentWrapper;
//   };
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
