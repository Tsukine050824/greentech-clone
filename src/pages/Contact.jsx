export default function Contact() {
  return (
    <div className="w-full bg-white text-gray-800">
      <section className="section">
        <div className="container-default grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                Liên hệ với chúng tôi
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Với phương châm hoạt động "Hợp tác kinh doanh, cùng nhau phát triển". Chúng
                tôi luôn mong muốn được hợp tác kinh doanh với tất cả các đơn vị trong và
                ngoài nước.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Để lại thông tin bạn quan tâm và chúng tôi sẽ trả lời lại bạn ngay khi nhận
                được email.
              </p>
            </div>

            <div className="space-y-1 text-sm md:text-base text-gray-700">
              <p>
                <span className="font-semibold">Địa chỉ:&nbsp;</span>
                Tòa nhà MITEC, Lô E2, Khu đô thị mới Cầu Giấy, phường Yên Hòa, quận Cầu Giấy,
                thành phố Hà Nội, Việt Nam.
              </p>
              <p>
                <span className="font-semibold">Điện thoại:&nbsp;</span>
                02432018205 - 02432018206
              </p>
              <p>
                <span className="font-semibold">Email:&nbsp;</span>
                accountant-vn@gtsystem.co.kr
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="w-full bg-[#f6f8fb] border border-gray-200 rounded-xl shadow-sm p-5 md:p-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-sm md:text-base">
              <input
                className="col-span-1 border border-gray-300 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white placeholder:text-gray-400"
                placeholder="Họ và tên"
              />
              <input
                className="col-span-1 border border-gray-300 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white placeholder:text-gray-400"
                placeholder="Email"
                type="email"
              />

              <input
                className="col-span-1 border border-gray-300 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white placeholder:text-gray-400"
                placeholder="Điện thoại"
              />
              <input
                className="col-span-1 border border-gray-300 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white placeholder:text-gray-400"
                placeholder="Tiêu đề"
              />

              <textarea
                className="md:col-span-2 min-h-[140px] border border-gray-300 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white placeholder:text-gray-400 resize-none"
                placeholder="Nội dung tin nhắn"
                rows={5}
              />

              <div className="md:col-span-2 flex justify-end mt-1">
                <button
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base shadow-sm transition-colors duration-150"
                  type="button"
                >
                  Gửi tin nhắn
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
