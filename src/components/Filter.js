import { useState } from "react";

function DropdownItem({ value, selectedFilter, setSelectedFilter }) {
  const baseClass =
    "bg-White w-full hover:bg-slate-300 dark:bg-DarkBlue dark:hover:bg-DarkGray";
  const alteredClass = `${baseClass} font-bold bg-slate-200 dark:bg-slate-400 dark:text-black`;
  return (
    <button
      className={selectedFilter == value ? alteredClass : baseClass}
      onClick={(e) => {
        selectedFilter == value
          ? setSelectedFilter(null)
          : setSelectedFilter(value);
      }}
    >
      {value}
    </button>
  );
}

function FilterDropdown({ filters, selectedFilter, setSelectedFilter }) {
  return (
    <div className="filterDropdown absolute w-full left-0 top-[40px] bg-White border-t-[1px] border-slate-200 dark:border-black">
      {filters?.map((item) => (
        <DropdownItem
          value={item}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      ))}
    </div>
  );
}

export default function Filter({ filters, selectedFilter, setSelectedFilter }) {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      className="Filter relative max-h-10 leading-6 text-xs rounded-sm shadow-sm font-bold mt-8 sm:mt-0 px-6 py-2 max-w-fit sm:ml-auto bg-White dark:text-White dark:bg-DarkBlue"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <span>Filter by Region</span>
      {toggle && (
        <FilterDropdown
          filters={filters}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      )}
    </button>
  );
}
