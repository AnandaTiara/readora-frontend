import { IoMdThumbsUp } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Footer from "../fragments/Footer";
import Premium from "../components/elements/Premium";
import Navbar from "../components/elements/Navbar";

const books = [
  {
    title: "The Dune’s Twisted Edge",
    author: "Gail Lister",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Odyssey Of Homer",
    author: "Dennis Price",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  { title: "Life Of Pi", author: "Yann Martel", image: "src/assets/image/TheIllusionOfSimple.jpg" },
  {
    title: "All Men Are Liars",
    author: "Alberto Manguel",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "How Do You Live?",
    author: "Genzaburo Yoshino",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Illusion of Simple",
    author: "Charles Forrest Jones",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    title: "The Birds",
    author: "Alfred Hitchcock",
    image: "src/assets/image/TheIllusionOfSimple.jpg",
  },
];

const reviews = [
  {
    id: 1,
    name: "Gerda Kalista",
    rating: 4,
    date: "25 Februari 2025",
    text: "Pada akhirnya, apa yang sebenarnya terjadi dengan Finch? Apakah dia benar-benar menemukan kedamaian, atau justru tenggelam dalam kegelapan yang selama ini menghantuinya? Bagaimana peran Violet dalam perjalanan Finch, dan apakah ada sesuatu yang bisa mencegah akhir tragisnya?",
    likes: 12,
    bookTitle: "The Illusion of a Simple",
    author: "Nanae Kojima",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 2,
    name: "Gerda Kalista",
    rating: 4,
    date: "25 Februari 2025",
    text: "Pada akhirnya, apa yang sebenarnya terjadi dengan Finch? Apakah dia benar-benar menemukan kedamaian, atau justru tenggelam dalam kegelapan yang selama ini menghantuinya? Bagaimana peran Violet dalam perjalanan Finch, dan apakah ada sesuatu yang bisa mencegah akhir tragisnya?",
    likes: 12,
    bookTitle: "A Perfect Way to Be Alone",
    author: "Nanae Kojima",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 3,
    name: "Gerda Kalista",
    rating: 4,
    date: "25 Februari 2025",
    text: "Pada akhirnya, apa yang sebenarnya terjadi dengan Finch? Apakah dia benar-benar menemukan kedamaian, atau justru tenggelam dalam kegelapan yang selama ini menghantuinya? Bagaimana peran Violet dalam perjalanan Finch, dan apakah ada sesuatu yang bisa mencegah akhir tragisnya?",
    likes: 12,
    bookTitle: "A Perfect Way to Be Alone",
    author: "Nanae Kojima",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
  {
    id: 4,
    name: "Gerda Kalista",
    rating: 4,
    date: "25 Februari 2025",
    text: "Pada akhirnya, apa yang sebenarnya terjadi dengan Finch? Apakah dia benar-benar menemukan kedamaian, atau justru tenggelam dalam kegelapan yang selama ini menghantuinya? Bagaimana peran Violet dalam perjalanan Finch, dan apakah ada sesuatu yang bisa mencegah akhir tragisnya?",
    likes: 12,
    bookTitle: "Heart and the World",
    author: "Deb Caletti",
    cover: "src/assets/image/TheIllusionOfSimple.jpg",
  },
];

const Search: React.FC = () => {
  return (
    <div>
      <div className="bg-neutral-500 min-h-[120rem] p-10">
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
          <div className="flex gap-4 mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap max-h-full">
            {books.map((book, index) => (
              <div key={index} className="text-lg p-4 rounded-lg bg-cover min-w-[13rem] text-start hover:scale-105 cursor-pointer transition duration-300 ease-in-out">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full bg-cover shadow-lg rounded-2xl"
                />
                <p className="mt-2 font-bold text-sm text-primary-500 font-WulkanDisplaySemiBold">{book.title}</p>
                <p className="text-xs font-AileronRegular text-neutral-900">{book.author}</p>
              </div>
            ))}
          </div>

          <h3 className="text-4xl font-WulkanDisplayRegular mt-10 text-primary-500">
            Community
          </h3>
          <div className="flex-1">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="flex gap-4 p-4 rounded-lg border-b border-b-neutral-600  mb-10"
                        >
                          <div className="max-w-[150px]">
                            <img
                              src={review.cover}
                              alt="Book Cover"
                              className="w-[20rem] object-cover rounded"
                            />
                            {/* Judul & Author */}
                            <div className="text-xs text-neutral-800 mt-1"></div>
                            <p className="font-WulkanDisplaySemiBold text-primary-500 text-sm">
                              {review.bookTitle}
                            </p>{" "}
                            <p className="text-xs text-neutral-800 mt-1">
                              {review.author}
                            </p>
                          </div>
                          <div>
                            {/* Nama & Rating */}
                            <div className="flex items-center gap-2">
                              <h2 className="text-2xl font-AileronBold">{review.name}</h2>
                              <div className="flex text-accent-500 text-lg">
                                {[...Array(5)].map((_, i) => (
                                  <MdOutlineStarPurple500
                                    key={i}
                                    className={
                                      i < review.rating ? "" : "text-neutral-700"
                                    }
                                  />
                                ))}
                              </div>
                            </div>
          
                            {/* Review Text */}
                            <p className="text-neutral-800 font-AileronRegular text-sm max-w-3xl mt-2">
                              {review.text}
                            </p>
          
                            {/* Date & Likes */}
                            <div className="mt-4 flex items-center text-neutral-700 fony-AileronRegular text-sm mb-15">
                              <span>{review.date}</span>
                              <span className="ml-4 flex items-center text-neutral-800">
                                <IoMdThumbsUp className="mr-1 -mt-1 text-2xl" />{" "}
                                {review.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
