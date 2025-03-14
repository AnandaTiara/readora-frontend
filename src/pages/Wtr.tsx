import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarPurple500, MdStar, MdStarBorder } from "react-icons/md";
import Button from "../components/elements/Button";
import { IoMdThumbsUp } from "react-icons/io";
import Footer from "../fragments/Footer";
import Premium from "../components/elements/Premium";
import { useGetBook } from "../hooks/use-books";
import Navbar from "../components/elements/Navbar";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
}

const Books: Book[] = [
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
];

// const BookList = ({
//   books,
// }: {
//   text: string;
//   title: string;
//   books: Book[];
// }) => {
//   return (
// <div className="mt-10">
//   <div className="flex gap-4 mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap max-h-full">
//     {books.map((book) => (
//       <div
//         key={book.id}
//         className="text-lg p-4 rounded-lg bg-cover min-w-[13rem] text-start hover:scale-105 cursor-pointer transition duration-300 ease-in-out"
//       >
//         <img
//           src={book.cover}
//           alt={book.title}
//           className="w-full bg-cover shadow-lg rounded-2xl"
//         />
//         <h3 className="mt-2 font-bold text-sm text-primary-500 font-WulkanDisplaySemiBold">
//           {book.title}
//         </h3>
//         <p className="text-xs font-AileronRegular text-neutral-900">
//           {book.author}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>
// );
// };

interface RatingProps {
  maxStars?: number;
  onRate?: (rating: number) => void;
}

const RatingComponent: React.FC<RatingProps> = ({ maxStars = 5, onRate }) => {
  const [hover, setHover] = useState<number | null>(null);
  const [rating, setRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRate) onRate(index);
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {/* Stars */}
      <div className="flex">
        {Array.from({ length: maxStars }, (_, i) => (
          <button
            key={i}
            className="text-neutral-700 hover:text-yellow-500 transition-colors cursor-pointer"
            onClick={() => handleClick(i + 1)}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(null)}
          >
            {i < (hover ?? rating) ? (
              <MdStar className="text-4xl" />
            ) : (
              <MdStarBorder className="text-4xl" />
            )}
          </button>
        ))}
      </div>

      {/* Text */}
      <p className="text-neutral-900 text-lg font-aileronregular">
        Rate this book
      </p>
    </div>
  );
};

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showDots = totalPages > 6;

    if (!showDots) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        className={`px-4 py-2 mx-1 rounded-lg text-lg cursor-pointer ${
          currentPage === page
            ? "border border-orange-500 text-accent-500"
            : "bg-[#F0F1F5] text-neutral-800"
        } ${
          page === "..."
            ? "cursor-default bg-[#F0F1F5]"
            : "hover:bg-neutral-200 hover:border hover:border-orange-500 hover:text-accent-500"
        }`}
        onClick={() => typeof page === "number" && goToPage(page)}
        disabled={page === "..."}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-end space-x-2 mt-4 cursor-pointer mb-20 mr-15 max-w-4/5">
      <button
        className="flex items-center px-3 py-2 text-neutral-800 hover:text-black cursor-pointer"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack className="mr-1" /> Prev
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      <button
        className="flex items-center px-3 py-2 text-neutral-900 hover:text-black cursor-pointer"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <IoChevronForward className="ml-1" />
      </button>
    </div>
  );
};

