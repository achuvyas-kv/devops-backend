import { Get, Post, Route, Tags, Body } from "tsoa";
import { Order } from "../models";
import { getOrders, createOrder } from "../repositories/order";

interface CreateOrderBody {
  amount: number;
  customer: string;
  status: string;
}

@Route("orders")
@Tags("Order")
export default class OrderController {
  @Get("/")
  public async getOrders(): Promise<Array<Order>> {
    return getOrders();
  }

  @Post("/")
  public async createOrder(@Body() body: CreateOrderBody): Promise<Order> {
    return createOrder(body.amount, body.customer, body.status);
  }
}
