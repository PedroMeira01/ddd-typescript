import OrderItem from "../Entity/order_item";
import Order from '../Entity/order';
import OrderService from './order.service';
import Customer from "../Entity/customer";

describe("Order service unit tests", () => {

    it("Should place an order", () => {
        
        const customer = new Customer("c1", "Customer 1");
        const item1 = new OrderItem("i1", "p1", "Item 1", 10, 1);

        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(5);
        expect(order.total()).toBe(10);
    });

    it("Should get total of all orders", () => {

        const item = new OrderItem("i1", "p1", "Item 1", 100, 1);
        const item2 = new OrderItem("i2", "p2","Item 2", 200, 2);

        const order = new Order("o1", "c1", [item]);
        const order2 = new Order("o2", "c1", [item2]);

        const total = OrderService.total([order, order2]);

        expect(total).toBe(500);
    });

});