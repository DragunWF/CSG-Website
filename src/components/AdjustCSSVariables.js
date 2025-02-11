import { useEffect } from "react";

const isIOSPhone = () => {
  if (typeof navigator !== "undefined") {
    return /iPhone/.test(navigator.userAgent);
  }
  return false;
};

const AdjustCSSVariables = () => {
  useEffect(() => {
    const style = document.createElement("style");

    const applyFontSize = () => {
      if (isIOSPhone()) {
        if (window.matchMedia("(orientation: portrait)").matches) {
          // Apply smaller fonts in portrait mode
          document.documentElement.style.setProperty(
            "--primary-font-size",
            "6px"
          );
          document.documentElement.style.setProperty(
            "--secondary-font-size",
            "8px"
          );

          // Add -webkit-text-size-adjust to adjust text size in iOS portrait mode
          style.innerHTML = `.ios-text-adjust { -webkit-text-size-adjust: 100%; }`;
          if (!document.head.contains(style)) {
            document.head.appendChild(style);
          }
        } else {
          // Reset to default in landscape mode
          document.documentElement.style.setProperty(
            "--primary-font-size",
            "20px"
          );
          document.documentElement.style.setProperty(
            "--secondary-font-size",
            "30px"
          );

          // Remove -webkit-text-size-adjust in landscape mode
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        }
      }
    };

    // Apply font size on mount
    applyFontSize();

    // Listen for screen orientation changes
    const handleOrientationChange = () => {
      applyFontSize();
    };

    // Use 'resize' instead of 'change' for broader support
    window.addEventListener("resize", handleOrientationChange);

    // Cleanup function to remove style when the component unmounts or dependencies change
    return () => {
      // Check if style is still a child before removing
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return null;
};

export default AdjustCSSVariables;
