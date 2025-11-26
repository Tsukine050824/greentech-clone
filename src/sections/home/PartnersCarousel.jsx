// src/components/PartnersCarousel.jsx
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import RKanzi from "../../assets/Slidebar/RKanzi.webp";
import Qualcomm from "../../assets/Slidebar/Qualcomm.webp";
import YaYura from "../../assets/Slidebar/Ya-Yura.webp";
import LG from "../../assets/Slidebar/LG.webp";
import Nvidia from "../../assets/Slidebar/nvidia.webp";
import Clarion from "../../assets/Slidebar/Clarion.webp";
import Mobis from "../../assets/Slidebar/Mobis.webp";
import Telechips from "../../assets/Slidebar/Telechips.webp";
import Hyundai from "../../assets/Slidebar/Hyundai.webp";
import QNX from "../../assets/Slidebar/QNX.webp";
import Autoever from "../../assets/Slidebar/Autoever.webp";
import Harman from "../../assets/Slidebar/Harman.webp";
import Humax from "../../assets/Slidebar/Humax.webp";
import NXP from "../../assets/Slidebar/NXP.webp";
import Intel from "../../assets/Slidebar/Intel.webp";

const BASE_LOGOS = [
  { src: RKanzi, alt: "KANZI" },
  { src: Qualcomm, alt: "Qualcomm" },
  { src: YaYura, alt: "Ya-Yura" },
  { src: LG, alt: "LG" },
  { src: Nvidia, alt: "Nvidia" },
  { src: Clarion, alt: "Clarion" },
  { src: Mobis, alt: "Mobis" },
  { src: Telechips, alt: "Telechips" },
  { src: Hyundai, alt: "Hyundai" },
  { src: QNX, alt: "QNX" },
  { src: Autoever, alt: "Autoever" },
  { src: Harman, alt: "Harman" },
  { src: Humax, alt: "Humax" },
  { src: NXP, alt: "NXP" },
  { src: Intel, alt: "Intel" },
];

const VISIBLE = 5;

