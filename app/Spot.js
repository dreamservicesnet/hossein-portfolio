"use client";
export default function Spot({ children, className }) {
  const move = (e) => {
    for (const el of e.currentTarget.children) {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", e.clientX - r.left + "px");
      el.style.setProperty("--y", e.clientY - r.top + "px");
    }
  };
  return <div className={className} onPointerMove={move}>{children}</div>;
}
