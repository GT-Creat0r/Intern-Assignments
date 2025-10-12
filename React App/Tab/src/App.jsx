import "./App.css";
import { Tabs } from './components/Tabs/index.jsx'
import { TabList } from "./components/TabList";
import { Tab } from "./components/Tab";
import { TabPanels } from "./components/TabPanels";
import { TabPanel } from "./components/TabPanel";

const App = () => {
  return (
    <div className="App">
      <h1>Compound Tabs</h1>

       <Tabs defaultIndex={0}>
        <TabList>
          <Tab index={0}>Home</Tab>
          <Tab index={1}>Profile</Tab>
          <Tab index={2}>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel index={0}>
            <p>Welcome to the Home tab content!</p>
          </TabPanel>
          <TabPanel index={1}>
            <p>This is Profile tab content.</p>
          </TabPanel>
          <TabPanel index={2}>
            <p>Adjust Settings here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs> 
    </div>
  );
};

export default App;
