import { useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import Footer from "../fragments/Footer";
import Premium from "../components/elements/Premium";
import Navbar from "../components/elements/Navbar";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  likes: number;
  bookTitle: string;
  author: string;
  cover: string;
}

const reviews: Review[] = [
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
    <div className="flex items-center justify-start space-x-2 mt-7 cursor-pointer mb-20 mr-15">
      <button
        className="flex items-center px-3 py-2 text-[#23262A] hover:text-black cursor-pointer"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoChevronBack className="mr-1" /> Prev
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      <button
        className="flex items-center px-3 py-2 text-[#23262A] hover:text-black cursor-pointer"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <IoChevronForward className="ml-1" />
      </button>
    </div>
  );
};

const Community = () => {
  return (
    <div>
      <div className="p-8 bg-neutral-500 h-[200rem] lg:h-[150rem]">
        <Navbar/>
        <div className="mt-30">
          <Premium />
        </div>
        <h2 className="py-8 text-3xl lg:text-5xl font-WulkanDisplayBold text-primary-500 mt-6">
          Community
        </h2>

        <div className="flex gap-8 mt-4 flex-col lg:flex-row">
          {/* KIRI: Reviews */}
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

            {/* Pagination */}
            <Pagination totalPages={10} />
          </div>

          {/* KANAN: Random Picks */}
          <div className="w-full lg:w-1/3 p-4 lg:border-l lg:border-l-neutral-600">
            <h2 className="text-3xl lg:text-2xl font-AileronSemiBold text-base-black mb-10 -mt-5">
              Random Picks
            </h2>
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="mb-4">
                <div className="flex items-center gap-2 mt-10">
                  <h3 className="font-bold text-base-black text-xl lg:text-sm">
                    {review.name}
                  </h3>
                  <div className="flex text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <MdOutlineStarPurple500
                        key={i}
                        className={i < review.rating ? "" : "text-neutral-700"}
                      />
                    ))}
                  </div>
                </div>
                <p className=" text-lg lg:text-sm text-neutral-800 mt-3">
                  {review.text}...
                </p>
                <div className="mt-4 flex items-center text-neutral-700 font-AileronRegular text-lg lg:text-sm">
                  <span>{review.date}</span>
                  <span className="ml-4 flex items-center text-neutral-800">
                    <IoMdThumbsUp className="mr-1 -mt-1 text-3xl lg:text-2xl" />{" "}
                    {review.likes}
                  </span>
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

export default Community;
