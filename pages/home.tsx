import { Box } from "@chakra-ui/react";

function Home() {
  return <Box>home</Box>;
}

export const getServerSideProps = async (context) => ({
  props: {
    isHome: true, // 複数のレイアウトを切り替えたいときは 'MainLayout' などの文字列を用いる
  },
});

export default Home;
