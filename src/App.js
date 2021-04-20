import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const Hats = () => {
  return <div>HatsPage</div>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
