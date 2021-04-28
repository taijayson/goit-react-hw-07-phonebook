import AuthNav from "../AuthNav/AuthNav";
import HomeNav from "../HomeNav/HomeNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

const HeaderBar = () => {
  const isAuth = useSelector((state) => state.auth.token);
  return (
    <header>
      <HomeNav />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default HeaderBar;
