import { ClassState } from "./pages/ClassState";
import { UseReducerExample } from "./pages/UseReducerExample";
import { UseStateExample } from "./pages/UseStateExample";

function App() {
  return (
    <div className="App">
      <UseStateExample name="UseState" />
      <ClassState name="ClassState" />
      <UseReducerExample name="UseReducer" />
    </div>
  );
}

export default App;
