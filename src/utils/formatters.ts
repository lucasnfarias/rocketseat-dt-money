export const dateFormmatter = new Intl.DateTimeFormat("pt-BR");

export const priceFormmatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
