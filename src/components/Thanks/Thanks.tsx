import complate from "../../images/icon-complete.svg";
import { Image, Text, Button, Flex } from "@chakra-ui/react";
export default function Thanks(props: any) {
  const buttonStyles = {
    ":hover": {
      bgColor: "#21092F",
      opacity: "70%",
      transition: "0.4s",
    },
  };
  return (
    <Flex
      display={props.canChange ? "flex" : "none"}
      flexDirection="column"
      ml={{ sm: "0px", xl: "600px" }}
      w="100%"
      justifySelf="center"
      justifyContent="center"
    >
      <Flex
        mt={{ sm: "220px", xl: "50px" }}
        flexDirection="column"
        alignItems="center"
        justifySelf="end"
      >
        <Image src={complate} alt="complate" />
        <Text mt="35px" fontSize="28px" letterSpacing="3.42px">
          THANK YOU!
        </Text>
        <Text mt="16px" color="#8F8694" fontSize="18px">
          We've added your card details
        </Text>
        <Button
          sx={buttonStyles}
          onClick={() => props.setCanChange(false)}
          mt="48px"
          bgColor="#21092F"
          w="327px"
          h="53px"
          color="white"
          fontSize="18px"
          mb="50px"
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}
