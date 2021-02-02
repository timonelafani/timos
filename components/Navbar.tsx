import React, { useEffect, useState } from "react";
import { Box, Flex, Button, Heading } from "theme-ui";

const navitems = [
  { name: "Home" },
  { name: "About us" },
  { name: "Contact us" },
];

const Navbar = () => {
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
    <Box
      sx={{
        width: "100%",
        height: scrollPosition >= 50 ? "80px" : ["80px", "100px"],
        bg: scrollPosition >= 50 ? "rgba(0, 0, 0)" : "rgba(0, 0, 0, 0.7)",
        position: "fixed",
        top: 0,
        borderBottom: "2px solid rgba(203, 134, 112, 0.63)",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          my: "auto",
          verticalAlign: "middle",
          textAlign: "center",
          height: "100%",
          px: 5,
        }}
      >
        <Flex
          sx={{ my: "auto", verticalAlign: "center", alignItems: "center" }}
        >
          <img src="/favicon.ico" />
          <Heading
            sx={{ pl: 3, fontFamily: "FuturaLT-Book", fontSize: "42px" }}
          >
            Timo's
          </Heading>
        </Flex>
        <Box>
          <ul style={{ listStyle: "none" }}>
            {navitems.map((item) => (
              <li
                style={{
                  display: "inline-block",
                  padding: "0 10px",
                  cursor: "pointer",
                  fontFamily: "FuturaLT-Book",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Button
            sx={{
              fontFamily: "FuturaLT-Book",
              fontSize: "18px",
              fontWeight: "bolder",
            }}
          >
            Make a reservation
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
