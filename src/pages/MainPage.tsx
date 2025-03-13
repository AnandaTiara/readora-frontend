import Navbar from "../components/elements/Navbar";
import Premium from "../components/elements/Premium";
import Footer from "../fragments/Footer";

const booksOfTheDay = [
  {
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    image: "src/assets/image/KlaraAndTheSun.jpeg",
  },
  {
    title: "The Expansion of Awareness",
    author: "Arthur W. Osborn",
    image: "src/assets/image/KlaraAndTheSun.jpeg",
  },
  {
    title: "Self Portrait in Green",
    author: "Marie Ndiaye",
    image: "src/assets/image/KlaraAndTheSun.jpeg",
  },
  {
    title: "Self Portrait in Green",
    author: "Marie Ndiaye",
    image: "src/assets/image/KlaraAndTheSun.jpeg",
  },
  {
    title: "Self Portrait in Green",
    author: "Marie Ndiaye",
    image: "src/assets/image/KlaraAndTheSun.jpeg",
  },
];

const bookSections = [
  {
    title: "Discover",
    text: "Binge Reading From start to Finish",
    books: [
      {
        title: "A Perfect Day to be Alone",
        author: "Nanae Aoyama",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "The Theory of Everything",
        author: "Eddy Rose",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "A Heart & a Body in The World",
        author: "Deb Caletti",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Berta Isla",
        author: "Javier Marías",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "More Miracle Than Bird",
        author: "Alice Miller",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Outside The Box",
        author: "Maria Meindl",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "All Men Are Liars",
        author: "Alberto Manguel",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
    ],
  },
  {
    title: "Top Picks",
    text: "Most rated book of this day",
    books: [
      {
        title: "Catcher in The Rye",
        author: "J.D. Salinger",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "A Perfect Day to be Alone",
        author: "Hannah Parker",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "A Teaspoon of Earth and Sea",
        author: "Dina Nayeri",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Strange Heart Beating",
        author: "Eli Goldstone",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Girl",
        author: "Edna O'Brien",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Tomb of The Unknown Racist",
        author: "Blanche McCrary Boyd",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Let Go My Hand",
        author: "Edward Docs",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Let Go My Hand",
        author: "Edward Docs",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Let Go My Hand",
        author: "Edward Docs",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
      {
        title: "Let Go My Hand",
        author: "Edward Docs",
        image: "src/assets/image/KlaraAndTheSun.jpeg",
      },
    ],
  },
];

const MainPage = () => {
  return (
    <div className="h-[150rem] flex flex-col w-full bg-neutral-500">
      <div className="bg-neutral-600 h-[522px] rounded-b-[110px]">
        <Navbar />
        <div className="mt-40">
          <Premium />
        </div>
        <div className="max-w-[1330px] mx-auto flex min-h-fit flex-col md:flex-row md:items-center md:justify-between px-6 md:px-1 -mt-20">
          <div className="md:w-1/5 -mt-72 -ml-35 flex-col flex
          ">
            <h2 className="text-6xl w-[20rem] font-WulkanDisplayBold font-bold text-primary-500 mt-20 md:mt-40">
              Book of the Day.
            </h2>
            <p className="mt-2 w-[20rem] text-neutral-900 font-AileronRegular">
              Random books to read on this day!
            </p>
          </div>

          {/* Bagian Buku */}
          <div className="flex md:w-4/5 overflow-x-auto overflow-y-hidden scrollbar-hide max-w-full">
            <div className="flex gap-8 mt-6 md:mt-42 snap-x snap-mandatory px-4 w-max">
              {booksOfTheDay.map((book) => (
                <img
                  key={book.title}
                  src={book.image}
                  alt={book.title}
                  className="w-80 bg-cover hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Section Buku */}
        {bookSections.map((section) => (
          <section key={section.title} className="p-8 ml-4">
            <h3 className="font-WulkanDisplayBold text-5xl text-primary-500">
              {section.title}
            </h3>
            <p className="font-AileronRegular text-neutral-900 text-lg">
              {section.text}
            </p>

            <div className="flex gap-4 mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap max-h-full">
              {section.books.map((book) => (
                <div
                  key={book.title}
                  className="text-lg p-4 rounded-lg bg-cover min-w-[13rem] text-start hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full bg-cover"
                  />
                  <h3 className="mt-2 font-bold text-sm text-primary-500 font-WulkanDisplaySemiBold">
                    {book.title}
                  </h3>
                  <p className="text-xs font-AileronRegular text-neutral-900">
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <Footer className="mt-100" />
      </div>
    </div>
  );
};

export default MainPage;