export default function PartnersCarousel() {
  const viewportRef = useRef(null);

  const [gap, setGap] = useState(24);
  const [cardW, setCardW] = useState(0);
  const [step, setStep] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const animRef = useRef(null);

  // dữ liệu: clone VISIBLE cuối lên đầu + VISIBLE đầu xuống cuối
  const realCount = BASE_LOGOS.length;
  const extended = useMemo(() => {
    const head = BASE_LOGOS.slice(-VISIBLE);
    const tail = BASE_LOGOS.slice(0, VISIBLE);
    return [...head, ...BASE_LOGOS, ...tail];
  }, []);

  // init AOS (dùng cùng logic AOS của NewsCarousel)
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true, // animate only once when scrolled into view
      offset: 120,
    });

    // refresh once after first paint to consider images/layout
    const id = setTimeout(() => AOS.refresh(), 50);
    return () => {
      clearTimeout(id);
    };
  }, []);

  // đo kích thước & đặt vị trí ban đầu ngay sau “clone trái”
  useEffect(() => {
    const handleResize = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const isMd = window.matchMedia("(min-width: 768px)").matches;
      const g = isMd ? 24 : 16;
      const vw = viewport.clientWidth;

      const w = Math.max(160, Math.round((vw - g * (VISIBLE - 1)) / VISIBLE));
      const s = w + g;

      setGap(g);
      setCardW(w);
      setStep(s);

      requestAnimationFrame(() => {
        if (!viewportRef.current) return;
        // nhảy vào vùng thật (bỏ VISIBLE clone trái)
        viewportRef.current.scrollLeft = s * VISIBLE;
        // sau khi layout cố định, refresh AOS để nó tính đúng vị trí
        AOS.refresh();
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // cancel + smoothScrollTo
  const cancelAnim = useCallback(() => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  const smoothScrollTo = useCallback(
    (target) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      cancelAnim();

      const start = viewport.scrollLeft;
      const distance = target - start;
      if (distance === 0) return;

      const duration = 260;
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

  // helpers drag
  const getPageX = (e) => (e.touches ? e.touches[0].pageX : e.pageX);

  const handleDragStart = (e) => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    cancelAnim();

    isDraggingRef.current = true;
    setIsDragging(true);

    startXRef.current = getPageX(e);
    startScrollLeftRef.current = viewport.scrollLeft;
  };

  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    const dx = getPageX(e) - startXRef.current;
    viewport.scrollLeft = startScrollLeftRef.current - dx;

    // xử lý infinite khi đang kéo (teleport mềm)
    const total = extended.length;
    const maxScroll = step * (total - VISIBLE);
    const minScroll = 0;

    if (viewport.scrollLeft <= minScroll + step) {
      viewport.scrollLeft += realCount * step;
      startScrollLeftRef.current = viewport.scrollLeft;
    } else if (viewport.scrollLeft >= maxScroll - step) {
      viewport.scrollLeft -= realCount * step;
      startScrollLeftRef.current = viewport.scrollLeft;
    }
  };

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
  }, [snapToNearest]);

  // gắn mouseup/touchend dùng phiên bản endDrag mới nhất
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

  // infinite khi dừng (không đang kéo và không đang animate)
  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;

    const scrollLeft = viewport.scrollLeft;

    // khi kéo/animate thì không teleport để tránh giật
    if (isDraggingRef.current || animRef.current) return;

    let indexByStep = Math.round(scrollLeft / step);
    const firstReal = VISIBLE;
    const lastReal = VISIBLE + realCount - 1;

    if (indexByStep < firstReal) {
      indexByStep += realCount;
      viewport.scrollLeft = indexByStep * step;
    } else if (indexByStep > lastReal) {
      indexByStep -= realCount;
      viewport.scrollLeft = indexByStep * step;
    }
  };

  // nút trái/phải dùng smoothScrollTo
  const goLeft = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;
    const current = Math.round(viewport.scrollLeft / step);
    smoothScrollTo((current - 1) * step);
  };

  const goRight = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;
    const current = Math.round(viewport.scrollLeft / step);
    smoothScrollTo((current + 1) * step);
  };

  return (
    <section className="py-14 md:py-20 bg-white overflow-visible">
      <div className="container-default">
        <h2
          className="text-center text-2xl md:text-4xl font-extrabold mb-8 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Đối Tác Của Chúng Tôi
        </h2>

        <div className="relative">
          {/* Nút trái */}
          <button
            onClick={goLeft}
            aria-label="Trước"
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md 
              ring-1 ring-black/5 hover:bg-gray-50 transition-all duration-200
              hover:scale-105 active:scale-95"
          >
            ‹
          </button>

          {/* Viewport */}
          <div
            ref={viewportRef}
            className={`mx-6 md:mx-8 select-none overflow-hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onScroll={handleScroll}
          >
            <div
              className="flex items-center"
              style={{ columnGap: `${gap}px` }}
            >
              {extended.map((logo, idx) => {
                const baseDelay = 100;
                const delay = Math.min(800, baseDelay + idx * 60);

                return (
                  <div
                    key={`${logo.alt}-${idx}`}
                    className="shrink-0 rounded-xl bg-white px-4 py-4 md:px-6 md:py-5
                     shadow-[0_10px_25px_rgba(16,24,40,0.06)]
                     ring-1 ring-gray-100 flex items-center justify-center
                     transition-transform duration-300 hover:scale-105"
                    style={{ width: `${cardW}px`, flex: `0 0 ${cardW}px` }}
                    data-aos="fade-left"
                    data-aos-delay={delay}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full max-w-[180px] h-auto md:h-16 object-contain transition-all duration-300 hover:brightness-110"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nút phải */}
          <button
            onClick={goRight}
            aria-label="Sau"
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md
              ring-1 ring-black/5 hover:bg-gray-50 transition-all duration-200
              hover:scale-105 active:scale-95"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
