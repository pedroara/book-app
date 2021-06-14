import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import appReducer from "./reducers/appReducer";
import applyGlobalStyles from "./applyGlobalStyle";
import HomeContainer from "./components/home/HomeContainer";
import BookContainer from "./components/books/BookContainer";
import "./fonts/fonts.css";

const browserHistory = createBrowserHistory();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  appReducer(browserHistory),
  composeEnhancers(applyMiddleware(routerMiddleware(browserHistory)))
);

applyGlobalStyles();

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <Switch>
          <Route path="/books/:id" component={BookContainer} exact />
          <Route path="*" component={HomeContainer} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
