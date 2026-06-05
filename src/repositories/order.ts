import { getRepository } from "typeorm";
import { Order } from "../models";

export const getOrders = async (): Promise<Array<Order>> => {
  const orderRepository = getRepository(Order);
  return orderRepository.find();
};

export const createOrder = async (
  amount: number,
  customer: string,
  status: string
): Promise<Order> => {
  const orderRepository = getRepository(Order);
  const order = orderRepository.create({ amount, customer, status });
  return orderRepository.save(order);
};
