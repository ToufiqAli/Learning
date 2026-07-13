const orderScheme = require('../model/orders');
const crypto = require('crypto');


class orderServices{
    async createorder(order){
        const orderId = `ORD_${crypto.randomBytes(4).toString('hex')}`
        order.orderId = orderId;
        const createorder = await orderScheme.create(order);
        return createorder
    }
    async GetOneOrder(orderId){
        const order = await orderScheme.findOne({_id:orderId.orderId})
        return order
    }
}

module.exports = new orderServices