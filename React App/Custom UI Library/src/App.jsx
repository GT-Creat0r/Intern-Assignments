import { BrowserRouter, Route, Routes } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout/DocsLayout";
import ButtonPage from "./pages/ButtonPage/ButtonPage";
import HomePage from "./pages/HomePage/HomePage";
import InputPage from "./pages/InputPage/InputPage";
import TextareaPage from "./pages/TextareaPage/TextareaPage";
import NavPage from "./pages/NavPage/NavPage";
import CardPage from "./pages/CardPage/CardPage";
import TabsPage from "./pages/TabsPage/TabsPage";
import AlertPage from "./pages/AlertPage/AlertPage";

const navigation = [
  { id: "home", label: "Home", path: "/" },
  { id: "alert", label: "Alert", path: "/alert" },
  { id: "button", label: "Button", path: "/button" },
  { id: "card", label: "Card", path: "/card" },
  { id: "input", label: "Input", path: "/input" },
  { id: "nav", label: "Nav", path: "/nav" },
  { id: "tabs", label: "Tabs", path: "/tabs" },
  { id: "textarea", label: "Textarea", path: "/textarea" },
];

const App = () => {
  return (
    <BrowserRouter>
      <DocsLayout navigation={navigation}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/textarea" element={<TextareaPage />} />
          <Route path="/nav" element={<NavPage />} />
          <Route path="/alert" element={<AlertPage />} />
        </Routes>
      </DocsLayout>
    </BrowserRouter>
  );
};

export default App;
