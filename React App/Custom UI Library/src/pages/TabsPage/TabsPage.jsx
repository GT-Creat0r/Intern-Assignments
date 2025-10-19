import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "../../components/Tabs/Tabs";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";

const TabsPage = () => {
  return (
    <div>
      <h1>Tabs</h1>
      <p>
        Navigation component for switching between different views or sections.
      </p>
      <ComponentSection title=" Basic Tabs">
        <ComponentDemo
          title="Simple Tabs"
          description="Basic tab navigation with panels"
          component={
            <Tabs defaultValue="home">
              {({ activeValue, onChange }) => (
                <>
                  <TabList>
                    <Tab
                      value="home"
                      active={activeValue === "home"}
                      onClick={onChange}
                    >
                      Home
                    </Tab>
                    <Tab
                      value="profile"
                      active={activeValue === "profile"}
                      onClick={onChange}
                    >
                      Profile
                    </Tab>
                    <Tab
                      value="settings"
                      active={activeValue === "settings"}
                      onClick={onChange}
                    >
                      Settings
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel value="home" active={activeValue === "home"}>
                      <p>
                        Welcome to the home tab! This is where your main content
                        lives.
                      </p>
                    </TabPanel>
                    <TabPanel
                      value="profile"
                      active={activeValue === "profile"}
                    >
                      <p>
                        This is your profile tab. You can view and edit your
                        profile here.
                      </p>
                    </TabPanel>
                    <TabPanel
                      value="settings"
                      active={activeValue === "settings"}
                    >
                      <p>Manage your settings and preferences in this tab.</p>
                    </TabPanel>
                  </TabPanels>
                </>
              )}
            </Tabs>
          }
          code={`<Tabs defaultValue="home">
  {({ activeValue, onChange }) => (
    <>
      <TabList>
        <Tab value="home" active={activeValue === 'home'} onClick={onChange}>
          Home
        </Tab>
        <Tab value="profile" active={activeValue === 'profile'} onClick={onChange}>
          Profile
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="home" active={activeValue === 'home'}>
          <p>Home content</p>
        </TabPanel>
        <TabPanel value="profile" active={activeValue === 'profile'}>
          <p>Profile content</p>
        </TabPanel>
      </TabPanels>
    </>
  )}
</Tabs>`}
        />
      </ComponentSection>
    </div>
  );
};

export default TabsPage;
