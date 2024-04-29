import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers";
import { AppRouter } from "./providers/router";
import { Navbar } from "src/widgets/Navbar";
import { Sidebar } from "src/widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
