import { Fragment, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import AppRoutes from "./Routes/routes";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.product);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <Fragment>
            <Navbar />
            <AppRoutes />
        </Fragment>
    );
}

export default App;
