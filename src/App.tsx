import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderColorProvider } from "./context/HeaderContext";
import Header from "./components/Header";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <HeaderColorProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<IntroPage />} />
        </Routes>
      </BrowserRouter>
    </HeaderColorProvider>
  );
}

export default App;
