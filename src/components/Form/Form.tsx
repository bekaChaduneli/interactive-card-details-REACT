import {
  FormControl,
  Input,
  Flex,
  FormLabel,
  FormHelperText,
  Button,
  Text,
} from "@chakra-ui/react";
export default function Form(props: any) {
  const buttonStyles = {
    ":hover": {
      bgColor: "#21092F",
      opacity: "70%",
      transition: "0.4s",
    },
  };

  const setChangeSettings = () => {
    {
      props.nameFormat ||
      props.format ||
      props.cvcFormat ||
      props.yearFormat ||
      props.monthFormat
        ? props.setCanChange(false)
        : props.setCanChange(true);
    }
  };
  const nameFunc = (e: any) => {
    props.setName(e.target.value.toUpperCase());
    e.target.value === ""
      ? props.setNameFormat(true)
      : props.setNameFormat(false);
  };
  const cardFunc = (e: any) => {
    props.setInput(props.inputRef.current?.value);
    !Number((props.inputRef.current?.value).slice(0, 4))
      ? props.setFormat(true)
      : props.setFormat(false);
  };
  const cvcFunc = (e: any) => {
    props.setCvc(Number(e.target.value));
    e.target.value === ""
      ? props.setCvcFormat(true)
      : props.setCvcFormat(false);
  };
  const monthFunc = (e: any) => {
    const min = 0;
    const max = 12;
    const input: number = Math.max(min, Math.min(max, Number(e.target.value)));
    input < 10 ? props.setMonth(`0${input}`) : props.setMonth(input);
    e.target.value === ""
      ? props.setMonthFormat(true)
      : props.setMonthFormat(false);
  };

  const yearsFunc = (e: any) => {
    const min = 0;
    const max = 99;
    const input: number = Math.max(min, Math.min(max, Number(e.target.value)));
    input < 10 ? props.setYears(`0${input}`) : props.setYears(input);
    e.target.value === ""
      ? props.setYearFormat(true)
      : props.setYearFormat(false);
  };
  return (
    <Flex
      display={props.canChange ? "none" : "flex"}
      justifySelf="center"
      justifyContent="center"
      ml={{ sm: "0px", xl: "600px" }}
    >
      <form>
        <FormControl>
          <FormLabel color="#21092F" fontSize="12px" letterSpacing="2px">
            Cardholder Name
          </FormLabel>
          <Input
            w={{ sm: "327px", xl: "381px" }}
            h="45px"
            type="text"
            maxLength={30}
            placeholder="e.g. Jane Appleseed"
            onChange={nameFunc}
            borderColor={props.nameFormat ? "#FF5050" : "#DFDEE0"}
          />
          <FormHelperText color="#FF5050" fontSize="12px">
            {!props.nameFormat ? "" : "Can’t be blank"}
          </FormHelperText>
        </FormControl>
        <FormControl mt="26px">
          <FormLabel color="#21092F" fontSize="12px" letterSpacing="2px">
            Card Number
          </FormLabel>
          <Input
            w={{ sm: "327px", xl: "381px" }}
            h="45px"
            ref={props.inputRef}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            borderColor={props.format ? "#FF5050" : "#DFDEE0"}
            type="text"
            value={props.input
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={cardFunc}
          />
          <FormHelperText color="#FF5050" fontSize="12px">
            {props.format ? "Wrong format, numbers only" : ""}
          </FormHelperText>
        </FormControl>
        <Flex gap="11px">
          <FormControl mt="26px">
            <FormLabel color="#21092F" fontSize="12px" letterSpacing="2px">
              Exp. Date (MM/YY)
            </FormLabel>
            <Flex>
              <FormControl>
                <Input
                  w={{ sm: "72px", xl: "80px" }}
                  h="45px"
                  maxLength={2}
                  borderColor={props.monthFormat ? "#FF5050" : "#DFDEE0"}
                  required
                  onChange={monthFunc}
                  placeholder="MM"
                />
                <FormHelperText color="#FF5050" fontSize="12px">
                  {!props.monthFormat ? "" : "Can’t be blank"}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  w={{ sm: "72px", xl: "80px" }}
                  h="45px"
                  ml="8px"
                  maxLength={2}
                  borderColor={props.yearFormat ? "#FF5050" : "#DFDEE0"}
                  required
                  onChange={yearsFunc}
                  placeholder="YY"
                />
                <FormHelperText ml="6px" color="#FF5050" fontSize="12px">
                  {!props.yearFormat ? "" : "Can’t be blank"}
                </FormHelperText>
              </FormControl>
            </Flex>
          </FormControl>
          <FormControl mt="26px">
            <FormLabel color="#21092F" fontSize="12px" letterSpacing="2px">
              CVC
            </FormLabel>
            <Input
              w={{ sm: "164px", xl: "191px" }}
              onChange={cvcFunc}
              h="45px"
              borderColor={props.cvcFormat ? "#FF5050" : "#DFDEE0"}
              maxLength={3}
              placeholder="e.g. 123"
            />
            <FormHelperText color="#FF5050" fontSize="12px">
              {!props.cvcFormat ? "" : "Can’t be blank"}
            </FormHelperText>
          </FormControl>
        </Flex>
        <Button
          onClick={setChangeSettings}
          mt="26px"
          sx={buttonStyles}
          color="#fff"
          bgColor="#21092F"
          w={{ sm: "327px", xl: "381px" }}
          h="53px"
          fontSize="18px"
          mb="50px"
        >
          Confirm
        </Button>
      </form>
    </Flex>
  );
}
