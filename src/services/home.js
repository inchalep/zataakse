import { _get } from "../utils/api";

export const getGategoriesList = async () => {
  return await _get("/products/category-list");
};
