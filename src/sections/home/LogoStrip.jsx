// src/components/LogoStrip.jsx
import React from "react";
import Samsung from "../../assets/project/Samsung.webp";
import Nvida from "../../assets/project/Nvida.webp";
import Autoever from "../../assets/project/Autoever.webp";
import Huyndai from "../../assets/project/Huyndai.webp";
import Intel from "../../assets/project/Intel.webp";
import LG from "../../assets/project/LG.webp";
import Icon from "../../assets/project/icon.webp";

const topItems = [
  {
    img: Autoever,
    title: "Hyundai Auto Ever",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
  {
    img: Nvida,
    title: "Tập đoàn NIVIA",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
  {
    img: Samsung,
    title: "Công ty TNHH Điện Tử Samsung Vina",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
];

const bottomItems = [
  {
    img: Intel,
    title: "Tập đoàn Intel Việt Nam",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
  {
    img: Huyndai,
    title: "Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
  {
    img: LG,
    title: "Công ty TNHH LG Electronics Việt Nam Hải Phòng",
    tag: "ĐỐI TÁC CỦA CHÚNG TÔI",
    href: "#",
  },
];

function PartnerCard({ img, title, tag, href }) {
  return (
    <div className="item-wrap pb-8">
      <div className="item" onClick={() => (window.location.href = href)} role="button">
        <div className="box relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition">
          {/* Nút xem chi tiết */}
          <a
            href={href}
            className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/95 backdrop-blur hover:bg-white shadow-sm transition"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={Icon}
              alt="icon"
              className="w-5 h-5 object-contain"
              loading="lazy"
            />
            <span className="text-black">Xem chi tiết</span>
          </a>

          {/* Ảnh */}
          <div className="wrap-img-box">
            <a href={href} className="img-box flex">
              <img
                src={img}
                alt={title}
                title={title}
                className="img-cover w-full h-[480px] object-contain bg-white p-8"
                loading="lazy"
              />
            </a>
          </div>

          {/* Overlay + text đáy */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="info-box mx-auto absolute bottom-0 left-0 right-0 p-6">
            <h4 className="product-name mb-2 mt-1 text-white text-lg font-semibold">
              <a className="r" href={href} onClick={(e) => e.stopPropagation()}>
                {title}
              </a>
            </h4>
            <a
              className="pb-2 mb-2 text-amber-400 font-semibold uppercase tracking-wide inline-block"
              href={href}
              onClick={(e) => e.stopPropagation()}
            >
              {tag}
            </a>
            <div className="mt-1 h-1 w-20 bg-amber-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <div className="container mx-auto lg:pt-3">
      {/* Header */}
      <div
        className="header-box mx-auto mb-4 lg:mb-5 py-4 lg:py-6 px-3
                      flex flex-wrap justify-center lg:justify-between lg:items-center"
      >
        <div className="header-box-left mb-4 lg:mb-0">
          <div className="wrap flex items-center gap-4">
            <div>
              <p
                className="title mb-0 font-semibold"
                style={{
                  fontSize: "32px",
                  color: "#070707",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Đối Tác Của Chúng Tôi
              </p>
            </div>
          </div>
        </div>
        <div className="header-box-right" />
      </div>

      {/* ✅ Nhóm 1: 3 hình trên */}
      <div className="wrap px-2 mb-0.1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topItems.map((it, idx) => (
            <PartnerCard key={idx} {...it} />
          ))}
        </div>
      </div>

      {/* ✅ Nhóm 2: 3 hình dưới */}
      <div className="wrap px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomItems.map((it, idx) => (
            <PartnerCard key={idx} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}
