import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Main {...routerProps} />}
        />
      </Switch>
    </div>
  );
};

export default App;
