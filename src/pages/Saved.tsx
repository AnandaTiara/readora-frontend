import Button from "../components/elements/Button";
import Navbar from "../components/elements/Navbar";
import Premium from "../components/elements/Premium";
import Footer from "../fragments/Footer";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

const continueReading: Book[] = [
  {
    id: 1,
    title: "Catcher In The Rye",
    author: "JD Salinger",
    cover: "src/assets/image/CatcherInTheRye.jpg",
  },
  {
    id: 2,
    title: "A Perfect Day to Be Alone",
    author: "Nanao Aoyama",
    cover: "src/assets/image/APerfectDayToBeAlone.jpg",
  },
  {
    id: 3,
    title: "A Teaspoon Of Earth And Sea",
    author: "Dina Nayeri",
    cover: "src/assets/image/ATeaSpoon.jpg",
  },
  {
    id: 4,
    title: "Strange Heart Beating",
    author: "Eli Goldstone",
    cover: "src/assets/image/Strange.jpg",
  },
  {
    id: 5,
    title: "Girl",
    author: "Edna O'Brien",
    cover: "src/assets/image/Girl.jpg",
  },
  {
    id: 6,
    title: "Tomb Of The Unknown Racist",
    author: "Blanche McCrary Boyd",
    cover: "src/assets/image/Tomb.jpg",
  },
  {
    id: 7,
    title: "Let Go My Hand",
    author: "Edward Docx",
    cover: "src/assets/image/Let.jpg",
  },
  {
    id: 7,
    title: "Let Go My Hand",
    author: "Edward Docx",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 7,
    title: "Let Go My Hand",
    author: "Edward Docx",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 7,
    title: "Let Go My Hand",
    author: "Edward Docx",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
];

const savedBooks: Book[] = [
  {
    id: 8,
    title: "The Dune's Twisted Edge",
    author: "Gabriel Lewis",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 9,
    title: "Catcher In The Rye",
    author: "JD Salinger",
    cover: "src/assets/image/CatcherInTheRye.jpg",
  },
  {
    id: 10,
    title: "A Heart In A Body In The World",
    author: "Deb Caletti",
    cover: "src/assets/image/AHeartInABodyInTheWorld.jpg",
  },
  {
    id: 11,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 12,
    title: "A Perfect Day to Be Alone",
    author: "Nanao Aoyama",
    cover: "src/assets/image/APerfectDayToBeAlone.jpg",
  },
  {
    id: 13,
    title: "The Illusion Of Simple",
    author: "Charles Forrest Jones",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 14,
    title: "Outside The Box",
    author: "Maria Winger",
    cover: "src/assets/image/OutsideTheBox.jpg",
  },
  {
    id: 14,
    title: "The Birds",
    author: "Alfred Hitchcock",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 14,
    title: "The Birds",
    author: "Alfred Hitchcock",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 14,
    title: "The Birds",
    author: "Alfred Hitchcock",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
];

const localBooks: Book[] = [
  {
    id: 15,
    title: "A Perfect Day to Be Alone",
    author: "Nanao Aoyama",
    cover: "src/assets/image/APerfectDayToBeAlone.jpg",
  },
  {
    id: 16,
    title: "The Theory Of Everything",
    author: "Eddy Roq",
    cover: "src/assets/image/TheTheoryOfEverything.jpg",
  },
  {
    id: 17,
    title: "A Heart In A Body In The World",
    author: "Deb Caletti",
    cover: "src/assets/image/AHeartInABodyInTheWorld.jpg",
  },
  {
    id: 18,
    title: "Berta Isla",
    author: "Javier Marías",
    cover: "src/assets/image/BertaIsla.jpg",
  },
  {
    id: 19,
    title: "More Miracle Than Bird",
    author: "Alice Miller",
    cover: "src/assets/image/MoreMiracleThanBird.jpg",
  },
  {
    id: 20,
    title: "Outside The Box",
    author: "Maria Winger",
    cover: "src/assets/image/OutsideTheBox.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/AllMenAreLiars.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
];

const BookList = ({
  title,
  books,
  text,
}: {
  text: string;
  title: string;
  books: Book[];
}) => {
  return (
    <div className="mt-10">
      <h3 className="text-5xl font-WulkanDisplayBold text-primary-500 mb-2">
        {title}
      </h3>
      <p className="text-lg text-neutral-900 font-AileronRegular mb-15">
        {text}
      </p>

      <div className="flex gap-4 mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap max-h-full">
        {books.map((book) => (
          <div
            key={book.id}
            className="text-lg p-4 rounded-lg bg-cover min-w-[13rem] text-start hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full bg-cover shadow-lg rounded-2xl"
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
    </div>
  );
};

const Saved = () => {
  return (
    <>
      <Navbar />
      <div className="p-15 bg-neutral-500 min-h-screen">
        <div className="mt-25 mb-30">
          <div className="mt-20">
            <Premium />
          </div>
          <div className="flex justify-end mt-15 -mb-20 -ml-60">
            <Button>Add Books</Button>
          </div>
          <BookList
            title="Local Books"
            text="Books you added by yourself"
            books={localBooks}
          />
          <BookList
            title="Continue Reading"
            text="Read where you left off."
            books={continueReading}
          />
          <BookList
            title="Saved Books"
            text="Books you saved."
            books={savedBooks}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Saved;
