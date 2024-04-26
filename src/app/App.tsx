import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers";
import { AppRouter } from "./providers/router";
import { Navbar } from "src/widgets/Navbar";



const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link> */}
      <AppRouter />
      
    </div>
  );
};

export default App;
