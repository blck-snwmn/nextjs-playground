import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Layout: FC<{ children?: React.ReactNode | React.ReactNode[], isHome?: boolean  }> = ({ children, isHome = false }) => {
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
