import bgAbout from "../assets/background.webp";
import { NavLink } from "react-router-dom";

// Partner logos
import hyundaiAutoEverLogo from "../assets/project/Autoever.webp";
import intelLogo from "../assets/project/Intel.webp";
import nvidiaLogo from "../assets/project/Nvida.webp";
import hyundaiLogo from "../assets/project/Huyndai.webp";
import samsungLogo from "../assets/project/Samsung.webp";
import lgLogo from "../assets/project/LG.webp";

const partners = [
  {
    id: 1,
    slug: "hyundai-auto-ever",
    name: "Hyundai Auto Ever",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: hyundaiAutoEverLogo,
  },
  {
    id: 2,
    slug: "intel-viet-nam",
    name: "Tập đoàn Intel Việt Nam",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: intelLogo,
  },
  {
    id: 3,
    slug: "nvidia",
    name: "Tập đoàn NVIDIA",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: nvidiaLogo,
  },
  {
    id: 4,
    slug: "hyundai-thanh-cong",
    name: "Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: hyundaiLogo,
  },
  {
    id: 5,
    slug: "samsung-vina",
    name: "Công ty TNHH Điện Tử Samsung Vina",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: samsungLogo,
  },
  {
    id: 6,
    slug: "lg-electronics-hai-phong",
    name: "Công ty TNHH LG Electronics Việt Nam Hải Phòng",
    category: "ĐỐI TÁC CỦA CHÚNG TÔI",
    logo: lgLogo,
  },
];

export default function Clients() {
  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          src={bgAbout}
          alt="Clients Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Khách hàng
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
                Trang chủ
              </NavLink>
              <span>/</span>
              <span className="text-orange-400 font-semibold">Khách hàng</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16 space-y-8">
        {/* Tiêu đề */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-wide uppercase">
            ĐỐI TÁC CỦA CHÚNG TÔI
          </h2>
        </div>

        {/* Grid các đối tác */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <article
              key={partner.id}
              className="group relative bg-white/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Logo + overlay gradient + text at bottom */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain object-center"
                />

                {/* Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/10 to-black/70" />

                {/* Text overlay at bottom-left */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    {partner.name}
                  </h3>
                  <div className="mt-2">
                    <p className="text-xs md:text-sm font-semibold text-orange-400 uppercase tracking-wide">
                      ĐỐI TÁC CỦA CHÚNG TÔI
                    </p>
                    <div className="mt-1 h-[2px] w-16 bg-orange-400" />
                  </div>
                </div>
              </div>

              {/* Hover button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <NavLink
                  to={`/khach-hang/${partner.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg hover:from-white hover:to-white hover:text-orange-600 transition-all duration-200"
                >
                  <span className="text-base">🔥</span>
                  Xem chi tiết
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
