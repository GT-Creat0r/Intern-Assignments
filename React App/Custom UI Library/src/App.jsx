import { useState } from "react";
import DocsLayout from "./layouts/DocsLayout/DocsLayout";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import HomePage from "./pages/HomePage/HomePage";
import InputPage from "./pages/InputPage/InputPage";
import TextareaPage from "./pages/TextareaPage/TextareaPage";
import NavPage from "./pages/NavPage/NavPage";
import CardPage from "./pages/CardPage/CardPage";
import TabsPage from "./pages/TabsPage/TabsPage";

const navigation = [
  { id: "home", label: "Home" },
  { id: "button", label: "Button" },
  { id: "input", label: "Input" },
  { id: "textarea", label: "Textarea" },
  { id: "nav", label: "Nav" },
  { id: "card", label: "Card" },
  {id:'tabs',label:'Tabs'}
];

const pages = {
  home: HomePage,
  button: ButtonPage,
  input: InputPage,
  textarea: TextareaPage,
  nav: NavPage,
  card: CardPage,
  tabs:TabsPage,
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const PageComponent = pages[currentPage];

  return (
    <DocsLayout
      navigation={navigation}
      currentPage={currentPage}
      onNavigate={setCurrentPage}
    >
      <PageComponent />
    </DocsLayout>
  );
};

export default App;
