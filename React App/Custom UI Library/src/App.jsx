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
import TablePage from "./pages/TablePage/TablePage";
import UseLocalStoragePage from "./pages/hooks/useLocalStoragePage";
import UsePreviousPage from "./pages/hooks/UsePreviousPage";
import UseDimensionPage from "./pages/hooks/UseDimensionPage";
import UseOutsideClickPage from "./pages/hooks/UseOutsideClickPage";
import AccordionPage from "./pages/AccordionPage/AccordionPage";
import ImageSliderPage from "./pages/ImageSliderPage/ImageSliderPage";
import SliderPage from "./pages/SliderPage/SliderPage";

const navigation = [
  {
    category: "Components",
    items: [
      { id: "home", label: "Home", path: "/" },
      { id: "accordion", label: "Accordion", path: "/accordion" },
      { id: "alert", label: "Alert", path: "/alert" },
      { id: "button", label: "Button", path: "/button" },
      { id: "card", label: "Card", path: "/card" },
      { id: "imageSlider", label: "ImageSlider", path: "/imageSlider" },
      { id: "input", label: "Input", path: "/input" },
      { id: "nav", label: "Nav", path: "/nav" },
      { id: "slider", label: "Slider", path: "/slider" },
      { id: "table", label: "Table", path: "/table" },
      { id: "tabs", label: "Tabs", path: "/tabs" },
      { id: "textarea", label: "Textarea", path: "/textarea" },
    ],
  },
  {
    category: "Hooks",
    items: [
      {
        id: "useLocalStorage",
        label: "useLocalStorage",
        path: "/useLocalStorage",
      },
      {
        id: "usePrevious",
        label: "usePrevious",
        path: "/usePrevious",
      },
      {
        id: "useDimension",
        label: "useDimension",
        path: "/useDimension",
      },
      {
        id: "useOutsideClick",
        label: "useOutsideClick",
        path: "/useOutsideClick",
      },
    ],
  },
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
          <Route path="/table" element={<TablePage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/imageSlider" element={<ImageSliderPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/useLocalStorage" element={<UseLocalStoragePage />} />
          <Route path="/usePrevious" element={<UsePreviousPage />} />
          <Route path="/useDimension" element={<UseDimensionPage />} />
          <Route path="/useOutsideClick" element={<UseOutsideClickPage />} />
        </Routes>
      </DocsLayout>
    </BrowserRouter>
  );
};

export default App;
