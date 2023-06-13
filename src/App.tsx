import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { PublicRoutes, RoutesComponents } from "./Routes/Routes";

function App() {
  const getRoutes = () => {
    return RoutesComponents.map((prop, key) => {
      let Component = prop.component;
      return <Route path={prop.path} element={<Component />} key={key} />;
    });
  };

  const getRoutesPublic = () => {
    return PublicRoutes.map((prop, key) => {
      let Component = prop.component;
      return <Route path={prop.path} element={<Component />} key={key} />;
    });
  };
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>{getRoutesPublic()}</Route>
        <Route element={<PrivateRoute />}>
          {getRoutes()}
        </Route>
      </Routes>
    </>
  );
}

export default App;
