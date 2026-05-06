import { getRepository } from "typeorm";
import { Order } from "../models";

export const getOrders = async (): Promise<Array<Order>> => {
  const orderRepository = getRepository(Order);
  return orderRepository.find();
};
