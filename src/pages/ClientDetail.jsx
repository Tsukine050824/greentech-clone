import bgAbout from "../assets/background.webp";
import { NavLink, useParams } from "react-router-dom";

import hyundaiAutoEverLogo from "../assets/project/Autoever.webp";
import intelLogo from "../assets/project/Intel.webp";
import nvidiaLogo from "../assets/project/Nvida.webp";
import hyundaiLogo from "../assets/project/Huyndai.webp";
import samsungLogo from "../assets/project/Samsung.webp";
import lgLogo from "../assets/project/LG.webp";

const partners = [
  {
    slug: "hyundai-auto-ever",
    name: "Hyundai Auto Ever",
    logo: hyundaiAutoEverLogo,
    description: [
      "Hyundai Auto Ever là đối tác chiến lược trong lĩnh vực giải pháp phần mềm và hệ thống nhúng cho ngành công nghiệp ô tô.",
      "GT System phối hợp triển khai nhiều dự án liên quan đến nền tảng kết nối, hệ thống thông tin giải trí và tối ưu hoá vận hành đội xe.",
    ],
  },
  {
    slug: "intel-viet-nam",
    name: "Tập đoàn Intel Việt Nam",
    logo: intelLogo,
    description: [
      "Intel Việt Nam là đối tác công nghệ quan trọng trong các dự án liên quan đến xử lý hiệu năng cao và nền tảng IoT.",
      "GT System ứng dụng hệ sinh thái của Intel để xây dựng các giải pháp phân tích dữ liệu và hệ thống điều khiển thông minh.",
    ],
  },
  {
    slug: "nvidia",
    name: "Tập đoàn NVIDIA",
    logo: nvidiaLogo,
    description: [
      "NVIDIA là đối tác về nền tảng xử lý đồ hoạ và trí tuệ nhân tạo.",
      "Các dự án hợp tác tập trung vào thị giác máy tính, mô phỏng và các giải pháp AI edge.",
    ],
  },
  {
    slug: "hyundai-thanh-cong",
    name: "Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam",
    logo: hyundaiLogo,
    description: [
      "Hyundai Thành Công là một trong những khách hàng tiêu biểu của GT System tại Việt Nam.",
      "Chúng tôi đồng hành trong việc ứng dụng công nghệ vào vận hành nhà máy, quản lý chất lượng và dịch vụ sau bán hàng.",
    ],
  },
  {
    slug: "samsung-vina",
    name: "Công ty TNHH Điện Tử Samsung Vina",
    logo: samsungLogo,
    description: [
      "Samsung Vina hợp tác với GT System trong các giải pháp phần mềm nhúng và dịch vụ kỹ thuật.",
      "Các giải pháp tập trung vào tối ưu hoá dây chuyền sản xuất và nâng cao trải nghiệm người dùng.",
    ],
  },
  {
    slug: "lg-electronics-hai-phong",
    name: "Công ty TNHH LG Electronics Việt Nam Hải Phòng",
    logo: lgLogo,
    description: [
      "LG Electronics Hải Phòng là đối tác trong lĩnh vực sản xuất thiết bị điện tử và giải pháp thông minh.",
      "GT System tham gia tư vấn và triển khai các hệ thống phần mềm hỗ trợ vận hành và quản lý chất lượng.",
    ],
  },
];

export default function ClientDetail() {
  const { slug } = useParams();
  const partner = partners.find((p) => p.slug === slug);

  if (!partner) {
    return (
      <div className="w-full bg-[#f7f7f7] min-h-[60vh] flex items-center justify-center text-gray-700">
        <p>Không tìm thấy thông tin đối tác.</p>
      </div>
    );
  }

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
              {partner.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-white/90 text-sm md:text-base">
              <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
                Trang chủ
              </NavLink>
              <span>/</span>
              <NavLink
                to="/khach-hang"
                className="hover:text-orange-400 flex items-center gap-1"
              >
                Khách hàng
              </NavLink>
              <span>/</span>
              <span className="text-orange-400 font-semibold line-clamp-1">
                {partner.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="w-full flex justify-center bg-black/5 py-10">
              <div className="bg-white p-4 shadow-sm rounded-xl" style={{ width: 360, height: 220 }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide">
                {partner.name}
              </h2>
              <div className="h-[2px] w-24 bg-orange-500 mb-3" />
              {partner.description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}