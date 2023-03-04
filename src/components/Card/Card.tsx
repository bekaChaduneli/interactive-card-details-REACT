import { Text, Box, Image, Flex } from "@chakra-ui/react";
import logo from "../../images/card-logo.svg";
import cardBack from "../../images/bg-card-back.png";
export default function Card(props: any) {
  return (
    <Flex
      flexDirection="column"
      alignItems={{ sm: "center", xl: "start" }}
      w="100%"
      ml="-10px"
      mt="50px"
      position={{ sm: "relative", xl: "absolute" }}
    >
      <Box
        w={{ sm: "286px", xl: "447px" }}
        h={{ sm: "157px", xl: "245px" }}
        ml={{ sm: "52px", xl: "250px" }}
        mt={{ sm: "-50px", xl: "370px" }}
        position={{ sm: "relative", xl: "absolute" }}
        borderRadius="6px"
        p="19px"
        backgroundImage={cardBack}
        backgroundPosition="center"
        backgroundSize="100%"
      >
        <Text
          fontSize={{ sm: "9px", xl: "14px" }}
          ml={{ sm: "215px", xl: "346px" }}
          mt={{ sm: "52px", xl: "92px" }}
          letterSpacing={{ sm: "", xl: "2px" }}
          color="white"
        >
          {props.cvc}
        </Text>
      </Box>
      <Box
        w={{ sm: "285px", xl: "447px" }}
        h={{ sm: "156.21px", xl: "245px" }}
        transform="translateY(-68px)"
        borderRadius="6px"
        mt={{ sm: "0px", xl: "150px" }}
        position={{ sm: "relative", xl: "absolute" }}
        ml={{ sm: "0px", xl: "180px" }}
        p={{ sm: "19px", xl: "32px" }}
        bgImage={props.CardFront}
      >
        <Image h="30px" src={logo} />
        <Text
          mb="0"
          mt={{ sm: "37px", xl: "64px" }}
          color="white"
          fontSize={{ sm: "17px", xl: "28px" }}
          letterSpacing={{ sm: "2.2px", xl: "3.42px" }}
        >
          {props.input}
        </Text>
        <Flex
          mt={{ sm: "17px", xl: "25.2px" }}
          justifyContent="space-between"
          w="100%"
        >
          <Text
            letterSpacing={{ sm: "0px", xl: "2px" }}
            fontSize={{ sm: "9px", xl: "14px" }}
            color="white"
          >
            {props.name}
          </Text>
          <Text
            fontSize={{ sm: "9px", xl: "14" }}
            letterSpacing={{ sm: "1.29px", xl: "2px" }}
            color="white"
          >
            {props.month}/{props.years}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
