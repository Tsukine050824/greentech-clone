import bgAbout from "../assets/background.webp";
import gtsLogo from "../assets/Slidebar/GTSIcon.webp";

const RELATED_JOBS = [
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

const TOC_SECTIONS = [
  { id: "yeu-cau-ung-vien", label: "Yêu cầu ứng viên" },
  { id: "quyen-loi", label: "Quyền lợi" },
  { id: "dia-diem-lam-viec", label: "Địa điểm làm việc" },
  { id: "thoi-gian-lam-viec", label: "Thời gian làm việc" },
];

export default function CareerDetail() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 96; // chừa khoảng cho header sticky
    const rect = el.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top - headerOffset;

    window.scrollTo({ top: absoluteY, behavior: "smooth" });
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
      <div className="container-default py-12 md:py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,0.8fr)] gap-8 lg:gap-12">
          {/* Bài tuyển dụng chi tiết */}
          <article className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 md:px-10 py-8 md:py-10 space-y-6">
            {/* Logo + tiêu đề */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={gtsLogo}
                alt="GT System"
                className="w-full max-w-[320px] object-contain"
              />
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Tuyển dụng GT System Vietnam
                </h2>
                <p className="text-sm text-gray-600">
                  Develop and maintain applications on the AVN (Audio, Video, Navigation) and
                  Cluster systems. Ensure timely software development while guaranteeing
                  product quality. Handle technical issues, report progress, and deliver work
                  results to management.
                </p>
              </div>
            </div>

            {/* Yêu cầu ứng viên */}
            <section id="yeu-cau-ung-vien" className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
                Yêu cầu ứng viên
              </h3>
              <p className="font-semibold text-gray-800">AUTOSAR:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-gray-700">
                <li>Basic requirement.</li>
                <li>
                  Programming language &amp; skill level: C (Mid-level or higher) for embedded
                  software.
                </li>
                <li>
                  Embedded SW development experience (MCU level = RTOS, not Linux development
                  environment).
                </li>
                <li>Experience with AUTOSAR development is a strong plus.</li>
                <li>Equipment handling experience is mandatory.</li>
                <li>
                  Knowledge of Trace 32, CANoe, Oscilloscope, and MATLAB (for application
                  modeling) is preferred.
                </li>
                <li>Automotive development experience is a plus.</li>
                <li>Vector&apos;s MICROSAR experience is a plus.</li>
                <li>Electric engineering background is preferred.</li>
                <li>Circuit &amp; hardware analysis experience is preferred.</li>
                <li>
                  Understanding / analysis of MCU data sheet and good English communication.
                </li>
              </ul>
            </section>

            {/* Quyền lợi */}
            <section id="quyen-loi" className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
                Quyền lợi
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-gray-700">
                <li>Working hours: Monday to Friday, 8 hours per day.</li>
                <li>Overtime during the week should not exceed 12 hours and is included in the salary.</li>
                <li>
                  Annual salary over 12 months, bonus based on employee performance and company
                  performance.
                </li>
                <li>Other bonuses on festive occasions.</li>
                <li>Insurance based on salary tiers (70%).</li>
                <li>12 days of annual leave per year, plus 1 day off on your birthday.</li>
                <li>After the first year of employment, an additional 5 days of leave will be granted.</li>
                <li>Regular health check-ups and abundant opportunities for training in South Korea.</li>
                <li>Full provision of necessary work equipment.</li>
              </ul>
            </section>

            {/* Địa điểm làm việc */}
            <section id="dia-diem-lam-viec" className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
                Địa điểm làm việc
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Hà Nội: Tòa nhà MITEC, Dương Đình Nghệ, Cầu Giấy, Hà Nội, Cầu Giấy.
              </p>
            </section>

            {/* Thời gian làm việc */}
            <section id="thoi-gian-lam-viec" className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3">
                Thời gian làm việc
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Thứ 2 - Thứ 6 (từ 08:30 đến 17:30).
              </p>
            </section>
          </article>

          {/* Mục lục nhỏ bên phải */}
          <aside className="space-y-6">
            <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-5">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Mục lục
              </h3>
              <ul className="space-y-1 text-sm">
                {TOC_SECTIONS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleScrollTo(item.id)}
                      className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-200 text-[13px]"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        {/* Tin tuyển dụng liên quan */}
        <section className="space-y-4 max-w-4xl mr-auto">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            Tin tuyển dụng liên quan
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED_JOBS.slice(0, 3).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 text-sm"
              >
                <div className="relative px-4 pt-6 pb-3 flex flex-col items-center gap-3">
                  <div className="absolute left-4 top-3">
                    <div className="inline-flex items-center px-3 py-1 rounded-t-full rounded-br-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wide shadow-sm">
                      Tuyển dụng
                    </div>
                  </div>

                  <img
                    src={gtsLogo}
                    alt="GT System"
                    className="w-full max-w-[200px] object-contain mt-6"
                  />
                </div>

                <div className="px-4 pb-4 space-y-2">
                  <h4 className="text-sm md:text-[15px] font-semibold text-gray-900">
                    {job.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
