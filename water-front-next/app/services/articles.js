import { API_URL, STRAPI_API } from "../config";

export async function getArticles() {
  const res = await fetch(
    `${API_URL}/articles?populate=*&pagination[start]=0&pagination[limit]=100`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const { data } = await res.json();
  return data;
}

export function getCoverImage({ attributes }) {
  const url = attributes.CoverImage.data.attributes.url;
  return `${STRAPI_API}${url}`;
}
