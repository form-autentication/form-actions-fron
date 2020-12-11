import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home } from "../page";

const ComponentRouter = () => {
   return (
      <Router>
         <Switch>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
};

export default ComponentRouter;
