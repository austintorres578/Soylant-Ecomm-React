import React, { useEffect, useState } from "react";
import "../../../assets/styles/parts/infiniteScroller.css";

function InfiniteScroller() {
  const [leftPosition, setLeftPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to control pausing

  useEffect(() => {
    if (isPaused) return; // Skip updating when paused

    const interval = setInterval(() => {
      setLeftPosition((prevLeft) => {
        return prevLeft <= -100 ? 0 : prevLeft - 0.05; // Reset position when it moves out of view
      });
    }, 15);

    return () => clearInterval(interval); // Cleanup interval
  }, [isPaused]); // Re-run effect when isPaused changes

  return (
    <section
      className="infinite-auto-slider"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on hover out
    >
      <div
        className="marquee"
        style={{
          left: `${leftPosition}%`,
        }}
      >
        <span>28 vitamins & minerals</span>
        <span>9 essential amino acids</span>
        <span>12 brain boosting nutrients</span>
        <span>omega 3 & 6</span>
        <span>slow burning carbs</span>
        <span>made in the USA</span>
        <span>plant-based</span>
        <span>science-backed</span>
        <span>no eggs or dairy</span>

        {/* Duplicate content for seamless looping */}
        <span>28 vitamins & minerals</span>
        <span>9 essential amino acids</span>
        <span>12 brain boosting nutrients</span>
        <span>omega 3 & 6</span>
        <span>slow burning carbs</span>
        <span>made in the USA</span>
        <span>plant-based</span>
        <span>science-backed</span>
        <span>no eggs or dairy</span>
      </div>
    </section>
  );
}

export default InfiniteScroller;
