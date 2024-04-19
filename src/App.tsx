import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ActiveList } from "./components/pages/activeList/ActiveList";
import { AllToDo } from "./components/pages/allToDo/AllToDo";
import { CompletedList } from "./components/pages/complitedList/CompletedList";
import { Footer } from "./components/pages/Footer/Footer";
import { Header } from "./components/pages/Header/Header";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllToDo />} />
        <Route path="/active" element={<ActiveList />} />
        <Route path="/completed" element={<CompletedList />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
