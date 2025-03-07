import Footer from "../fragments/Footer";
import Navbar from "../components/elements/Navbar";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";
const comments = [
  {
    author: "Achmed",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique possimus rerum animi illum ducimus voluptatibus saepe a eos explicabo fugit corrupti consectetur nisi harum expedita assumenda debitis, mollitia sint beatae quod pariatur laudantium provident maxime. Doloribus sapiente, itaque iure saepe amet similique expedita ipsa tempore numquam dicta molestias, earum maxime labore quam repellat corrupti quo veniam. Minima corrupti aliquam fugiat odit quod ex ipsum modi, harum commodi dolor consectetur? Beatae, fuga! Repellat eum inventore deleniti praesentium soluta minus quas natus excepturi quos in ex deserunt doloremque fuga vel temporibus dolor quidem, culpa atque dignissimos beatae eaque odit. Et, quibusdam!",
    date: "25 Februari 2025",
    likes: 12,
    replies: [
      {
        author: "Achmed",
        text: "Setuju sih kalo itu!",
        date: "25 Februari 2025",
        likes: 12,
      },
      {
        author: "Achmed",
        text: "Setuju sih kalo itu!",
        date: "25 Februari 2025",
        likes: 12,
      },
    ],
  },
  {
    author: "Achmed",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique possimus rerum animi illum ducimus voluptatibus saepe a eos explicabo fugit corrupti consectetur nisi harum expedita assumenda debitis, mollitia sint beatae quod pariatur laudantium provident maxime. Doloribus sapiente, itaque iure saepe amet similique expedita ipsa tempore numquam dicta molestias, earum maxime labore quam repellat corrupti quo veniam. Minima corrupti aliquam fugiat odit quod ex ipsum modi, harum commodi dolor consectetur? Beatae, fuga! Repellat eum inventore deleniti praesentium soluta minus quas natus excepturi quos in ex deserunt doloremque fuga vel temporibus dolor quidem, culpa atque dignissimos beatae eaque odit. Et, quibusdam!",
    date: "25 Februari 2025",
    likes: 12,
    replies: [
      {
        author: "Achmed",
        text: "Setuju sih kalo itu!",
        date: "25 Februari 2025",
        likes: 12,
      },
      {
        author: "Achmed",
        text: "Setuju sih kalo itu!",
        date: "25 Februari 2025",
        likes: 12,
      },
    ],
  },
];

const randomPicks = [
  {
    author: "Joanne",
    title: "A moment to remember.",
    date: "25 Februari 2025",
  },
  {
    author: "Joanne",
    title: "A moment to remember.",
    date: "25 Februari 2025",
  },
  {
    author: "Joanne",
    title: "A moment to remember.",
    date: "25 Februari 2025",
  },
];

const ReviewPage = () => {
  return (
    <div className="min-h-screen bg-neutral-500 ">
      <Navbar />
      <div className="p-10 mb-30">
        {/* Back Button */}
        <Link
          to="/Wtr"
          className="mb-4 flex items-center text-lg font-semibold cursor-pointer mt-35"
        >
          <IoChevronBack className="mr-2 text-base-black" /> Back
        </Link>

        <div className="flex gap-6">
          {/* Left Content */}
          <div className="flex-1 border-r border-neutral-600">
            {/* Review Header */}
            <div className="flex gap-4 p-4 w-full">
              <div className="max-w-[150px]">
              <img
                src="src/assets/image/KlaraAndTheSun.jpeg"
                alt="Book Cover"
                className="w-full object-cover rounded-lg"
              />
              
              <p className="text-primary-500 font-WulkanDisplaySemiBold text-sm mt-3">A Perfect Day to Be Alone</p>
              <p className="text-neutral-800 font-AileronLight text-sm mt-1">Nanae Aoyama</p>
              </div>

              <div>
                {/* Wrapper Nama & Rating */}
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-AileronBold">Gerda Kalista</h1>
                  <div className="flex items-center gap-1 text-accent-500">
                    {[...Array(4)].map((_, i) => (
                      <MdOutlineStarPurple500 key={i} />
                    ))}
                    <MdOutlineStarPurple500 className="text-neutral-700" />
                  </div>
                </div>

                {/* Deskripsi */}
                <p className="text-sm text-neutral-800 font-AileronRegular mt-2 max-w-4xl">
                  Pada akhirnya, apa yang sebenarnya terjadi dengan Finch?
                  Apakah dia benar-benar menemukan kedamaian, atau justru
                  tenggelam dalam kegelapan yang selama ini menghantuinya?
                  Bagaimana peran Vio..
                </p>
                <div className="mt-4 flex items-center text-neutral-700 text-sm">
                  <span>25 Februari 2025</span>
                  <span className="ml-4 flex items-center">
                    <IoMdThumbsUp className="mr-1 text-2xl" /> 12
                  </span>
                </div>
              </div>
            </div>

            {/* Garis Pemisah */}
            <div className="w-5xl h-px mt-20 bg-neutral-600"></div>

            {/* Comment Box */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add a comment"
                className="w-5xl bg-white border border-[#dde1eb] rounded-lg p-2 text-sm"
              />
            </div>

            {/* Comments Section */}
            <div className="mt-6 space-y-4">
              {comments.map((comment, index) => (
                <div key={index} className="p-4 rounded-lg">
                  <p className="font-AileronBold text-xs text-primary-500">
                    {comment.author}
                  </p>
                  <p className="text-sm mt-1 w-5xl text-neutral-900">{comment.text}</p>
                  <div className="mt-2 flex items-center text-neutral-900 text-sm">
                    <span>{comment.date}</span>
                    <span className="ml-4 flex items-center">
                      <IoMdThumbsUp className="mr-1" /> {comment.likes}
                    </span>
                    <span className="ml-4 flex items-center">
                       Reply
                    </span>
                  </div>

                  {/* Replies */}
                  <div className="ml-6 mt-6 space-y-2">
                    {comment.replies.map((reply, i) => (
                      <div key={i} className="pl-4">
                        <p className="font-AileronBold text-xs text-primary-500 mt-5">{reply.author}</p>
                        <p className="text-sm mt-1 text-neutral-900">{reply.text}</p>
                        <div className="mt-2 flex items-center text-gray-500 text-sm">
                          <span>{reply.date}</span>
                          <span className="ml-4 flex items-center">
                            <IoMdThumbsUp className="mr-1" /> {reply.likes}
                          </span>
                          <span className="ml-4 flex items-center">
                             Reply
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/4 p-4 ">
            <h2 className="font-AileronSemiBold text-base-black text-lg mb-4 -mt-5">Random Picks</h2>
            {randomPicks.map((pick, i) => (
              <div key={i} className="mb-4">
                <p className="text-xs font-AileronRegular text-neutral-700">{pick.author}</p>
                <p className="text-base-black font-AileronBold text-sm mb-2">{pick.title}</p>
                <p className="text-xs font-AileronRegular text-neutral-700">{pick.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewPage;
