import GalleryComponent from "./GalleryComponent";
import myJSON from "../data.json";

export default function Gallery({
  setCountry,
  cardState,
  setCardState,
  selectedFilter,
}) {
  const data = myJSON;
  const sortedData = data.slice().sort(function (a, b) {
    let keyA = a.population;
    let keyB = b.population;
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });
  let filteredData = [];
  if (selectedFilter !== null) {
    filteredData = data
      .slice()
      .filter((item) => item.region === selectedFilter);
  } else {
    filteredData = data;
  }
  return (
    <div
      className="
        GalleryComponent mt-6 flex flex-col gap-x-6 gap-y-8
        sm:col-span-2 sm:grid sm:grid-cols-two sm:auto-cols-min sm:justify-center lg:grid-cols-three xl:grid-cols-four max-w-[1440px] mx-auto
      "
    >
      {filteredData.map((item) => (
        <GalleryComponent
          country={item}
          setCountry={setCountry}
          cardState={cardState}
          setCardState={setCardState}
        />
      ))}
    </div>
  );
}
