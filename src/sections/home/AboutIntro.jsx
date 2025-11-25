import collageImg from "../../assets/Diamond.jpg";
import carImg     from "../../assets/BlackCar.jpg";
import skylineImg from "../../assets/Skyline.webp";
import meetingImg from "../../assets/Meeting.webp";
import housesImg  from "../../assets/HouseImg.webp";

export default function Home() {
  return (
    <section
      id="AboutUs"
      className="relative py-12 md:py-20 bg-gradient-to-b from-[#fffaf6] to-[#fff] overflow-hidden"
    >
      <div className="container-default grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
        {/* ========== CỤM ẢNH (LG+ bên trái) ========== */}
        <div className="lg:col-span-7 order-1 lg:order-first self-end">
          <div className="pb-6 md:pb-8 border-b border-white/20 grid grid-cols-2 gap-3 md:gap-4">
            {/* Cột trái - ép sát phải */}
            <div className="pr-1 md:pr-2">
              <div className="mb-3 w-[240.8px] h-[155px] ml-auto overflow-hidden rounded-xl">
                <img
                  src={collageImg}
                  alt="Công trình"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="mb-3 w-[344px] h-[160px] ml-auto overflow-hidden rounded-xl">
                <img
                  src={skylineImg}
                  alt="Toà nhà"
                  className="w-full h-full object-cover rounded-xl scale-110"
                />
              </div>
              <div className="w-[240.8px] h-[155px] ml-auto overflow-hidden rounded-xl">
                <img
                  src={housesImg}
                  alt="Mô hình nhà"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Cột phải - ép sát trái, dồn xuống đáy */}
            <div className="pl-1 md:pl-2 flex flex-col justify-end">
              <div className="mb-3 w-[288px] h-[180px] mr-auto overflow-hidden rounded-xl">
                <img
                  src={carImg}
                  alt="Ô tô công nghệ"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-[360px] h-[260px] mr-auto overflow-hidden rounded-xl">
                <img
                  src={meetingImg}
                  alt="Nhóm họp"
                  className="w-full h-full object-cover rounded-xl scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========== CỘT THÔNG TIN (LG+ bên phải, căn đáy và viền đồng mức) ========== */}
        <div className="lg:col-span-5 order-2 lg:order-none flex flex-col justify-end self-end border-b border-white/20 pb-6 md:pb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight text-[#101828]">
              Giới Thiệu Về Chúng Tôi
            </h2>

            <p className="mt-4 text-[#364152] leading-relaxed">
              GT System đã nâng cao công nghệ công nghiệp trong hơn một thập kỷ.
              Chúng tôi sẽ tiếp tục nỗ lực hết mình để cung cấp cho bạn công nghệ
              hàng đầu nhằm giúp doanh nghiệp của bạn phát triển. Từ phần mềm ô tô
              đến các dịch vụ kỹ thuật, chúng tôi sẽ giúp doanh nghiệp của bạn
              luôn hoạt động. Cùng nhau, chúng ta có thể đứng đầu doanh nghiệp và
              tiến về phía trước.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: "🔭", label: "TẦM NHÌN" },
                { icon: "🎯", label: "SỨ MỆNH" },
                { icon: "⭐", label: "GIÁ TRỊ CỐT LÕI" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="group flex items-center justify-between w-full rounded-full bg-white px-6 py-4 shadow-[0_10px_25px_rgba(16,24,40,0.08)] ring-1 ring-gray-100 hover:ring-orange-300 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-b from-orange-300 to-orange-500 text-white text-lg">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-[#0f172a] group-hover:text-orange-600 transition">
                      {item.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
