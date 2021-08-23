import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Box>
      <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
      <Box w="100%" h="200px" bgGradient="radial(gray.300,yellow.400,pink.200)">
        <p>name: {name}</p>
      </Box>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      ></Text>
      <Stack direction="row" m={2}>
        <Badge variant="outline" colorScheme="whiteAlpha">
          outline-whiteAlpha
        </Badge>
        <Badge variant="outline" colorScheme="twitter">
          outline-twitter
        </Badge>
        <Badge variant="outline" colorScheme="facebook">
          outline-facebook
        </Badge>
        <Badge variant="solid" colorScheme="blackAlpha">
          solid=blackAlpha
        </Badge>
        <Badge variant="subtle" colorScheme="linkedin">
          subtle=linkedin
        </Badge>
      </Stack>
    </Box>
  );
};

export default User;
