import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message"
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import PersonList from './components/PersonList';
import Stylesheets from './components/Stylesheets';
import InLine from './components/InLine';
import './appStyles.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {
      // <Greet name="Clarke" superhero="Superman">
      //   <p>This is a children prop</p>
      // </Greet>
      // <Welcome name="luke"/>
      // <Message />
      // <Counter />
      // <FunctionClick />
      // <ClassClick />
      // <EventBind />
      // <ParentComponent />
      // <EventBind />
      // <UserGreeting />
      // <PersonList />
      <>
          <Stylesheets />
          <InLine />
      </>
      }
    </div>
  );
}

export default App;
