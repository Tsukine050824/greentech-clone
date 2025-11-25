import bgAbout from "../assets/background.webp";
import { NavLink } from "react-router-dom";

export default function AboutVision() {
  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          src={bgAbout}
          alt="About Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Giới thiệu
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              TẦM NHÌN
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
                Trang chủ
              </NavLink>
              <span>/</span>
              <NavLink to="/gioi-thieu" className="hover:text-orange-400 flex items-center gap-1">
                Giới thiệu
              </NavLink>
              <span>/</span>
              <span className="text-orange-400 font-semibold">Tầm nhìn</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-10">
          {/* Cột trái: menu Giới thiệu */}
          <aside>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 font-semibold text-sm uppercase tracking-wide text-gray-700">
                Giới thiệu
              </div>
              <nav className="divide-y divide-gray-100 text-sm">
                <NavLink
                  to="/gioi-thieu"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Giới thiệu về chúng tôi
                </NavLink>
                <NavLink
                  to="/tam-nhin"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Tầm nhìn
                </NavLink>
                <NavLink
                  to="/su-menh"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Sứ mệnh
                </NavLink>
                <NavLink
                  to="/gia-tri-cot-loi"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Giá trị cốt lõi
                </NavLink>
              </nav>
            </div>
          </aside>

          {/* Cột phải: nội dung chính */}
          <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="w-full flex justify-center bg-black/5 py-6">
              <div className="bg-white p-1 shadow-sm" style={{ width: 800, height: 400 }}>
                <img
                  src={bgAbout}
                  alt="Tầm nhìn"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide">
                Tầm nhìn
              </h2>
              <div className="h-[2px] w-24 bg-orange-500 mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Trở thành doanh nghiệp hàng đầu trong các giải pháp công nghệ tiên tiến, dẫn
                đầu trong lĩnh vực Automotive Software và Digital Transformation tại khu vực
                Châu Á.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Chúng tôi định hướng xây dựng một hệ sinh thái công nghệ bền vững, giúp các
                doanh nghiệp tối ưu vận hành, nâng cao năng lực cạnh tranh và tạo ra giá trị
                lâu dài cho xã hội.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}