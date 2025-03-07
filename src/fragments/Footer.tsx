import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { cn } from "../utils/cn";
import { Link } from "react-router-dom";

interface FooterProps {
  className?: string;
}

const Footer: React.FC <FooterProps>= ({className}) => {
  return (
    <footer className={cn("bg-primary-700 text-neutral-50 py-12 z-30 relative w-full" , className || "")}>
      <div className="container mx-auto text-center">
        <h2 className="text-7xl font-WulkanDisplayBold mb-3">Readora</h2>
        <div className="cursor-pointerflex gap-10 font-AileronRegular justify-center space-x-8 text-lg mb-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <Link to="/Mainpage" className="hover:underline"> Home</Link>
          <Link to="/Community" className="hover:underline"> Community</Link>
          <Link to="/Login" className="hover:underline"> Login</Link>
        </div>

        {/* Copyright */}
        <div className="font-AileronRegular text-neutral-600 text-sm mb-8">
          <p className="text-sm mb-4">
            © 2025 Victus Jaya. All Rights Reserved.
          </p>
          <p className="text-sm mb-6 ">
            Peraturan Pengedaran
          </p>

          {/* Disclaimer Text */}
          <div className="text-xs lg:justify-between gap-20 px-6 md:px-32 lg:px-48 text-justify leading-relaxed lg:flex-row flex flex-col">
            <div className="lg:w-1/2 ">
            <p>
              Dengan ini, diberikan izin secara gratis kepada siapa pun yang
              memperoleh salinan perangkat lunak ini dan file dokumentasi
              terkait ("Perangkat Lunak"), untuk berurusan dengan Perangkat
              Lunak tanpa batasan, termasuk tanpa batasan hak untuk menggunakan,
              menyalin, mengubah, menggabungkan, menerbitkan, mendistribusikan,
              mensublisensikan, dan/atau menjual salinan Perangkat Lunak...
            </p>
            </div>
            <div className="lg:w-1/2 flex flex-col">
            <p>
            Pernyataan hak cipta di samping dan pemberitahuan izin ini harus disertakan dalam semua salinan atau bagian signifikan dari Perangkat Lunak.
            PERANGKAT LUNAK INI DISEDIAKAN "SEBAGAIMANA ADANYA", TANPA JAMINAN DALAM BENTUK APA PUN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA JAMINAN DIPERJUALBELIKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, DAN NON-PELANGGARAN. DALAM KEADAAN APA PUN PENULIS ATAU PEMEGANG HAK CIPTA TIDAK BERTANGGUNG JAWAB ATAS KLAIM, KERUSAKAN, ATAU KEWAJIBAN LAIN, BAIK DALAM TINDAKAN KONTRAK, PERBUATAN MELAWAN HUKUM, ATAU HAL LAIN YANG TIMBUL DARI, ATAU TERKAIT DENGAN PERANGKAT LUNAK ATAU PENGGUNAANNYA ATAU TRANSAKSI LAIN DALAM PERANGKAT LUNAK.
            </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6 text-xl cursor-pointer text-accent-600 -mb-10">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
