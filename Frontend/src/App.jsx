import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UploadStep1 from "./pages/UploadStep1";
import ResetPsPage from "./pages/ResetPsPage";
import ForgotPsPage from "./pages/ForgotPsPage";
import LoginPage from "./pages/LoginPage";
import ViewPage from "./pages/ViewPage";
import EditMyKarobarsPage from "./pages/EditMyKarobarsPage";
import MyKarobarsPage from "./pages/MyKarobarsPage";
import ExplorePage from "./pages/ExplorePage";
import UploadStep2 from "./pages/UploadStep2";
import SignupPage from "./pages/SignupPage";
import UpdatePage from "./pages/UpdatePage";
import Maps from './pages/Maps'
import LeafletClickMap  from './components/LeafletClickMap.jsx';
import UserExplore from './pages/UserExplore'
import React from 'react'

import { useEffect } from "react";
import Desktop1 from "./pages/Desktop1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/resetpspage":
        title = "";
        metaDescription = "";
        break;
      case "/forgotpspage":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
      case "/viewpage":
        title = "";
        metaDescription = "";
        break;
      case "/editmykarobarspage":
        title = "";
        metaDescription = "";
        break;
      case "/mykarobarspage":
        title = "";
        metaDescription = "";
        break;
      case "/explorepage":
        title = "";
        metaDescription = "";
        break;
        case "/uploadstep1":
        title = "";
        metaDescription = "";
        break;
      case "/uploadstep2":
        title = "";
        metaDescription = "";
        break;
      case "/signuppage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/uploadstep1" element={<UploadStep1 />} />
      <Route path="/resetpspage/*" element={<ResetPsPage />} />
      <Route path="/forgotpspage" element={<ForgotPsPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/viewpage" element={<ViewPage />} />
      <Route path="/editmykarobarspage" element={<EditMyKarobarsPage />} />
      <Route path="/mykarobarspage" element={<MyKarobarsPage />} />
      <Route path="/explorepage" element={<ExplorePage />} />
      <Route path="/uploadstep2" element={<UploadStep2 />} />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/updatepage/*" element={<UpdatePage />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/mapclick" element={<LeafletClickMap />} />
      <Route path="/userexplore/*" element={<UserExplore />} />

      

    </Routes>
  );
}
export default App;
