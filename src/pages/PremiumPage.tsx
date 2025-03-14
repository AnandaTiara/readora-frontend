import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { IoMdClose } from "react-icons/io";
import Footer from "../fragments/Footer";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../components/elements/Button";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const PremiumPage: React.FC = ({ className }: Props) => {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="h-[100rem] w-full overflow-x-hidden bg-neutral-500 text-base-black">
        <nav className="fixed w-full top-3 z-40 flex justify-center items-center">
          <div
            className={cn(
              "relative rounded-xl md:rounded-xl px-8 py-1 w-[95%] p-4 backdrop-blur-[19px] bg-white/50 shadow-xl",
              className || ""
            )}
          >
            <div className="flex justify-center items-center relative">
              <div className="flex gap-2 items-center">
                <div className="-mt-2">
                  <img
                    src="src/assets/image/Logo.png"
                    alt="Logo Readora"
                    className="h-6"
                  />
                </div>
                <p
                  className="text-xl font-WulkanDisplayLight text-base-black cursor-pointer"
                  onClick={() => Navigate("/")}
                >
                  Readora
                </p>
              </div>
            </div>

            <div className="absolute right-13 top-1/2 -translate-y-1/2">
              <Link to="/">
                <IoMdClose
                  size={22}
                  className="text-base-black cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-col-reverse pb-18 md:pb-0 md:flex-row  min-h-screen lg:h-screen w-screen bg-neutral-500 overflow-hidden">
          <div className="w-full md:w-1/2 flex  px-4  flex-col md:p-8">
            <h1 className="text-7xl font-WulkanDisplaySemiBold text-black mb-12 text-center mt-26">
              Access Everything & Support Readora.
            </h1>
            {/* Kartu-kartu */}
            <div className="flex flex-col lg:flex-row gap-15 justify-center items-center">
              {/* KIRI KIRI (Monthly) */}
              <div className="bg-neutral-50 rounded-lg shadow-md p-6 w-full max-w-sm border border-neutral-600">
                <p className="text-xs font-semibold text-[#1D1D1F] bg-[#F1F1F1] px-3 py-1 rounded-md w-fit mt-10 mb-2">
                  Monthly
                </p>

                <p className="text-sm text-neutral-900 font-AileronRegular mb-4">
                  For individuals who just tried Readora.
                </p>

                {/* Garis Pemisah */}
                <div className="w-full h-px mt-5 bg-[#8B8C7B] opacity-[0.3]"></div>

                <p className="text-7xl font-WulkanDisplayBold text-[#000B33] mb-1 mt-5">
                  Rp 39k
                </p>
                <p className="text-xs font-AileronRegular text-neutral-900 mb-4">
                  per Month
                </p>
                {/* Garis Pemisah */}
                <div className="w-full h-px mt-5 bg-[#8B8C7B] opacity-[0.3] mb-5"></div>
                <ul className="text-sm space-y-4 mb-6 text-base-black">
                  <li className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6" />
                    <span>Unlimited access to all books</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6" />
                    <span>Unlimited AI-powered term searching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6" />
                    <span>Add books to your collection without limits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6" />
                    <span>Read across multiple devices with no ads</span>
                  </li>
                </ul>
                <Button className="bg-[#F97316] text-white w-full py-2 rounded-md text-sm font-semibold mb-2 cursor-pointer mt-15">
                  Pay
                </Button>

                <p className="text-xs text-gray-500 text-center mb-20">
                  No credit card required
                </p>
              </div>

              {/* KIRI KANAN (Annually) */}
              <div className="bg-primary-500 rounded-xl shadow-md p-6 w-full max-w-sm text-white">
                <p className="text-sm font-semibold text-[#1D1D1F] bg-[#F1F1F1] px-3 py-1 rounded-md w-fit mt-10 mb-2">
                  Annual
                </p>

                <p className="text-sm font-AileronRegular mb-4 text-neutral-200">
                  Better for those who believed Readora!
                </p>

                {/* Garis Pemisah */}
                <div className="w-full h-px mt-5 bg-[#FDFFDF] opacity-[0.3]"></div>

                <p className="text-7xl font-WulkanDisplayBold text-accent-100 mb-1 mt-5">
                  Rp 390k
                </p>
                <p className="text-xs mb-4 text-neutral-600">per Year</p>
                {/* Garis Pemisah */}
                <div className="w-full h-px mt-5 bg-[#FDFFDF] opacity-[0.3] mb-5"></div>
                <ul className="text-sm space-y-4 mb-6">
                  <li className="flex items-center text-neutral-300 gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6 text-neutral-300" />
                    <span>Unlimited access to all books</span>
                  </li>
                  <li className="flex items-center text-neutral-300 gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6 text-neutral-300" />
                    <span>Unlimited AI-powered term searching</span>
                  </li>
                  <li className="flex items-center text-neutral-300 gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6 text-neutral-300" />
                    <span>Add books to your collection without limits</span>
                  </li>
                  <li className="flex items-center text-neutral-300 gap-2">
                    <IoIosCheckmarkCircle className="w-6 h-6 text-neutral-300" />
                    <span>Read across multiple devices with no ads</span>
                  </li>
                </ul>
                <Button className="bg-[#F97316] text-white w-full py-2 rounded-md text-sm font-semibold mb-2 cursor-pointer mt-15">
                  Pay
                </Button>

                <p className="text-xs text-white/70 text-center mb-20">
                  No credit card required
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 -mr-0 flex items-center lg:justify-center mt-23">
            <img
              src="src/assets/image/Premium.png"
              alt="Premium Illustration"
              className="h-100 w-full p-4 lg:p-2  object-cover md:h-[57rem] rounded-3xl lg:object-contain "
            />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PremiumPage;
