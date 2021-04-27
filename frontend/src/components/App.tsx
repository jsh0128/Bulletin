import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../page/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
