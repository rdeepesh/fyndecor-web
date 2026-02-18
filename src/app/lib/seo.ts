import { api } from "./axios";

export async function getSeoByPath(path: string) {
  const { data } = await api.get("/seo/by-path", {
    params: { path },
  });

  return data;
}
