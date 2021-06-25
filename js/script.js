class Pizza{
    constructor(type, crust, toppings, quantity, delivery){
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity=quantity;
        this.delivery= delivery;

    }
    typePrice(){
        if(this.type =="CHICKEN SUPREME"){
            this.price = 700;
            return this.price;
        }else{
            return this.price;
        }
    }
     priceBySize(){
         if(this.size == "large"){
             return 1000
         } else if (this.size =="Medium"){
             return 750;
         } else{
             return 500;
         }
     }
     CrustPrice(){
         if (this.crust == "Tripple Crust"){
             return 400;
         } else if (this.crust == "Double Crust"){
             return 300;
         }
          else if (this.crust == "glutten Free Crust"){
            return 300;
        } else{
            return 0;
        }
     }
     toppinsPrice(){
         if(this.toppings == "extra chcken"){
             return 200;
         }else if (this.toppings == "extra olives"){
            return 200;
        }else if (this.toppings == "extra cheese"){
            return 200;
        }else if (this.toppings == "extra pepperoni"){
            return 200;
        } else{
            return 0;
        }
     }
     deliveryPrice(){
         if(this.delivery == true){
             return 200;
         } else {
             return 0;
         }
     }
     totalPriceNoDelivery(){
        let priceAtPointA = this.typePrice();
        let priceAtPointB = this.priceBySize();
        let priceAtPointC = this.toppingsPrice();
        let priceAtPointD = this.crustPrice();
    
        return priceAtPointA + priceAtPointB + priceAtPointC + priceAtPointD;
      }
    
      pricePerQuantity(){
        let grossPrice = this.totalPriceNoDelivery();
        return grossPrice * this.quantity;
      }
    
      totalPlusDelivery(){
        let withoutDelivery = this.pricePerQuantity();
        let deliveryFee = this.deliveryPrice();
    
        return withoutDelivery + deliveryFee;
      }
}
