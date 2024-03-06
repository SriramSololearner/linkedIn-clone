import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MyNetwork from "./pages/MyNetwork";
import FooterPage from "./pages/FooterPage";
import SigninPage from "./pages/signinpage/signinPage";
import JoinnowPage from "./pages/joinnowpage/joinnowPage";
import MessagePage from "./pages/MessagePage";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/joinnow" element={<JoinnowPage />} />
        </Routes>

        <>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/People" element={<MyNetwork />} />
            <Route path="/Jobs" element={<JobsPage />} />
            <Route path="/Message" element={<MessagePage />} />
            <Route path="/Notify" element={<Notifications />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
          <FooterPage />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
