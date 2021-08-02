export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { book: { name: "test", id: params.id } },
  };
}

function Books({ book }) {
  return (
    <div>
      {book.name}:{book.id}
    </div>
  );
}

export default Books;
