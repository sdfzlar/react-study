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
import WelcomeDialog from "./components/3-5.Composition/WelcomeDialog";
import ThanksDialog from "./components/3-6.Component2/ThanksDialog";
import Button from "./components/3-7.HOC/Button";
import Input from "./components/3-7.HOC/Input";
import Memo from "./components/3-8.Memoization/Memo";
import Example from "./components/3-10.Context/Example";
import PortalExample from "./components/3-11.Portal/PortalExample";

function App() {
  return (
    <div className="App">
      <PortalExample />
      {/* <Example />
      <Memo />
      <Input />
      <Button />
      <ThanksDialog />
      <Reducer />
      <State />
      <Controlled />
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
