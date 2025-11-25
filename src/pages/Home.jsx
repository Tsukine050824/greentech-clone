import bgHeader from "../assets/header.webp";
import CountUp from "react-countup";
import useInView from "../hooks/useInView";

// các section cũ
import AboutIntro from "../sections/home/AboutIntro";
import ServicesHero from "../sections/home/ServicesHero";
import NewsCarousel from "../sections/home/NewsCarousel";
import PartnersCarousel from "../sections/home/PartnersCarousel";

export default function Home() {
  const { ref: statsRef, inView } = useInView({ threshold: 0.2, once: true });

  const stats = [
    { value: 350, suffix: "+", label: "Khách hàng, đối tác thân thiết" },
    { value: 1560, suffix: "+", label: "Dự án đã hoàn thiện" },
    { value: 3, suffix: "+", label: "Công ty đơn vị thành viên" },
    { value: 100, suffix: "+", label: "Cán bộ CNV trình độ cao" },
  ];

  return (
    <main className="bg-black">
      {/* 1. Ảnh nền hero (nằm NGAY dưới header) */}
      {/* Đẩy hero lên dưới thanh điều hướng để nav dạng glass đè lên ảnh */}
      <section className="relative w-full -mt-14 md:-mt-16">
        <img
          src={bgHeader}
          alt="GT System background"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* 2. Block thống kê (4 ô) */}
      <section
        ref={statsRef}
        className="relative z-10 w-full bg-black/90 backdrop-blur-sm border-t border-white/10"
      >
        <div
          className="
            container-default
            pt-6 pb-12 md:pt-8 md:pb-14
            md:flex md:items-stretch md:divide-x md:divide-white/10
            grid grid-cols-2 gap-y-4
          "
        >
          {stats.map((it, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 md:gap-5 px-4 md:px-6
                          border-b border-white/10 md:border-b-0
                          translate-y-6 opacity-0 transition-all duration-700
                          ${inView ? "translate-y-0 opacity-100" : ""}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="text-5xl md:text-6xl font-extrabold leading-none shrink-0">
                <span className="bg-gradient-to-b from-orange-300 to-orange-600 text-transparent bg-clip-text">
                  {inView ? <CountUp end={it.value} duration={1.6} /> : 0}
                </span>
                <span className="text-orange-500">{it.suffix}</span>
              </div>
              <div className="text-white text-sm md:text-base font-medium leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Các section cũ của trang Home */}
      <AboutIntro />
      <ServicesHero />
      <NewsCarousel />
      <PartnersCarousel />
    </main>
  );
}
