import Link from "next/link";

const fetchSingleProduct = (id) => {
  return fetch(`/api/articles/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Product({ children, params }) {
  const { id } = params;
  const article = await fetchSingleProduct(id);
  return (
    <article>
      <h1>{article.title}</h1>
      {children}
    </article>
  );
}
