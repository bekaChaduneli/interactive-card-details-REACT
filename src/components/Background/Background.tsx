import backgroundMob from "../../images/bg-main-mobile.png";
import backgroundDesk from "../../images/bg-main-desktop.png";
import { Box, Image } from "@chakra-ui/react";
export default function Background() {
  return (
    <Box w="100%" h={{ sm: "240px", xl: "100%" }}>
      <Image
        backgroundPosition="center"
        backgroundSize="100%"
        display={{ sm: "block", xl: "none" }}
        h="240px"
        w="100%"
        src={backgroundMob}
      />
      <Image
        display={{ sm: "none", xl: "block" }}
        h="100vh"
        w="483px"
        src={backgroundDesk}
        alt="desktopBackground"
      />
    </Box>
  );
}
