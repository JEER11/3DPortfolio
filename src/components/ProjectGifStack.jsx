import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DocDashCare from "../assets/images/DocDashCare.gif";
import DocAssistBill from "../assets/images/DocAssistBill.gif";
import KioskApp from "../assets/images/KioskApp.gif";
import AISearch from "../assets/images/AISearch.gif";
import ObjectDetectGif from "../assets/images/ObjectDetectt.gif";
import ObjectDetectImg from "../assets/images/ObjectDetect.jpg";

const GIF_SETS = {
  medical: [DocDashCare, DocAssistBill],
  kiosk: [KioskApp],
  default: [DocDashCare, DocAssistBill, KioskApp],
  aisearch: [AISearch],
  object: [ObjectDetectGif, ObjectDetectImg],
};

export default function ProjectGifStack({ setName = 'default' }) {
  const gifs = GIF_SETS[setName] || GIF_SETS.default;
  const [open, setOpen] = useState(false);
  const [displayGifs, setDisplayGifs] = useState(gifs);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animatingToTop, setAnimatingToTop] = useState(null);
  const animTimeoutRef = useRef(null);

  useEffect(() => {
    return () => { if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current); };
  }, []);

  const ANIM_DURATION = 380; // ms
  const PEEK_OFFSET = 36; // increased so stacked cards peek more and are easier to click
  const MAX_PEEKS = 3;

  const startBringToTopAnimation = (idx) => {
    if (idx === 0) return;
    if (animatingToTop !== null) return;
    const item = displayGifs[idx];
    if (!item) return;
    setAnimatingToTop(idx);
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setDisplayGifs((prev) => {
        const picked = prev[idx];
        const rest = prev.filter((_, i) => i !== idx);
        return [picked, ...rest];
      });
      setAnimatingToTop(null);
      animTimeoutRef.current = null;
    }, ANIM_DURATION);
  };

  // when opening, nothing special; all gifs render as images (browser behavior)

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ul
        style={{ position: "relative", height: "48px", width: `${96 + (displayGifs.length - 1) * 32}px`, cursor: "pointer" }}
        onClick={() => setOpen(true)}
      >
        {displayGifs.map((gif, idx) => (
          <li
            key={gif}
            style={{
              position: "absolute",
              left: idx * 32,
              top: 0,
              width: "96px",
              height: "48px",
              borderRadius: "12px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              zIndex: idx,
              overflow: "hidden",
              background: "#222",
            }}
          >
            <img src={gif} alt={`Project gif ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} draggable={false} />
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setOpen(false)}
          >
            <div style={{ position: "relative", width: 'min(650px, 80vw)', height: 'min(70vh, 800px)' }} onClick={(e) => e.stopPropagation()}>
              {displayGifs.map((gif, idx) => {
                const depth = Math.min(idx, MAX_PEEKS);
                const isActive = idx === 0;
                const isAnimating = animatingToTop === idx;
                const dim = isActive || isAnimating ? 1 : [1, 0.92, 0.84, 0.76][depth] || 0.76;
                const sat = isActive || isAnimating ? 1 : [1, 0.94, 0.88, 0.82][depth] || 0.82;
                const scale = isActive ? 1 : [1, 0.997, 0.994, 0.991][depth] || 0.991;
                const boxShadow = isActive
                  ? '0 10px 24px rgba(15,22,60,0.35)'
                  : ['0 8px 18px rgba(5,8,28,0.55)', '0 7px 16px rgba(5,8,28,0.6)', '0 6px 14px rgba(5,8,28,0.62)'][depth - 1] || '0 6px 14px rgba(5,8,28,0.6)';
                const computedOpacity = isActive || isAnimating ? 1 : 0.96 - depth * 0.05;
                const base = isActive || isAnimating ? 0 : (PEEK_OFFSET * depth);
                const hoverOffset = (hoveredIndex === idx && !isActive && !isAnimating) ? 28 : 0;
                const targetY = isAnimating ? -8 : base + hoverOffset;
                const targetScale = isAnimating ? 1.02 : scale;
                const zIndex = isAnimating ? displayGifs.length + 10 : (isActive ? displayGifs.length + 3 : displayGifs.length + 1 - idx);

                const frameActive = isActive || isAnimating;

                return (
                  <motion.div
                    key={gif}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: base,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex,
                      filter: `brightness(${dim}) saturate(${sat})`,
                      opacity: computedOpacity,
                      cursor: isActive ? 'default' : (animatingToTop ? 'default' : 'pointer'),
                      pointerEvents: (animatingToTop && animatingToTop !== idx) ? 'none' : 'auto',
                    }}
                    data-gif-card
                    onMouseEnter={() => { if (!animatingToTop) setHoveredIndex(idx); }}
                    onMouseLeave={() => { if (!animatingToTop) setHoveredIndex((h) => (h === idx ? null : h)); }}
                    onClick={() => { if (!isActive && !animatingToTop) startBringToTopAnimation(idx); }}
                    animate={{ top: targetY, scale: targetScale }}
                    transition={{ type: 'spring', stiffness: 260, damping: 32 }}
                  >
                    <motion.div
                      style={{
                        display: 'inline-block',
                        borderRadius: 8,
                        overflow: 'hidden',
                        boxSizing: 'border-box',
                        boxShadow,
                        width: '90%',
                        height: 'auto',
                        maxWidth: '100%',
                        border: frameActive ? '4px solid rgba(255,255,255,0.92)' : '2px solid rgba(255,255,255,0.9)',
                      }}
                      animate={{
                        scale: frameActive ? 1.01 : 1,
                        boxShadow: frameActive ? '0 22px 48px rgba(15,22,60,0.5)' : boxShadow,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    >
                      <img
                        src={gif}
                        alt={`Project gif ${idx + 1}`}
                        style={{
                          display: 'block',
                          width: setName === 'object' ? 'auto' : '100%',
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: setName === 'object' ? '420px' : '60vh',
                          objectFit: 'contain',
                          background: '#0b1020',
                        }}
                        draggable={false}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
