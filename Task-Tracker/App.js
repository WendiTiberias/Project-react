import "./index.css";
import { Provider } from "./context";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import TaskTracker from "./Task";
import Footer from "./Footer";
import About from "./About";

const App = () => {
  return (
    <Provider>
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Form />
              <TaskTracker />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
