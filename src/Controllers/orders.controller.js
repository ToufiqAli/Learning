const orderservice = require ('../Services/order.service');
const customer = require('../model/user')
const productScheme = require('../model/products')



class OrderController{
    async orderCreate(req,res,next){
        try{
        const orderdata = req.body;
        const validcustomer = await customer.find({_id:orderdata.customer});
        if(!validcustomer){
            res.status(404).json({
                status : "Failed",
                message : "Not An Valid User"
            })
        }
      // 1. Get the list of product IDs from the order
const productIds = orderdata.orderItems.map(item => item.product);

// 2. Fetch those products from the database
const dbProducts = await productScheme.find({ _id: { $in: productIds } });

// 3. Loop through each item the customer wants to buy
for (const customerItem of orderdata.orderItems) {
  
  // Find the matching product in the database results
  const dbProduct = dbProducts.find(p => p._id.toString() === customerItem.product);
  
  // Check 1: Does the product even exist in the DB?
  if (!dbProduct) {
    return res.status(400).json({ 
      status: "Fail", 
      message: `Product ${customerItem.productName} no longer exists.` 
    });
  }

  // Check 2: Find the specific variant using the SKU
  const matchingVariant = dbProduct.variants.find(v => v.sku === customerItem.sku);

  if (!matchingVariant) {
    return res.status(400).json({ 
      status: "Fail", 
      message: `Variant with SKU ${customerItem.sku} not found.` 
    });
  }

  // Check 3: Is there enough stock for the customer's requested quantity?
  if (matchingVariant.stock < customerItem.quantity) {
    return res.status(400).json({ 
      status: "Fail", 
      message: `Out of Stock! ${customerItem.productName} (Size: ${matchingVariant.size}) only has ${matchingVariant.stock} items left, but you asked for ${customerItem.quantity}.` 
    });
  }
}
            const order = await orderservice.createorder(orderdata);
            res.status(200).json({
                status : "Success",
                order : order
            })

        
    }catch(error){
        next(error);
    }


    }
async GetOneOrder(req, res, next) {
  try {
    const order = await orderservice.GetOneOrder(req.params); 
    
    if (!order) {
      return res.status(404).json({ status: "Fail", message: "Order not found" });
    }

    res.status(200).json({ status: "Success", order });
  } catch (error) {
    next(error);
  }
}
}

module.exports = new OrderController