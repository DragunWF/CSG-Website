import { useEffect } from "react";

export const isIOS = () => {
  if (typeof navigator !== "undefined") {
    return /iPad|iPhone/.test(navigator.userAgent);
  }
  return false;
};

export const AdjustCSSVariables = () => {
  useEffect(() => {
    if (isIOS()) {
      document.documentElement.style.setProperty("--primary-font-size", "16px");
      document.documentElement.style.setProperty(
        "--secondary-font-size",
        "20px"
      );
      document.documentElement.style.setProperty(
        "--tertiary-font-size",
        "30px"
      );
    }
  }, []);

  return null;
};
