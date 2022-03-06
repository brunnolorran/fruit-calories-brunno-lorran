import { Route, Switch } from "react-router-dom";
import Challenge from "../Pages/Challenge";

const Routes = () => {
  return (
    <Switch>
      <Route path="/challenge" exact>
        <Challenge />
      </Route>
    </Switch>
  );
};

export default Routes;