const Wtr = () => {
  let { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }

  const { data, isLoading, isError } = useGetBook(id);

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Book Not Found</div>;
  }

  if (isError) {
    return <div>Book Not Found</div>;
  }

  return (
    <div>
      <div className="bg-neutral-500 min-h-screen p-6 w-full">
        <Navbar />
        <div className="mt-30">
          <Premium />
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-20 w-full">
          {/* Bagian Kiri */}
          <div className="w-full md:w-1/3 -ml-5 pl-20">
            {/* Back Button */}
            <Link
              to="/MainPage"
              className="flex items-center text-base-black font-AileronRegular text-2xl mb-6 "
            >
              <IoChevronBack className="mr-2 text-base-black" /> Back
            </Link>

            {/* Image buku */}
            <div className="flex justify-center max-h-[550px] rounded-lg overflow-hidden">
              <img
                src={data.data.cover_image_url}
                alt="Klara and The Sun"
                className="w-full h-full rounded-lg justify-center shadow-md"
              />
            </div>

            <div className="">
              <Link to={`/book/${data.data.id}/read`}>
                <Button className="w-full py-4 cursor-pointer"> Read</Button>
              </Link>
            </div>

            <RatingComponent
              onRate={(rating) => console.log("Rating diberikan:", rating)}
            />
          </div>

          {/* Bagian Kanan */}
          <div className="w-full">
            <div className="max-w-3xl mt-13 ">
              <h2 className="text-7xl text-primary-500 font-WulkanDisplayBold">
                {data.data.title}
              </h2>
              <p className="text-2xl font-Aileronregular text-neutral-700 mt-5">
                {data.data.author}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center text-4xl gap-3">
              {[...Array(4)].map((_, i) => (
                <MdOutlineStarPurple500 key={i} className="text-accent-500" />
              ))}
              <MdOutlineStarPurple500 className="text-neutral-700" />
              <h3 className="ml-2 text-neutral-900 text-4xl font-WulkanDisplayRegular -mt-3">
                {data.data.rating}
              </h3>
            </div>

            <p className="mt-7 text-Aileronlight text-base-black text-sm">
              162,157 ratings •{" "}
              <span className="font-AileronSemiBold">224 Pages</span>
            </p>

            {/* Deskripsi */}
            <div>
              <p className="mt-7 text-base-black font-AileronRegular">
                {data.data.description}
              </p>
              <button className="cursor-pointer text-neutral-800 flex items-center gap-1 text-sm mt-3">
                Show More <IoIosArrowDown className="mt-1" />
              </button>
            </div>

            {/* Genres */}
            <div>
              <p className="mt-4 text-neutral-800 text-md mb-1">Genres</p>
              <div className="flex gap-2 mt-1 items-center ">
                {data.data.genres.map((genre) => (
                  <span className="bg-primary-500 text-neutral-50 px-3 py-1 rounded-full text-lg">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Garis Pemisah */}
            <div className="w-full h-px mt-10 bg-neutral-600 "></div>

            <div className="mt-12">
              <h3 className="text-5xl font-WulkanDisplayRegular text-primary-500">
                Similar to title
              </h3>
              <div className="flex gap-4 mt-4 overflow-x-scroll overflow-y-hidden scrollbar-hide whitespace-nowrap max-h-full max-w-4/5 w-">
                {Books.map((book) => (
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

              {/* Garis Pemisah */}
              <div className="w-full h-px mt-20 bg-neutral-600 mb-20"></div>

              {/* Community Reviews */}
              <div className="mt-12">
                <h3 className="text-5xl font-WulkanDisplaySemiBold text-primary-500">
                  Community reviews
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
                        <MdStar className="text-gray-300 text-2xl" />
                        <span className="ml-2 text-neutral-700 text-sm">
                          January 25, 2025
                        </span>
                      </div>
                      <p className="mt-2 text-gray-700 pr-15">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque eum quae neque odio ad deserunt obcaecati?
                        Commodi molestias iste, reiciendis quo nesciunt a
                        aperiam rerum amet consequuntur minima explicabo
                        exercitationem, quisquam perferendis quos eos
                        reprehenderit perspiciatis eligendi veritatis. Amet sit
                        magnam molestias nulla sunt! Vero eaque consequatur
                        eligendi sint modi? Iusto, similique fugiat? Blanditiis,
                        odio? Officiis accusamus quam, dicta molestiae eum totam
                        pariatur fuga provident voluptas magni. Possimus, eaque?
                        Illo totam ex et esse fugit explicabo natus maiores nisi
                        voluptas placeat odit tenetur dolores vel cupiditate est
                        eaque, ipsa hic ipsum veritatis culpa eos labore
                        molestiae in! Perferendis, dolor qui!
                      </p>
                      <div className="flex items-center text-gray-500 mt-2">
                        <IoMdThumbsUp className="mr-1 text-2xl" /> 12
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <Pagination totalPages={10} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wtr;
