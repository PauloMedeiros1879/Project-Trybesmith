export interface INewOrders {
  userId: number;
}
export interface IOrders extends INewOrders {
  id: number;
  productsIds?: number;
}