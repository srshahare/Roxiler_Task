import { Provider } from "react-redux";
import "./App.css";
import Home from "./containers/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Roxiler Systems</h1>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
