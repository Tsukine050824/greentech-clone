import bgAbout from "../assets/background.webp"; // bạn thay bằng ảnh thật
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[420px] overflow-hidden">
        {/* Ảnh nền */}
        <img
          src={bgAbout}
          alt="About Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Lớp phủ tối */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-xl">
            GIỚI THIỆU
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/90 text-lg">
            <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
              Trang chủ
            </NavLink>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-16 space-y-20 leading-relaxed text-lg md:text-xl">

        {/* Giới thiệu chung */}
        <section>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Giới thiệu về chúng tôi
          </h2>
          <p>
            GT SYSTEM Vietnam là công ty phát triển phần mềm trong các lĩnh vực:
            Automotive, AI, Embedded System và các giải pháp công nghệ cao.
          </p>
          <p className="mt-4">
            Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi mang đến các giải pháp thông minh,
            đáp ứng yêu cầu khắt khe trong môi trường công nghiệp hiện đại.
          </p>
        </section>

        {/* Tầm nhìn */}
        <section>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Tầm nhìn
          </h2>
          <p>
            Trở thành doanh nghiệp hàng đầu trong các giải pháp công nghệ tiên tiến, dẫn đầu
            trong lĩnh vực Automotive Software và Digital Transformation tại khu vực Châu Á.
          </p>
        </section>

        {/* Sứ mệnh */}
        <section>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Sứ mệnh
          </h2>
          <p>
            Mang đến giá trị bền vững cho khách hàng thông qua các sản phẩm công nghệ chất lượng,
            sáng tạo và an toàn.
          </p>
        </section>

        {/* Giá trị cốt lõi */}
        <section>
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            Giá trị cốt lõi
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Chính trực & Minh bạch</li>
            <li>Đổi mới sáng tạo</li>
            <li>Cam kết chất lượng</li>
            <li>Tinh thần trách nhiệm</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

