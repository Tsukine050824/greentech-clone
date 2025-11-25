import { useEffect, useMemo, useRef, useState, useCallback } from "react";

import GTSIcon from "../../assets/Slidebar/GTSIcon.webp";

// 5 tin
const newsItems = [
  {
    id: 1,
    category: "Tuyển dụng",
    title: "Internship Embedded 2024",
    desc: "Chương trình thực tập cho sinh viên yêu thích lĩnh vực ô tô, nhúng và hệ thống thời gian thực.",
    link: "#",
    date: "31.01.2024",
    img: GTSIcon,
  },
  {
    id: 2,
    category: "Tuyển dụng",
    title: "Tuyển dụng GT System Vietnam",
    desc: "Develop and maintain applications on AVN, Navigation, Cluster systems. Đảm bảo chất lượng và tiến độ dự án.",
    link: "#",
    date: "31.01.2024",
    img: GTSIcon,
  },
  {
    id: 3,
    category: "Kỹ sư Embedded C/C++",
    title: "Kỹ sư Embedded C/C++",
    desc: "Tham gia phát triển phần mềm nhúng cho AVN, Cluster, IoT với môi trường R&D chuyên nghiệp.",
    link: "#",
    date: "31.01.2024",
    img: GTSIcon,
  },
  {
    id: 4,
    category: "Sự kiện",
    title: "Tech Talk: Automotive Software",
    desc: "Chia sẻ về AUTOSAR, Functional Safety và xu hướng phần mềm trên xe thông minh.",
    link: "#",
    date: "15.03.2024",
    img: GTSIcon,
  },
  {
    id: 5,
    category: "Tin nội bộ",
    title: "GT System Day 2024",
    desc: "Ngày hội nội bộ với workshop, demo sản phẩm và hoạt động kết nối đội ngũ.",
    link: "#",
    date: "20.04.2024",
    img: GTSIcon,
  },
];

const VISIBLE = 3;
const AUTOPLAY_INTERVAL = 4500;

