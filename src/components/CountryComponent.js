import { useState } from "react";
import Data from "../data.json";

function DescriptionBlocks({ className, _name, value }) {
  return (
    <p className={`${className} leading-8`}>
      <span className="font-bold">{`${_name}: `}</span>
      <span>{value}</span>
    </p>
  );
}

export default function CountryComponent({
  cardState,
  setCardState,
  country,
  setCountry,
  lookupTable,
}) {
  const {
    name,
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;
  return (
    <div className="CountryComponent px-2 py-6 max-sm:max-w-[350px] mx-auto col-span-2 dark:text-White">
      <button
        className="backButton max-w-fit leading-7 text-sm rounded shadow-md px-8 bg-White dark:bg-DarkBlue"
        onClick={() => setCardState(!cardState)}
      >
        Back
      </button>
      <div className="Component mt-12 md:grid md:grid-cols-2 md:gap-x-10">
        <img className="w-full" src={flags.svg} alt={`${name} Flag`} />
        <div className="textInfo mt-8 flex flex-col gap-8 md:grid md:grid-cols-2 md:mt-0 md:auto-rows-min">
          <h2 className="countryName text-xl font-bold col-span-2">{name}</h2>
          <section>
            <DescriptionBlocks
              className="nativeName"
              _name="Native Name"
              value={nativeName}
            />
            <DescriptionBlocks
              className="population"
              _name="Population"
              value={population.toLocaleString("en-US")}
            />
            <DescriptionBlocks
              className="region"
              _name="Region"
              value={region}
            />
            <DescriptionBlocks
              className="subRegion"
              _name="Sub Region"
              value={subregion}
            />
            <DescriptionBlocks
              className="capital"
              _name="Capital"
              value={capital}
            />
          </section>
          <section>
            <DescriptionBlocks
              className="topLevelDomain"
              _name="Top Level Domain"
              value={topLevelDomain}
            />
            <DescriptionBlocks
              className="currencies"
              _name="Currencies"
              value={currencies?.map((item) => item.name).join(", ")}
            />
            <DescriptionBlocks
              className="languages"
              _name="Languages"
              value={languages?.map((item) => item.name).join(", ")}
            />
          </section>
          <section className="col-span-2 flex flex-wrap gap-2">
            <h3 className="font-bold max-md:mb-4 max-md:basis-full md:max-h-7 md:leading-7 md:mr-2">
              Border Countries:
            </h3>
            {borders?.map((country) => {
              return (
                <button
                  className="borderCountry max-h-7 px-8 bg-White rounded-sm shadow-md text-xs leading-7 dark:bg-DarkBlue"
                  onClick={() => {
                    const newCountry = Data.find(
                      (dataCountry) => dataCountry.alpha3Code == country
                    );
                    setCountry(newCountry);
                  }}
                >
                  {lookupTable[country]}
                </button>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
