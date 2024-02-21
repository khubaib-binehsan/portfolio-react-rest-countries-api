export default function GalleryComponent(props) {
  const { name, population, region, capital, flags } = props.country;
  const setCountry = props.setCountry;

  const onClickHandler = () => {
    setCountry(props.country);
    props.setCardState(!props.cardState);
  };

  return (
    <div className="GalleryComponent mx-6 sm:mx-0 rounded-lg w-full max-w-[320px] shadow overflow-hidden bg-White dark:text-White dark:bg-DarkBlue">
      <img
        className="w-full object-cover aspect-[2] hover:cursor-pointer"
        src={flags.svg}
        alt="Afghanistan Flag"
        onClick={() => onClickHandler()}
      />
      <div className="Description p-8 pb-12">
        <h1
          className="font-bold text-xl mb-4 hover:cursor-pointer"
          onClick={() => onClickHandler()}
        >
          {name}
        </h1>
        <p>
          <span className="font-bold">Population: </span>
          <span>{population.toLocaleString("en-US")}</span>
        </p>
        <p>
          <span className="font-bold">Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span className="font-bold">Captial: </span>
          <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
