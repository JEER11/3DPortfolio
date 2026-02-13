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
                  return (
                    <motion.div
                      key={`object-stack`}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex,
                      }}
                    >
                      <motion.div
                        style={{
                          display: 'inline-block',
                          borderRadius: 12,
                          overflow: 'visible',
                          boxSizing: 'border-box',
                          width: '90%',
                          maxWidth: '720px',
                          position: 'relative',
                          background: 'transparent',
                        }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      >
                        {/* Base image: smaller and pushed down */}
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <img
                            src={baseImg}
                            alt={`Project base image`}
                            style={{
                              display: 'block',
                              width: '74%',
                              margin: '0 auto',
                              height: 'auto',
                              objectFit: 'cover',
                              transform: 'translateY(40px) scale(0.86)',
                              transition: 'transform .28s ease',
                              borderRadius: 10,
                              boxShadow: '0 8px 20px rgba(2,6,23,0.28)',
                              zIndex: 1,
                              position: 'relative',
                            }}
                            draggable={false}
                          />
                        </div>

                        {/* Overlay frame for GIF: mimics other project frames */}
                        <div
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '8%',
                            transform: 'translate(-50%, 0)',
                            width: '86%',
                            borderRadius: 10,
                            overflow: 'hidden',
                            zIndex: 3,
                            boxShadow: '0 22px 48px rgba(2,6,23,0.55)',
                            border: '4px solid rgba(255,255,255,0.92)',
                            background: '#0b1020',
                          }}
                        >
                          <img
                            src={topImg}
                            alt={`Project gif overlay`}
                            style={{
                              display: 'block',
                              width: '100%',
                              height: 'auto',
                              maxHeight: '520px',
                              objectFit: 'contain',
                            }}
                            draggable={false}
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                  return (
                    <motion.div
                      key={`object-stack`}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex,
                      }}
                    >
                      <motion.div
                        style={{
                          display: 'inline-block',
                          borderRadius: 8,
                          overflow: 'hidden',
                          boxSizing: 'border-box',
                            boxShadow: '0 10px 24px rgba(15,22,60,0.35)',
                            width: '90%',
                          maxWidth: '720px',
                          position: 'relative',
                            background: '#0b1020',
                            border: '4px solid rgba(255,255,255,0.06)',
                            padding: '8px',
                        }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      >
                        <img
                          src={baseImg}
                          alt={`Project base image`}
                          style={{
                            display: 'block',
                            width: '76%',
                            margin: '0 auto',
                            height: 'auto',
                            objectFit: 'cover',
                            transform: 'translateY(36px) scale(0.88)',
                            transition: 'transform .28s ease',
                            borderRadius: 8,
                            boxShadow: '0 8px 18px rgba(2,6,23,0.28)',
                            zIndex: 1,
                            position: 'relative',
                          }}
                          draggable={false}
                        />

                        <img
                          src={topImg}
                          alt={`Project gif overlay`}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translate(-50%, -18%)',
                            width: '86%',
                            height: 'auto',
                            maxHeight: '500px',
                            objectFit: 'contain',
                            pointerEvents: 'none',
                            borderRadius: 8,
                            boxShadow: '0 28px 56px rgba(2,6,23,0.6)',
                            zIndex: 3,
                          }}
                          draggable={false}
                        />
                      </motion.div>
                    </motion.div>
                  );
                }

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
                      filter: 'brightness(' + dim + ') saturate(' + sat + ')',
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
                          width: '100%',
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: '60vh',
                          objectFit: 'contain',
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
