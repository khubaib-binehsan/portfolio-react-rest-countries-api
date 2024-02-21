function DarkMode({ isDarkMode, setDarkMode }) {
  return (
    <button
      className="text-sm font-bold hover:underline"
      onClick={() => setDarkMode(!isDarkMode)}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default function Header({ isDarkMode, setDarkMode }) {
  return (
    <header
      className="
        min-h-20 p-4 flex justify-between items-center shadow-sm bg-White dark:text-White sm:px-8 lg:px-12 xl:px-16 max-w-[1440px] mx-auto
        dark:bg-DarkBlue
      "
    >
      <p className="font-extrabold">Where in the world?</p>
      <DarkMode setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
    </header>
  );
}
