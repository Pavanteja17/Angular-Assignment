class Bank{
    nameOfDepositor:String;
    accountNumber:String;
    accountType:String;
    balance:number;

    assignValues(nameOfDepositor:String, accountType:String, balance:number):void {
        this.nameOfDepositor = nameOfDepositor;
        this.accountType = accountType;
        this.balance = balance;
        var random = ("" + Math.random()).substring(2, 8);
        this.accountNumber = random;
    }

    depositAmount(amount:number):void{
        if(this.accountNumber == undefined){
            console.log("you dont have a bank account");
        }else{
            this.balance+=amount;
            console.log("current balance is: "+this.balance);
        }
    }
    withDrawAmount(amount:number):void{
        if(this.accountNumber == undefined){
            console.log("you dont have a bank account"); 
        }else{
            if(this.balance>amount){
                this.balance = this.balance - amount;
                console.log("current balance is: "+this.balance);
            }else{
                console.log("Insufficient balance");
            }
        }
    }
    displayDetails():void{
        if(this.accountNumber == undefined){
            console.log("you dont have bank account!! Register now");
        }else{
            console.log("Name of the depositor:"+this.nameOfDepositor);
            console.log("balance amount:"+this.balance);
        }
    }
}

let bankAccount = new Bank();
bankAccount.assignValues("Pavan", "Savings", 2000);
bankAccount.depositAmount(2000);
bankAccount.withDrawAmount(1000)
bankAccount.withDrawAmount(2000)
bankAccount.displayDetails();