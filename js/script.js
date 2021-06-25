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
        if(this.type ==" "){
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
          else if (this.crust == "Cheesy Crust"){
            return 150;
         } 
         else if (this.crust == "Thin & Crust"){
           return 300;
         } else{
            return 0;
        }
     }
     toppinsPrice(){
         if(this.toppings == "extra Beef"){
             return 200;
         }else if (this.toppings == "extra Ham"){
            return 200;
        }else if (this.toppings == "extra Cheese Mozerella"){
            return 200;
        }else if (this.toppings == "extra Bacon"){
            return 200;
        }else if (this.toppings == "extra Sausages"){
            return 200;
        }else if (this.toppings == "extra Chicken"){
            return 200;
        }else if (this.toppings == "extra Spinach"){
            return 200;
        }else if (this.toppings == "extra Onion"){
            return 200;
        }else if (this.toppings == "extra Mushrooms"){
            return 200;
        }else if (this.toppings == "extra Tomatoes"){
            return 200;
        }else if (this.toppings == "extra Jalapenoes"){
            return 200;
        }else if (this.toppings == "extra Olives"){
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
