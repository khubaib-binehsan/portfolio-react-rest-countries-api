import { useState } from "react";
import Data from "../data.json";

const SearchLine = ({ country, setCountry, cardState, setCardState }) => {
  return (
    <button
      className="w-full flex gap-4 text-xs py-3 px-12 hover:bg-slate-200 dark:hover:bg-slate-400 dark:hover:text-black text-left"
      onClick={() => {
        setCountry(country);
        setCardState(!cardState);
      }}
    >
      <img
        src={country.flags.svg}
        alt={`${country.name} Flag`}
        className="aspect-[1.5] object-cover w-8"
      />
      <p>{country.name}</p>
    </button>
  );
};

const NotFound = () => {
  return (
    <div className="w-full flex gap-4 text-xs py-3 px-12">No such country</div>
  );
};

const SearchResults = ({
  setCountry,
  cardState,
  setCardState,
  filteredResults,
}) => {
  return (
    <div className="absolute shadow-xl rounded overflow-hidden z-10 w-full left-0 top-12 bg-White dark:bg-DarkBlue dark:text-White">
      {filteredResults.length > 0 ? (
        filteredResults?.slice(0, 9).map((country) => {
          return (
            <SearchLine
              setCountry={setCountry}
              cardState={cardState}
              setCardState={setCardState}
              country={country}
            />
          );
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default function Search({ setCountry, cardState, setCardState }) {
  const [toggleSearchResults, setToggleSearchResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState(null);
  return (
    <div className="relative md:max-w-96">
      <input
        type="text"
        name="search"
        className="SearchComponent relative w-full rounded-sm max-h-10 leading-8 text-xs mt-1 sm:mt-0 py-2 px-12 text-DarkGray shadow-sm bg-White dark:bg-DarkBlue dark:text-White"
        placeholder="Search for a country..."
        onChange={(e) => {
          const inputValue = e.target.value;
          inputValue == ""
            ? setToggleSearchResults(false)
            : setToggleSearchResults(true);
          const filteredData = Data.filter(
            (country) =>
              country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !==
              -1
          );
          setFilteredResults(filteredData);
        }}
      ></input>
      {toggleSearchResults && (
        <SearchResults
          setCountry={setCountry}
          cardState={cardState}
          setCardState={setCardState}
          filteredResults={filteredResults}
        />
      )}
    </div>
  );
}
