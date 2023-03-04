import { useState, useRef } from "react";
import React from "react";
import Form from "./components/Form/Form";
import CardFront from "./images/bg-card-front.png";
import { Flex, Box } from "@chakra-ui/react";
import Thanks from "./components/Thanks/Thanks";
import Background from "./components/Background/Background";
import Card from "./components/Card/Card";
interface inputType {
  input?: string | undefined;
  setInput?: React.Dispatch<React.SetStateAction<inputType> | void>;
}
function App(props: inputType) {
  const [input, setInput] = useState("");
  const [cvcChange, setCvcChange] = useState(true);
  const [monthChange, setMonthChange] = useState(true);
  const [yearChange, setYearChange] = useState(true);
  const [nameChange, setNameChange] = useState(true);
  const [numberChange, setNumberChange] = useState(true);
  let [name, setName] = useState("beka chaduneli");
  const [format, setFormat] = useState(false);
  const [month, setMonth] = useState("00");
  const [nameFormat, setNameFormat] = useState(false);
  const [yearFormat, setYearFormat] = useState(false);
  const [monthFormat, setMonthFormat] = useState(false);
  const [canChange, setCanChange] = useState(false);
  const [cvcFormat, setCvcFormat] = useState(false);
  const inputRef: any = useRef(null);
  const [years, setYears] = useState("00");
  const [cvc, setCvc] = useState("000");
  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Background />
      <Flex
        position="absolute"
        h="100%"
        w="100%"
        mt="32px"
        flexDirection="column"
      >
        <Card
          CardFront={CardFront}
          input={input}
          name={name}
          month={month}
          years={years}
          cvc={cvc}
        />
        <Flex
          w="100%"
          h="100%"
          alignItems={{ sm: "", xl: "center" }}
          justifyContent="center"
        >
          <Form
            cvcChange={cvcChange}
            yearChange={yearChange}
            setYearChange={setYearChange}
            numberChange={numberChange}
            setCvcChange={setCvcChange}
            monthChange={monthChange}
            setMonthChange={setMonthChange}
            setNumberChange={setNumberChange}
            input={input}
            setInput={setInput}
            yearFormat={yearFormat}
            setCanChange={setCanChange}
            canChange={canChange}
            monthFormat={monthFormat}
            nameChange={nameChange}
            setNameChange={setNameChange}
            setCvcFormat={setCvcFormat}
            cvcFormat={cvcFormat}
            setMonthFormat={setMonthFormat}
            setYearFormat={setYearFormat}
            month={month}
            setMonth={setMonth}
            cvc={cvc}
            setCvc={setCvc}
            name={name}
            years={years}
            setYears={setYears}
            setName={setName}
            format={format}
            setFormat={setFormat}
            nameFormat={nameFormat}
            setNameFormat={setNameFormat}
            inputRef={inputRef}
          />
          <Thanks canChange={canChange} setCanChange={setCanChange} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
