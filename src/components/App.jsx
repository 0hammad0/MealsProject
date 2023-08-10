import Search from "./Search";
import Favorites from "./Favorites";
import Meals from "./Meals";
import Modal from "./Modal";
import { useGlobalContext } from "../context";
import "./App.css";

export default function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <>
      <main>
        <Search />
        {favorites.length > 0 ? <Favorites /> : null}
        <Meals />
        {showModal ? <Modal /> : null}
      </main>
    </>
  );
}
