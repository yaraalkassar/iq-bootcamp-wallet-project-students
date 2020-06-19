class Wallet{
constructor(name,currency,balance,description){
  this.name=name;
  this.currency=currency;
  this.balance=balance;
  this.description=description;
}
// Get methods
  getName(){
    return this.name;
  }
  getBalance(){
    return this.balance;
  }
  
  getCurrency(){
    return this.currency;
  }
  
  getDescription(){
    return this.description;
  }
 
  //Set methods 
  setName(newName){
    this.name=newName;
  }

  setCurrency(newCurrency){
    this.currency=newCurrency;
  }
   setBalance(newBalance){
    this.name=newBalance;
  }
   setDescrption(newDesc){
    this.name=newDesc;
  }
}

