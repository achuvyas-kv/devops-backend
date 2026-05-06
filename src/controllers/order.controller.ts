import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Order } from "../models";
import { getOrders } from "../repositories/order";

@Route("orders")
@Tags("Order")
export default class OrderController {
  @Get("/")
  public async getOrders(): Promise<Array<Order>> {
    return getOrders();
  }
}
