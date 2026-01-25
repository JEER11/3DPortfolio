import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DocDashCare from "../assets/images/DocDashCare.gif";
import DocAssistBill from "../assets/images/DocAssistBill.gif";

const gifs = [DocDashCare, DocAssistBill];
const STACK_COLORS = ["#266678", "#cb7c7a", "#36a18b", "#cda35f", "#747474"];

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export default function ProjectGifStack() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Stack preview: static first frame of gifs, stacked horizontally */}
      <ul style={{ position: "relative", height: "48px", width: `${96 + (gifs.length - 1) * 32}px`, cursor: "pointer" }} onClick={() => setOpen(true)}>
        {gifs.map((gif, idx) => (
          <li
            key={idx}
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
            {/* Use poster images for static preview if available, else fallback to gif (will show first frame in most browsers) */}
            <img src={gif} alt={`Project gif ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} draggable={false} />
          </li>
        ))}
      </ul>
      {/* Popup: animated gifs, stacked with slide/stack animation, click outside to close */}
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
            <div style={{ position: "relative", width: "350px", height: "220px" }} onClick={e => e.stopPropagation()}>
              {gifs.map((gif, idx) => (
                <motion.img
                  key={idx}
                  src={gif}
                  alt={`Project gif ${idx + 1}`}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: idx * -10,
                    width: "350px",
                    height: "220px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                    zIndex: gifs.length - idx,
                    objectFit: "cover",
                    border: idx === 0 ? "3px solid #fff" : "none",
                  }}
                  animate={{
                    top: idx * -10,
                    scale: 1 - idx * 0.06,
                    zIndex: gifs.length - idx
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
