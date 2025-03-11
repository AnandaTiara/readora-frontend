import Navbar from "../components/elements/Navbar";
import { IoMdThumbsUp } from "react-icons/io";
import { MdStar } from "react-icons/md";
import Footer from "../fragments/Footer";
import Premium from "../components/elements/Premium";

const books = [
  {
    title: "The Dune’s Twisted Edge",
    author: "Gail Lister",
    image: "/path/to/image1.jpg",
  },
  {
    title: "The Odyssey Of Homer",
    author: "Dennis Price",
    image: "/path/to/image2.jpg",
  },
  { title: "Life Of Pi", author: "Yann Martel", image: "/path/to/image3.jpg" },
  {
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    image: "/path/to/image4.jpg",
  },
  {
    title: "How Do You Live?",
    author: "Genzaburo Yoshino",
    image: "/path/to/image5.jpg",
  },
  {
    title: "The Illusion of Simple",
    author: "Charles Forrest Jones",
    image: "/path/to/image6.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "/path/to/image7.jpg",
  },
];

const Search: React.FC = () => {
  return (
    <div>
      <div className="bg-neutral-500 min-h-screen p-10">
        <Navbar />
        <div className="mt-30">
          <Premium/>
        </div>
        <div className=" max-w-auto mt-20">
          <h2 className="text-6xl font-WulkanDisplayBold text-primary-500">
            Search Results
          </h2>
          <p className="text-neutral-800 font-AileronLight text-sm mt-4">
            Search results 51,268 for 'romance'
          </p>

          <h3 className="text-4xl font-WulkanDisplaySemiBold mt-15 text-primary-500">
            Books
          </h3>
          <div className="flex gap-6 overflow-x-auto py-4">
            {books.map((book, index) => (
              <div key={index} className="w-32 text-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="font-semibold text-sm mt-2">{book.title}</p>
                <p className="text-xs text-gray-500">{book.author}</p>
              </div>
            ))}
          </div>

          <h3 className="text-4xl font-WulkanDisplayRegular mt-10 text-primary-500">
            Community
          </h3>
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="mt-6 pb-6 flex">
              {/* KIRI: Nama */}
              <div className="w-1/11">
                <p className="font-bold">John Doe</p>
              </div>

              {/* KANAN: Review */}
              <div className="w-10/11">
                <div className="flex items-center gap-2">
                  <MdStar className="text-accent-500 text-2xl" />
                  <MdStar className="text-accent-500 text-2xl" />
                  <MdStar className="text-accent-500 text-2xl" />
                  <MdStar className="text-accent-500 text-2xl" />
                  <MdStar className="text-neutral-700 text-2xl" />
                  <span className="ml-2 text-neutral-700 text-sm">
                    January 25, 2025
                  </span>
                </div>
                <p className="mt-2 text-neutral-900 pr-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eum quae neque odio ad deserunt obcaecati? Commodi
                  molestias iste, reiciendis quo nesciunt a aperiam rerum amet
                  consequuntur minima explicabo exercitationem, quisquam
                  perferendis quos eos reprehenderit perspiciatis eligendi
                  veritatis. Amet sit magnam molestias nulla sunt! Vero eaque
                  consequatur eligendi sint modi? Iusto, similique fugiat?
                  Blanditiis, odio? Officiis accusamus quam, dicta molestiae eum
                  totam pariatur fuga provident voluptas magni. Possimus, eaque?
                  Illo totam ex et esse fugit explicabo natus maiores nisi
                  voluptas placeat odit tenetur dolores vel cupiditate est
                  eaque, ipsa hic ipsum veritatis culpa eos labore molestiae in!
                  Perferendis, dolor qui!
                </p>
                <div className="flex items-center text-gray-500 mt-2">
                  <IoMdThumbsUp className="mr-1 text-2xl" /> 12
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
