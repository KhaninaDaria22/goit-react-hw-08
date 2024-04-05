// import ContactList from "./ContactList";
// import ContactForm from "./ContactForm";
// import SearchBox from "./SearchBox";
import css from "./AppBar.module.css"
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from "../../hooks/useAuth";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};