import Searchbar from "./Searchbar";

export default function Header() {
  return (
    <header className="flex p-5 justify-between content-center">
      <h1 className="text-4xl mr-4">Boolflix</h1>
      <Searchbar />
    </header>
  );
}
