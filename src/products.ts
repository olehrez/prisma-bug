import db from "./db";

export const getProducts = async () => {
  const products = await db.productNote.findMany();
  return products;
};
