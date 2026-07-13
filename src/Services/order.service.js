const orderScheme = require('../model/orders');
const crypto = require('crypto');


class orderServices{
    async createorder(order){
        const orderId = `ORD_${crypto.randomBytes(4).toString('hex')}`
        order.orderId = orderId;
        const createorder = await orderScheme.create(order);
        return createorder
    }
    async GetOneOrder(OrderId){
        const order = await orderScheme.findOne({_id:OrderId.OrderId})
    }
}