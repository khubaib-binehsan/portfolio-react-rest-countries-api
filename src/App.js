import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Gallery from "./components/Gallery";
import CountryComponent from "./components/CountryComponent";
import { useState } from "react";
import myJSON from "./data.json";

let lookupTable = {};
myJSON.forEach((item) => {
  lookupTable[item.alpha3Code] = item.name;
});

const regions = [...new Set(myJSON.map((country) => country.region))].sort();

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [cardState, setCardState] = useState(false);
  const [country, setCountry] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const lightThemeClass = "EmptyContainerForTailwindDarkMode font-nunito";
  const darkThemeClass = `${lightThemeClass} dark`;
  return (
    <div className={isDarkMode ? darkThemeClass : lightThemeClass}>
      <div className="min-w-screen min-h-screen bg-VeryLightGray dark:bg-VeryDarkBlue-bg">
        <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
        <main
          className="
            p-4 pb-16 max-sm:max-w-[400px] mx-auto
            sm:grid sm:grid-cols-2 sm:p-8 sm:gap-x-6 lg:p-12 xl:p-16 max-w-[1440px]
        "
        >
          {cardState ? (
            <CountryComponent
              cardState={cardState}
              setCardState={setCardState}
              lookupTable={lookupTable}
              country={country}
              setCountry={setCountry}
            />
          ) : (
            <>
              <Search
                setCountry={setCountry}
                setCardState={setCardState}
                cardState={cardState}
              />
              <Filter
                filters={regions}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
              <Gallery
                cardState={cardState}
                setCardState={setCardState}
                setCountry={setCountry}
                selectedFilter={selectedFilter}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
