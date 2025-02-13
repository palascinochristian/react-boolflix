import Searchbar from "./Searchbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex p-5 justify-between content-center">
      <Logo />
      <Searchbar />
    </header>
  );
}
