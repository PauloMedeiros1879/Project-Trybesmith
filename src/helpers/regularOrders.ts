import { IOrders, IOrder } from '../interfaces/orders.interface';

const removeDuplicates = (orders: IOrder[]): IOrder[] => {
  const ordersIds = Array.from(new Set(orders.map(({ id }) => id)));

  const uniqueOrders = ordersIds.map((orderId) => {
    const index = orders.findIndex(({ id }) => id === orderId);
    return orders[index];
  });

  return uniqueOrders;
};

const normalizedOrders = (orders: IOrders[]): IOrder[] => {
  const regularOrders = orders.map(({ id, userId }) => {
    const orderProducts = orders.filter((order) => order.id === id);
    const productsIds = orderProducts.map((order) => order.productId);

    return {
      id,
      userId,
      productsIds,
    };
  });

  const uniqueRegularOrders = removeDuplicates(regularOrders);

  return uniqueRegularOrders;
};

export default normalizedOrders;