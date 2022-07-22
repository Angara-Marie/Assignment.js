class Mkulima{
    constructor(){
    this.farms = [];
    this.groceryVendor = [];
    this.product = [];
    this.addFarm = (farmId, farmName, farmer, phone, address) => {
    this.farms.push({farmId,farmName,farmer,phone,address})
    }
    this.removeFarm = (farmId) => {
    let main = this.farms.find(item => item.farmId ===farmId);
    let farmIndex = this.farms.indexOf(main);
    this.farms.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let mainFarm = this.farms.find(item => item.farmId ===farmId)
    mainFarm.farmId =newFarmId;
    mainFarm.farmName =newFarmName;
    mainFarm.farmer =newFarmerName;
    mainFarm.phone =newPhone;
    mainFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.farms.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    
    }
    this.removeProduct = (productId) => {
    let main = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(main);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let mainProduct = this.product.find(item => item.productId ===productId)
    mainProduct.productId =newProductId;
    mainProduct.productName = newProductName;
    mainProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProducts = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let mainProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${mainProduct.productName} for KES ${quantity*mainProduct.price}`);
    }
    }
    }
    
    let farm1 = new Mkulima();
    farm1.addFarm("001","Tessa","Angara","0716507709", "616-000");
    farm1.addFarm("002","Marie","Quinn","0113362506", "617-000");
    farm1.addFarm("003","Kelsey","Agatha","33109827", "618-000");
    console.log(farm1.farms);
    
    farm1.removeFarm("001");
    console.log()