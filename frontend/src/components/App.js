import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";

const App = (props) => {
  const { auth, handleSampleAction, handleSampleJoinRoom } = props;

  React.useEffect(() => {
    console.log(props);
  });

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Main
              {...routerProps}
              auth={auth}
              handleSampleAction={handleSampleAction}
              handleSampleJoinRoom={handleSampleJoinRoom}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
