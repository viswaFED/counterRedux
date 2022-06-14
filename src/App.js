import { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

// import { authActions } from "./store/index";

function App() {
  const login = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!login && <Auth />}
      {login && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
