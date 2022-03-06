import { ClassState } from "./pages/ClassState";
import { UseStateExample } from "./pages/UseStateExample";

function App() {
  return (
    <div className="App">
      <UseStateExample name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
