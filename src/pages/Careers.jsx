import { useState } from "react";
import { Link } from "react-router-dom";
import bgAbout from "../assets/background.webp";
import gtsLogo from "../assets/Slidebar/GTSIcon.webp";

const JOBS = [
  {
    id: 1,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Develop and maintain applications on the AVN (Audio, Video, Navigation) and Cluster systems. Ensure timely software delivery and high quality.",
  },
  {
    id: 2,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Participate in design, implementation and testing of embedded software for automotive platforms and smart devices.",
  },
  {
    id: 3,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Collaborate with cross‑functional teams to analyze requirements and propose optimal technical solutions.",
  },
  {
    id: 4,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Maintain and improve existing products, fix issues and enhance performance based on customer feedback.",
  },
  {
    id: 5,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Research new automotive technologies and contribute ideas to future product roadmaps.",
  },
  {
    id: 6,
    title: "Tuyển dụng GT System Vietnam",
    description:
      "Work in an agile environment with code reviews, continuous integration and test automation.",
  },
];

const PAGE_SIZE = 3;

export default function Careers() {
  const [page, setPage] = useState(1);

  const totalPages = 2; // fixed as requested
  const startIndex = (page - 1) * PAGE_SIZE;
  const jobsForPage = JOBS.slice(startIndex, startIndex + PAGE_SIZE);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    // Chỉ đổi trang trong khu vực tuyển dụng, không can thiệp scroll toàn site
    setPage(p);
  };

  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          src={bgAbout}
          alt="Careers Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Tuyển dụng
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              TUYỂN DỤNG
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <span className="hover:text-orange-400 cursor-pointer">Trang chủ</span>
              <span>/</span>
              <span className="text-orange-400 font-semibold">Tuyển dụng</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16 space-y-10">
        {/* Grid tuyển dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsForPage.map((job) => (
            <article
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative px-6 pt-8 pb-4 flex flex-col items-center gap-4">
                {/* Ribbon */}
                <div className="absolute left-6 top-4">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-t-full rounded-br-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wide shadow-sm">
                    Tuyển dụng
                  </div>
                </div>

                {/* Logo */}
                <img
                  src={gtsLogo}
                  alt="GT System"
                  className="w-full max-w-[260px] object-contain mt-6"
                />
              </div>

              {/* Text content */}
              <div className="px-6 pb-5 space-y-3">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                  {job.description}
                </p>
              </div>

              {/* Footer link */}
              <div className="border-t border-gray-100 bg-white px-6 py-3">
                <Link
                  to={`/tuyen-dung/${job.id}`}
                  className="text-sm text-orange-500 italic hover:text-orange-600"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Phân trang */}
        <div className="flex justify-center items-center gap-2 text-sm">
          <button
            className="px-2 py-1 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            «
          </button>

          {[1, 2].map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`w-8 h-8 rounded-full border text-sm font-semibold transition-colors duration-150 ${
                p === page
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-500"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            className="px-2 py-1 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
