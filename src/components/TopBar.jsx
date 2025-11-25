import logo from "../assets/logo.webp";
import iconPhone from "../assets/CallingIcon.webp";
import iconMail from "../assets/EmailCon.webp";
import hotlineAvatar from "../assets/CallingContact.webp";

export default function TopBar() {
  return (
    <div className="bg-black text-white border-b border-gray-800">
      <div className="container-default py-3 grid grid-cols-1 md:grid-cols-4 items-center gap-6">
        
        {/* Cột 1: Logo */}
        <button
          type="button"
          className="flex justify-center md:justify-start focus:outline-none"
        >
          <img
            src={logo}
            alt="GT System"
            className="h-10 md:h-12 object-contain"
          />
        </button>

        {/* Cột 2: Điện thoại */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center gap-3 focus:outline-none cursor-pointer group"
          >
            <span className="inline-flex items-center justify-center rounded-full border border-dotted border-amber-400/60 p-2">
              <img src={iconPhone} alt="Phone" className="w-7 h-7" />
            </span>
            {/* khối text đổi màu cùng lúc */}
            <div className="leading-tight text-left text-gray-300 group-hover:text-orange-500 transition-colors duration-200">
              <div className="font-semibold">Điện thoại</div>
              <div className="text-sm">02432018205</div>
            </div>
          </button>
        </div>

        {/* Cột 3: Email */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center gap-3 focus:outline-none cursor-pointer group"
          >
            <span className="inline-flex items-center justify-center rounded-full border border-dotted border-teal-300/60 p-2">
              <img src={iconMail} alt="Email" className="w-7 h-7" />
            </span>
            <div className="leading-tight text-left text-gray-300 group-hover:text-orange-500 transition-colors duration-200">
              <div className="font-semibold">Email</div>
              <div className="text-sm">accountant-vn@gtsystem.co.kr</div>
            </div>
          </button>
        </div>

        {/* Cột 4: Hotline tư vấn */}
        <button
          type="button"
          className="flex items-center justify-center md:justify-end gap-2 focus:outline-none"
        >
          <img
            src={hotlineAvatar}
            alt="Hotline avatar"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white p-1"
          />
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-full pl-3 pr-4 py-2 flex flex-col justify-center">
            <div className="text-xs text-white/90">Hotline tư vấn</div>
            <div className="text-white font-bold leading-4 text-sm md:text-base">
              02432018205
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
