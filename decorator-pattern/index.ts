abstract class Beverage {
    description:string = "Unknown Beverage";
    static SMALL:number = 1;
    static LARGE:number = 2;
    static EXTREA_LARGE:number = 3;
    
    size:number;

    getDescription():string {
        return this.description;
    }

    setSize(size: number):void {
        this.size = size;
    }

    getSize():number {
        return this.size;
    }

    abstract cost():number;
}

abstract class CondimentDecorator extends Beverage {
    abstract getDescription():string;
}

class Expresso extends Beverage {
    constructor(){
        super();
        this.description = "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "House Blend Coffee";
    }
    cost(): number {
        return 0.89;
    }
}


class Mocha extends CondimentDecorator {
    beverage:Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }
    
    cost(): number {
        return 0.20 + this.beverage.cost();
    }
}


class Whip extends CondimentDecorator {
    beverage:Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }
    
    cost(): number {
        return 0.50 + this.beverage.cost();
    }
}



class Soy extends CondimentDecorator {
    beverage:Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }
    
    cost(): number {

        let cost:number = this.beverage.cost();
        const size:number = this.beverage.getSize();

        if(size === Beverage.SMALL) {
            cost += 0.10;
        } else if(size === Beverage.LARGE) {
            cost += 0.15;
        } else if(size === Beverage.EXTREA_LARGE) {
            cost += 0.20;
        }

        return cost;
    }
}



const beverage:Beverage = new Expresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage1:Beverage;

beverage1 = new HouseBlend();
beverage1 = new Mocha(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);
console.log(beverage1.getDescription() + " $" + beverage1.cost());

let beverage2:Beverage = new Expresso();
beverage2.setSize(1);
// beverage2 = new Mocha(beverage2);
beverage2 = new Soy(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

