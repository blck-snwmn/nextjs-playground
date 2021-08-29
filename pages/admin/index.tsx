import { Badge, Stack } from "@chakra-ui/react";
import Layout from "../../components/layout";

function Admin() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default Admin;
