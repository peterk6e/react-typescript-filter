import { ChangeEvent, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { IBook } from "../Interfaces";

interface Props {
  placeholder: string;
  booksData: IBook[];
}

function SearchBar({ placeholder, booksData }: Props) {
  const [filteredData, setFilteredData] = useState<IBook[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchedWord: string = e.target.value;

    const newFilter = booksData.filter((value: IBook) => {
      return value.title.toLowerCase().includes(searchedWord.toLowerCase());
    });
    if (!searchedWord) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="search-input">
        <input type="text" placeholder={placeholder} onChange={handleChange} />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.map((value: IBook, key: number) => {
            return (
              <a
                href={value.link}
                target="_blank"
                rel="noreferrer"
                key={key}
                className="element-result"
                title={value.title + ", " + value.year + ", " + value.author}
              >
                {value.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
