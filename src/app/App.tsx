import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers";
import AboutPage from "src/pages/AboutPage/ui/AboutPage";
import MainPage from "src/pages/MainPage/ui/MainPage";



const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
