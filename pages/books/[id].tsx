import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { book: { name: "test", id: params.id, createdAt: Date.now() } },
  };
}

function Books({ book }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const now = new Date(book.createdAt);

  return (
    <Box m={2} color="#f00">
      {book.id}-{book.name}:{now.toLocaleDateString()}-
      {now.toLocaleTimeString()}
    </Box>
  );
}

export default Books;
