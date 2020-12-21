import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "../components/form";
import { Home } from "../page";

const ComponentRouter = () => {
   return (
      <Router>
         <Switch>
            <Route path="/:slug">
               <Form />
            </Route>
         </Switch>
      </Router>
   );
};

export default ComponentRouter;
