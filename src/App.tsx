import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HeaderColorProvider } from "./context/HeaderContext";
import Header from "./components/Header";
import IntroPage from "./pages/IntroPage";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function AppRoutes() {
  const location = useLocation();
  const hideHeaderPaths = ["/chatbot", "/login", "/signup"]; // 이 경로에서는 Header를 숨김

  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HeaderColorProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HeaderColorProvider>
  );
}

export default App;
