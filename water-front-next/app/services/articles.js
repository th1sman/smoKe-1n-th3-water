import { API_URL, STRAPI_API } from "../config";

export async function getArticles() {
  const res = await fetch(
    `${API_URL}/articles?populate[fields][0]=name&populate[cover][fields][0]=url`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const { data } = await res.json();
  return data;
}

export function getCoverImage({ attributes }) {
  //const url = attributes.cover.data.attributes.url;
  return `${STRAPI_API}`;
}
