import { Box } from "theme-ui";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          zIndex: "100",
          width: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Navbar />
      </Box>
      <Box sx={{ height: "1000px" }}>
        <Slider />
      </Box>
    </>
  );
}
