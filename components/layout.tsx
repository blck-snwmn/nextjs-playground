import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Layout: FC<{ isHome: boolean }> = ({ children, isHome }) => {
  if (isHome) {
    return (
      <Box>
        <Box>Layout</Box>
        {children}
        <Box>HomeLayout</Box>
      </Box>
    );
  }
  return (
    <Box>
      <Box>Layout</Box>
      {children}
      <Box>B</Box>
    </Box>
  );
};

export default Layout;
