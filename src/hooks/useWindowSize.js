import { useLayoutEffect, useState } from "react";

export const getGridSize = (width, prefix = "col") =>
  prefix + "-" + (width > 800 ? "2" : width > 500 ? "5" : "8");

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
