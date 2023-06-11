import Composition from "./components/2-4.Props/Composition";
import "./App.css";
import Extraction from "./components/2-4.Props/Extraction/Extraction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponentV2 from "./components/2-6.LifeCycle/ClassComponent";
import Event from "./components/2-7.Event/Event";
import Condition from "./components/2-8.ConditionalRendering/Condition";
import List from "./components/2-9.List/List";
import Controlled from "./components/2-10.Form/Controlled";
import Uncontrolled from "./components/2-10.Form/Uncontrolled";
import State from "./components/3-3.Hook/State";
import Reducer from "./components/3-3.Hook/Reducer";

function App() {
  return (
    <div className="App">
      <Reducer />
      <State />
      {/* <Controlled />
      <Uncontrolled />
      <List />
      <Condition />
      <Event />
      <ClassComponentV2 />
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;
