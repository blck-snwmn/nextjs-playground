import { useRouter } from "next/router";
import {
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

function Sample() {
  const [value, setValue] = useState("1");
  console.log("change!", value);

  const [textAreaValue, setTextAreaValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  let handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const v = e.target.value;
    console.log("textarea", v);
    setTextAreaValue(v);
    const isInvalid = v.length > 10;
    console.log("textarea-isInvalid", isInvalid);
    setIsInvalid(isInvalid);
  };

  const [resizeValue, setResizeValue] = useState("none");

  return (
    <Box m={2} color="#f00">
      <Box>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </Stack>
        </RadioGroup>

        <Stack spacing={3}>
          <Select placeholder="1" size="xs">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="2" size="sm" />
          <Select placeholder="3" size="md" />
          <Select placeholder="4" size="lg" />
        </Stack>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="switch-sample" mb="0">
            switch?
          </FormLabel>
          <Switch id="switch!" />
        </FormControl>
        <Box>
          <RadioGroup defaultValue={resizeValue} onChange={setResizeValue}>
            <Stack direction="row">
              <Radio value="horizontal">horizontal</Radio>
              <Radio value="vertical">vertical</Radio>
              <Radio value="both">both</Radio>
              <Radio value="none">none</Radio>
            </Stack>
          </RadioGroup>
          <Text>please input</Text>
          <Textarea
            value={textAreaValue}
            onChange={handleChange}
            isInvalid={isInvalid}
            resize={resizeValue}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Sample;
