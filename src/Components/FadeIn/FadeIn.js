import React, { useEffect, useState } from "react";

const FadeIn = ({ children, sectionName }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionKey = `section_${sectionName}`;
    const hasSectionBeenAnimated = JSON.parse(localStorage.getItem(sectionKey));

    if (!hasSectionBeenAnimated) {
      const handleScroll = () => {
        const element = document.getElementById(
          `fade-in-element-${sectionName}`
        );
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (elementRect.top < windowHeight * 0.75) {
            setIsVisible(true);
            localStorage.setItem(sectionKey, JSON.stringify(true));
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // If the section has already been animated, set isVisible to true
      setIsVisible(true);
    }
  }, [sectionName]);

  return (
    <div
      id={`fade-in-element-${sectionName}`}
      className={`fade-in-element ${isVisible ? "fade-in" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
