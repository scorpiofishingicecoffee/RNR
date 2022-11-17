import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/protected">Protected</Link>
      </div>
      <div>
        <Link to="/public">Public</Link>
      </div>
      <h1>theres an outlet underneath. outlet is used for</h1>
      <Outlet/>
    </div>
  );
};

export default Layout;
