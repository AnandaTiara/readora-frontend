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
    cover: "",
  },
  {
    id: 2,
    title: "A Perfect Day to Be Alone",
    author: "Nanao Aoyama",
    cover: "",
  },
  {
    id: 3,
    title: "A Teaspoon Of Earth And Sea",
    author: "Dina Nayeri",
    cover: "",
  },
  {
    id: 4,
    title: "Strange Heart Beating",
    author: "Eli Goldstone",
    cover: "",
  },
  { id: 5, title: "Girl", author: "Edna O'Brien", cover: "/girl.jpg" },
  {
    id: 6,
    title: "Tomb Of The Unknown Racist",
    author: "Blanche McCrary Boyd",
    cover: "",
  },
  {
    id: 7,
    title: "Let Go My Hand",
    author: "Edward Docx",
    cover: "",
  },
];

const savedBooks: Book[] = [
  {
    id: 8,
    title: "The Dune's Twisted Edge",
    author: "Gabriel Lewis",
    cover: "",
  },
  {
    id: 9,
    title: "The Odyssey Of Homer",
    author: "Homer",
    cover: "",
  },
  { id: 10, title: "Life Of Pi", author: "Yann Martel", cover: "/pi.jpg" },
  {
    id: 11,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "",
  },
  {
    id: 12,
    title: "How Do You Live?",
    author: "Genzaburo Yoshino",
    cover: "",
  },
  {
    id: 13,
    title: "The Illusion Of Simple",
    author: "Charles Forrest Jones",
    cover: "",
  },
  {
    id: 14,
    title: "The Birds",
    author: "Alfred Hitchcock",
    cover: "",
  },
];

const localBooks: Book[] = [
  {
    id: 15,
    title: "A Perfect Day to Be Alone",
    author: "Nanao Aoyama",
    cover: "",
  },
  {
    id: 16,
    title: "The Theory Of Everything",
    author: "Eddy Roq",
    cover: "",
  },
  {
    id: 17,
    title: "A Heart In A Body In The World",
    author: "Deb Caletti",
    cover: "",
  },
  { id: 18, title: "Berta Isla", author: "Javier Marías", cover: "/berta.jpg" },
  {
    id: 19,
    title: "More Miracle Than Bird",
    author: "Alice Miller",
    cover: "",
  },
  {
    id: 20,
    title: "Outside The Box",
    author: "Maria Winger",
    cover: "",
  },
  {
    id: 21,
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    cover: "",
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
      <div className="grid grid-cols-7 gap-4">
        {books.map((book) => (
          <div key={book.id} className="w-32">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-sm font-semibold mt-2">{book.title}</h3>
            <p className="text-xs text-neutral-900">{book.author}</p>
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
          <BookList
            title="Local Books"
            text="Books you added by yourself."
            books={localBooks}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Saved;
