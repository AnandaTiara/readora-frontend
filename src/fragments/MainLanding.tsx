import React from "react";
import BulatMain from "../components/elements/BulatMain";
import TextMain from "../components/elements/TextMain";

const  MainLanding: React.FC = () => {
  return (
    <div className="bg-neutral-500 w-full py-20 px-6 md:h-[115rem] relative ">
      <h2 className="text-center font-semibold font-WulkanDisplayBold text-5xl text-primary-500 mb-20 mt-30">
      How do Readora Works?
      </h2>

      <div className="">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 relative md:ml-10 md:mr-30 mt-60 ">
        {/* Fitur 1 */}
        <div className="flex md:flex-row items-center gap-6 col-span-2 justify-start md:ml-20 max-w-2xl ">
          <BulatMain>1</BulatMain>
          <TextMain
            title="Search Easier, Read Faster"
            description="Dengan teknologi AI, Readora membantu kamu menemukan istilah, konsep, atau referensi dalam e-book dengan lebih cepat dan akurat. Tak perlu lagi mencari manual di Google!"
          />
        </div>

        {/* Fitur 2 */}
        <div className="flex items-center gap-6 md:col-start-2 md:row-start-2 max-w-2xl mt-40 space-x-4">
          <BulatMain>2</BulatMain>
          <TextMain
            title="Personalized Reading Experience"
            description="Atur tampilan sesuai kenyamananmu—mode gelap, ukuran font, dan tata letak yang fleksibel untuk pengalaman membaca yang lebih nyaman. Serta temukan bacaan yang sesuai dengan minatmu dengan sistem rekomendasi pintar."
          />
        </div>

        {/* Fitur 3 */}
        <div className="flex items-center gap-6 col-span-2 justify-start md:ml-20 max-w-2xl mt-30 space-x-4 ">
          <BulatMain>3</BulatMain>
          <TextMain
            title="Community & Collaboration"
            description="Diskusikan buku favoritmu dengan sesama pembaca, bagikan wawasan, dan temukan sudut pandang baru."
          />
        </div>
      </div> 
      </div>

      

      <div>
        {/* Gambar Buku 1 */}
        <img
          src="src/assets/image/Book2Main.png"
          alt="Book 1"
          className="absolute top-170 left-0 w-30 md:w-[290px]"
        />
        {/* Gambar Buku 2 */}
        <img
          src="src/assets/image/Book1Main.png"
          alt="Book 2"
          className="absolute top-50 right-0 w-30 md:w-[290px]"
        />
        {/* Gambar Buku 3 */}
        <img
          src="src/assets/image/Book3Main.png"
          alt="Book 3"
          className="absolute bottom-20 right-0 w-30 md:w-[320px]"
        />
      </div>
    </div>
  );
};

export default MainLanding;
