import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Spinner,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React, { FC, ReactNode, useMemo } from "react";

function Sample2() {
  const animals = ["dog", "cat", "bird"];
  return (
    <Box>
      <Box>
        <Stack>
          {animals.map((item) => (
            <Box bg="red.50">{item}</Box>
          ))}
        </Stack>
      </Box>
      <Box>
        <Flex direction="row" gridGap={2}>
          {animals.map((item) => (
            <Box bg="red.100" p={2}>
              {item}
            </Box>
          ))}
        </Flex>
      </Box>
      <Box>
        <HStack>
          <Avatar />
          <Stack>
            <Heading>Engineer</Heading>
            <Box>春は曙。ようよう白くなりゆく山際</Box>
          </Stack>
        </HStack>
      </Box>
      <Box m={3} p={2} bg="blue.100">
        <Flex m={3} p={2} bg="red.100">
          <Box bg="red.500">aaaa</Box>
          <Box bg="blue.500">bbbb</Box>
          <Spacer />
          <Box bg="yellow.500">cccc</Box>
        </Flex>
      </Box>
      <Box>
        <AccordionSample title="test">
          <Box>test1</Box>
          <Box>test2</Box>
          <Box>test3</Box>
          <Box>test4</Box>
        </AccordionSample>
      </Box>
      <GenTab />
    </Box>
  );
}

const AccordionSample: FC<{ title: ReactNode, children?: React.ReactNode | React.ReactNode[] }> = ({ title, children }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Accordion allowToggle reduceMotion>
      <AccordionItem>
        {({ isExpanded }) => {
          setLoaded(isExpanded || loaded);
          return (
            <>
              <AccordionButton fontSize="sm">
                <HStack>
                  <AccordionIcon />
                  <Box>{title}</Box>
                </HStack>
              </AccordionButton>
              <AccordionPanel>{loaded ? children : <Spinner />}</AccordionPanel>
            </>
          );
        }}
      </AccordionItem>
    </Accordion>
  );
};

const tabMap = ["dog", "cat"];

const GenTab = () => {
  const initialTab = useMemo(() => {
    if (typeof location === "undefined") {
      // SSR対応
      return 0;
    }
    return Math.max(tabMap.indexOf(location.hash.replace("#", "")), 0);
  }, []);
  return (
    <Box>
      <Tabs
        onChange={(idx) => {
          location.hash = `#${tabMap[idx]}`;
        }}
        defaultIndex={initialTab}
      >
        <TabList>
          <Tab>{tabMap[0]}</Tab>
          <Tab>{tabMap[1]}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>🐶</TabPanel>
          <TabPanel>🐱</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Sample2;
