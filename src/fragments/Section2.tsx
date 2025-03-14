import Button from "../components/elements/Button";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="w-full flex md:h-screen md:flex-row flex-col bg-neutral-600 items-center justify-center text-center md:text-left px-4 md:px-24 py-16">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
        <h2 className="font-WulkanDisplayBold text-6xl text-primary-500 font-semibold">
          Add Your Own Book!
        </h2>
        <p className="font-AileronRegular text-neutral-800 text-lg mt-9 mb-9 max-w-lg md:max-w-xl">
          Punya koleksi e-book yang ingin kamu simpan di sini? Dengan Readora,
          kamu bisa mengunggah buku digital pribadimu dan menggunakan fitur yang
          kami tawarkan!
        </p>
        <Button className="font-AileronSemiBold text-lg w-max mb-9 md:mb-1">
          <Link to="/register">Daftarkan Diri Sekarang!</Link>
        </Button>
      </div>

      <div className="md:w-1/2 w-full flex items-center relative justify-center md:mt-45 px-8 z-0">
        <img src="src/assets/image/Vector.png" alt="Your Own Book" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Section2;
