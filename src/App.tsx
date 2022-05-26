import { FC } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { IBook } from "./Interfaces";

import data from "./Data.json";

const App: FC = () => {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book name" booksData={data} />
    </div>
  );
};
export default App;
