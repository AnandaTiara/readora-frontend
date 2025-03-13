import React, { useState } from "react";
import Navbar from "../components/elements/Navbar";
import Premium from "../components/elements/Premium";
import Input from "../components/elements/Input";
import Button from "../components/elements/Button";
import Footer from "../fragments/Footer";

type PremiumStatus = "active" | "inactive" | "pending";

const AccountStatus: React.FC<{
  status: PremiumStatus;
  expiryDate?: string;
}> = ({ status, expiryDate }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center justify-between">
      <h2 className="text-2xl font-AileronBold text-neutral-900 mb-6 mt-2">
        Account Status
      </h2>

      {status === "active" && (
        <>
          <p className="text-5xl font-WulkanDisplayBold text-accent-600 mb-1 text-center">
            Premium Activated!
          </p>
          {/* <p className="text-sm text-neutral-500 mb-4">Until {expiryDate}</p> */}
          <Button className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-300 active:bg-primary-700 transition cursor-pointer w-lg ">
            Subscribe
          </Button>
        </>
      )}

      {status === "inactive" && (
        <>
          <p className="text-5xl text-neutral-700 font-WulkanDisplayBold mb-6 text-center">
            Premium Not Active.
          </p>
          <Button className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-300 active:bg-primary-700 transition cursor-pointer w-lg ">
            Subscribe
          </Button>
        </>
      )}

      {status === "pending" && (
        <>
          <p className="text-5xl text-neutral-700 font-WulkanDisplayBold mb-6 text-center">
            Premium Not Active.
          </p>
          <Button className="bg-neutral-700 text-[#191919] px-8 py-3 rounded-lg hover:bg-neutral-700 active:bg-neutral-700 cursor-pointer w-lg font-AileronSemiBold -mb-14   ">
            Pending...
          </Button>
          <p className="text-xs text-neutral-800 font-AileronRegular cursor-pointer">
            See Status
          </p>
        </>
      )}
    </div>
  );
};

const Account: React.FC = () => {
  const [status, setStatus] = useState<PremiumStatus>("inactive");
  const [expiryDate] = useState<string>("07-04-2025");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")


  return (
    <div>
      <div className="min-h-screen bg-neutral-500 px-6 py-10">
        <Navbar />
        <div className="mt-30">
          <Premium />
        </div>
        <h1 className="font-WulkanDisplayBold text-6xl text-primary-600 mb-7 mt-15">
          Halo, Kirana.
        </h1>

        <div className="flex flex-col min-h-96 lg:flex-row gap-7">
          {/* Account Information */}
          <div className="w-2/3 bg-neutral-100 shadow-2xl rounded-2xl p-10 flex flex-col">
            <h2 className="text-2xl font-AileronBold text-neutral-900 mb-6">
              Account Information
            </h2>

            <div className="space-y-4">
              <label className="text-base-black font-AileronLight">Name</label>
              <Input type="text" placeholder="Name" value={name} setValue={setName} />

              <label className="text-base-black font-AileronLight">Email</label>
              <Input type="email" placeholder="Email" value={email} setValue={setEmail} id={email} />

              <label className="text-base-black font-AileronLight">
                Password
              </label>
              <Input type="password" placeholder="Password" value={password} setValue={setPassword} id={password}/>
            </div>
          </div>

          <AccountStatus status={status} expiryDate={expiryDate} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
