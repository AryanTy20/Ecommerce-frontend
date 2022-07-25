import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const windowSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSize);

    return () => {
      window.removeEventListener("resize", windowSize);
    };
  });
  return [height, width];
};

export default useWindowSize;
