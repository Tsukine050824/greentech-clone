// src/sections/home/ServicesHero.jsx
import leftTechImg from "../../assets/Cars&Mobile.webp"; // ảnh nền phần trái (tech HUD)
import rightImg from "../../assets/SupportService.webp";
import aiImg from "../../assets/AI.jpg";

export default function ServicesHero() {
  return (
    <section id="Services" className="relative bg-[#0b0b0b] overflow-hidden">
      {/* ====== HEADER nhỏ ====== */}
      <div className="container-default max-w-[1400px] py-8 md:py-20">
        <p
          className="text-white text-[32px] font-semibold leading-snug font-[Poppins,sans-serif]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Dịch Vụ Của Chúng Tôi
        </p>
      </div>

      {/* ====== HERO CHÍNH ====== */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-0">
        {/* --- Cột trái: Ảnh --- */}
        <div className="relative min-h-[550px] md:min-h-[480px] lg:min-h-[540px]">
          <img
            src={leftTechImg}
            alt="Dịch vụ công nghệ"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* --- Cột phải: Nội dung --- */}
        <div className="relative bg-gradient-to-br from-[#f8f8f8] to-[#ffffff]">
          <div className="container-default py-12 md:py-16 relative">
            {/* WRAPPER: căn giữa & dịch nhẹ sang trái */}
            <div
              className="
        px-2 pb-3 md:pb-0 md:flex pt-12 pl-12 
      "
            >
              {/* INNER: chỉnh bề rộng & độ dịch trái tại đây */}
              <div
                className="
          relative w-full
          max-w-[560px] md:max-w-[640px]    /* 👈 chỉnh bề rộng khối */
          mx-auto                            /* 👈 căn giữa khối trong vùng trắng */
          pl-10 md:pl-16 pt-8 md:pt-12       /* 👈 padding như cũ */
          md:-translate-x-6                  /* 👈 dịch nhẹ sang trái (tăng/giảm tùy ý) */
          
        "
              >
                {/* Số 01 (phía sau, vị trí tương đối theo INNER) */}
                <span
                  className="absolute top-6 left-16 md:left-56 font-extrabold leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "180px",
                    color: "transparent",
                    WebkitTextStroke: "2px #fb923c",
                    zIndex: 0,
                    lineHeight: "1",
                    opacity: 0.9,
                  }}
                >
                  01
                </span>

                {/* Chữ đè lên số */}
                <div
                  className="relative z-10 pt-6"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#212529",
                  }}
                >
                  <div
                    className="text-uppercase font-extrabold leading-[1.1]"
                    style={{ fontSize: "45px" }}
                  >
                    Ô TÔ <br /> &amp; DI ĐỘNG
                  </div>

                  <p
                    className="mt-4 font-medium"
                    style={{ fontSize: "15px", color: "#212529" }}
                  >
                    Buồng lái kỹ thuật số, Cụm, IVI, AUTOSAR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-0">
        {/* --- Cột trái: Nội dung (55%) --- */}
        <div className="relative bg-gradient-to-br from-[#f8f8f8] to-[#ffffff]">
          <div className="container-default py-12 md:py-16 relative">
            {/* WRAPPER: căn giữa & dịch nhẹ sang phải */}
            <div
              className="
                px-2 pb-3 md:pb-0 md:flex pt-12 pl-12
                justify-end md:justify-end
              "
            >
              {/* INNER: khối chữ và số */}
              <div
                className="
                  relative w-full
                  max-w-[560px] md:max-w-[640px]
                  mx-auto
                  pr-10 md:pr-16 pt-8 md:pt-12
                  md:translate-x-6   /* 👈 dịch nhẹ sang phải để cân */
                "
              >
                {/* Số 02 (phía sau, có shadow) */}
                <span
                  className="absolute top-6 right-16 md:right-56 font-extrabold leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "180px",
                    color: "transparent",
                    WebkitTextStroke: "2px #fb923c",
                    zIndex: 0,
                    lineHeight: "1",
                    opacity: 0.9,
                  }}
                >
                  02
                </span>

                {/* Chữ đè lên số */}
                <div
                  className="relative z-10 pt-6 text-right"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#212529",
                  }}
                >
                  <div
                    className="text-uppercase font-extrabold leading-[1.1]"
                    style={{ fontSize: "45px" }}
                  >
                    DỊCH VỤ <br /> KĨ THUẬT
                  </div>

                  <p
                    className="mt-4 font-medium"
                    style={{
                      fontSize: "15px",
                      color: "#212529",
                    }}
                  >
                    Ô tô, Di động, IoE, Nhà máy thông minh, Robot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Cột phải: Ảnh (45%) --- */}
        <div className="relative min-h-[550px] md:min-h-[480px] lg:min-h-[540px]">
          <img
            src={rightImg}
            alt="Dịch vụ kỹ thuật"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-0">
        {/* --- Cột trái: Ảnh (45%) --- */}
        <div className="relative min-h-[550px] md:min-h-[480px] lg:min-h-[540px]">
          <img
            src={aiImg}
            alt="Trí tuệ nhân tạo"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* --- Cột phải: Nội dung (55%) --- */}
        <div className="relative bg-gradient-to-br from-[#f8f8f8] to-[#ffffff]">
          <div className="container-default py-12 md:py-16 relative">
            <div className="px-2 pb-3 md:pb-0 md:flex pt-12 pl-12">
              <div
                className="
                  relative w-full
                  max-w-[560px] md:max-w-[640px]
                  mx-auto
                  pl-10 md:pl-16 pt-8 md:pt-12
                  md:-translate-x-6
                "
              >
                {/* Số 03 (phía sau, giống Hero 1) */}
                <span
                  className="absolute top-6 left-16 md:left-56 font-extrabold leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "180px",
                    color: "transparent",
                    WebkitTextStroke: "2px #fb923c",
                    zIndex: 0,
                    lineHeight: "1",
                    opacity: 0.9,
                  }}
                >
                  03
                </span>

                {/* Chữ đè lên số */}
                <div
                  className="relative z-10 pt-6"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#212529",
                  }}
                >
                  <div
                    className="text-uppercase font-extrabold leading-[1.1]"
                    style={{ fontSize: "45px" }}
                  >
                    TRÍ TUỆ <br /> NHÂN TẠO
                  </div>

                  <p
                    className="mt-4 font-medium"
                    style={{ fontSize: "15px", color: "#212529" }}
                  >
                    Tầm nhìn, NLP, Học máy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