export default function NewsCarousel() {
  const viewportRef = useRef(null);

  const [gap, setGap] = useState(24);
  const [cardW, setCardW] = useState(0);
  const [step, setStep] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // index thật 0..realCount-1

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const animRef = useRef(null);

  const realCount = newsItems.length;

  // extended: clone VISIBLE cuối lên đầu + VISIBLE đầu xuống cuối
  const extended = useMemo(() => {
    const head = newsItems.slice(-VISIBLE);
    const tail = newsItems.slice(0, VISIBLE);
    return [...head, ...newsItems, ...tail];
  }, []);

  // Tính width / step và set vị trí bắt đầu sau clone trái
  useEffect(() => {
    const handleResize = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const isMd = window.matchMedia("(min-width: 768px)").matches;
      const g = isMd ? 24 : 16;
      const vw = viewport.clientWidth;

      const w = Math.max(260, Math.round((vw - g * (VISIBLE - 1)) / VISIBLE));
      const s = w + g;

      setGap(g);
      setCardW(w);
      setStep(s);

      requestAnimationFrame(() => {
        if (!viewportRef.current) return;
        viewportRef.current.scrollLeft = s * VISIBLE; // bỏ VISIBLE clone trái
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cancelAnim = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  // Smooth snap (mượt)
  const smoothScrollTo = useCallback(
    (target) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      cancelAnim();

      const start = viewport.scrollLeft;
      const distance = target - start;
      if (distance === 0) return;

      const duration = 260; // ms
      const startTime = performance.now();

      const animate = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        viewport.scrollLeft = start + distance * eased;

        if (t < 1) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          animRef.current = null;
        }
      };

      animRef.current = requestAnimationFrame(animate);
    },
    [cancelAnim]
  );

  // Helpers drag
  const getPageX = (e) => (e.touches ? e.touches[0].pageX : e.pageX);

  const handleDragStart = (e) => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    cancelAnim();

    isDraggingRef.current = true;
    setIsDragging(true);
    setPaused(true);

    startXRef.current = getPageX(e);
    startScrollLeftRef.current = viewport.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    const dx = getPageX(e) - startXRef.current;
    viewport.scrollLeft = startScrollLeftRef.current - dx;

    // Xử lý infinite khi đang kéo
    const total = extended.length;
    const maxScroll = step * (total - VISIBLE);
    const minScroll = 0;

    // Nếu kéo quá trái -> teleport sang vùng thật tương ứng
    if (viewport.scrollLeft <= minScroll + step) {
      viewport.scrollLeft += realCount * step;
      startScrollLeftRef.current = viewport.scrollLeft;
    }
    // Nếu kéo quá phải -> teleport ngược về vùng thật
    else if (viewport.scrollLeft >= maxScroll - step) {
      viewport.scrollLeft -= realCount * step;
      startScrollLeftRef.current = viewport.scrollLeft;
    }
  };

  // Snap 3 item gần nhất (align theo step)
  const snapToNearest = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    const rawIndex = viewport.scrollLeft / step;
    const nearestIndex = Math.round(rawIndex);
    const target = nearestIndex * step;
    smoothScrollTo(target);
  }, [step, smoothScrollTo]);

  const endDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    snapToNearest();
    setPaused(false);
  }, [snapToNearest]);

  // Mouse/touch up toàn màn hình
  useEffect(() => {
    const up = () => endDrag();
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    window.addEventListener("touchcancel", up);

    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchcancel", up);
    };
  }, [endDrag]);

  // Infinite + cập nhật dots – chỉ xử lý khi KHÔNG kéo và KHÔNG đang animate
  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    const scrollLeft = viewport.scrollLeft;

    // Khi đang kéo hoặc đang smooth, không teleport để tránh giật
    if (isDraggingRef.current || animRef.current) {
      const rawIndex = Math.round(scrollLeft / step) - VISIBLE;
      const safeIndex = ((rawIndex % realCount) + realCount) % realCount;
      setActiveIndex(safeIndex);
      return;
    }

    let indexByStep = Math.round(scrollLeft / step);
    const firstReal = VISIBLE;
    const lastReal = VISIBLE + realCount - 1;

    // Teleport khi đã dừng ở clone trái
    if (indexByStep < firstReal) {
      indexByStep += realCount;
      viewport.scrollLeft = indexByStep * step;
    }
    // Teleport khi đã dừng ở clone phải
    else if (indexByStep > lastReal) {
      indexByStep -= realCount;
      viewport.scrollLeft = indexByStep * step;
    }

    const realIndex = indexByStep - VISIBLE;
    const safeIndex = ((realIndex % realCount) + realCount) % realCount;
    setActiveIndex(safeIndex);
  };

  // Autoplay: dùng smoothScrollTo, infinite sẽ xử lý sau khi animation kết thúc
  useEffect(() => {
    if (!step || paused) return;

    const id = setInterval(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const currentIndex = Math.round(viewport.scrollLeft / step);
      const nextIndex = currentIndex + 1;
      smoothScrollTo(nextIndex * step);
    }, AUTOPLAY_INTERVAL);

    return () => {
      clearInterval(id);
      cancelAnim();
    };
  }, [step, paused, smoothScrollTo, cancelAnim]);

  return (
    <section className="bg-white py-20 md:py-24 overflow-visible">
      <div className="container-default">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-center md:justify-between mb-10 md:mb-12">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div>
              <div className="h-1 w-10 bg-gradient-to-r from-yellow-300 to-orange-400 mb-1" />
              <p className="text-lg md:text-2xl font-extrabold">
                Tin Tức Của Chúng Tôi
              </p>
            </div>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          ref={viewportRef}
          className={`
            mx-4 md:mx-8 my-10 md:my-12
            overflow-hidden select-none
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onScroll={handleScroll}
          onMouseEnter={() => !isDragging && setPaused(true)}
          onMouseLeave={() => !isDragging && setPaused(false)}
        >
          <div className="flex items-stretch" style={{ columnGap: `${gap}px` }}>
            {extended.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className={`
                  news-card
                  shrink-0 bg-white rounded-2xl border
                  transition-all duration-300
                  shadow-[0_8px_24px_rgba(15,23,42,0.08)]
                  mt-2 mb-8
                `}
                style={{
                  width: `${cardW}px`,
                  flex: `0 0 ${cardW}px`,
                }}
              >
                <div className="flex flex-col h-full px-4 md:px-5 lg:px-6 pt-5 pb-6 md:pt-6 md:pb-7">
                  {/* Text */}
                  <div className="flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1 mb-3 bg-gradient-to-r from-yellow-300 to-orange-400 text-[10px] md:text-xs font-semibold uppercase tracking-wide text-[#111827]">
                      {item.category}
                    </span>

                    <a
                      href={item.link}
                      className="mb-2 text-sm md:text-base font-extrabold uppercase text-[#111827] leading-snug line-clamp-2"
                    >
                      {item.title}
                    </a>

                    <p className="text-[11px] md:text-[13px] text-[#4b5563] leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>

                    <div className="mt-auto pt-2 flex justify-start">
                      <a
                        href={item.link}
                        className="text-[10px] md:text-xs font-semibold text-orange-500 hover:text-orange-600 inline-flex items-center gap-1"
                      >
                        Xem chi tiết <span>➜</span>
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex items-center justify-center mt-4">
                    <a
                      href={item.link}
                      className="block w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {newsItems.map((item, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (!step) return;
                  const targetIndex = VISIBLE + i;
                  smoothScrollTo(targetIndex * step);
                }}
                className={`h-[6px] rounded-full transition-all duration-300 ${
                  active
                    ? "w-12 bg-orange-500"
                    : "w-6 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
