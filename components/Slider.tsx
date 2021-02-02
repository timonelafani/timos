import React, { useEffect, useState } from "react";
import { Box, Flex, Image } from "theme-ui";

const Slider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Box>
      <Image src="/2.jpg" />
    </Box>
  );
};

export default Slider;
