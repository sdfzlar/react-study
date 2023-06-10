import Composition from './components/2-4.Props/Composition';
import './App.css';
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from './components/2-5.State/ClassComponent';
import FunctionalComponent from './components/2-5.State/FunctionalComponent';
import ClassComponentV2 from './components/2-6.LifeCycle/ClassComponent';

function App() {
  return (
    <div className="App">
      <ClassComponentV2 />
      <FunctionalComponent />
      <ClassComponent />
      <Composition />
      <Extraction />
    </div>
  );
}

export default App;
