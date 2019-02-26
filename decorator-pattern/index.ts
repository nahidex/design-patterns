abstract class Beverage {
    description:string = "Unknown Beverage";

    getDescription():string {
        return this.description;
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


const beverage:Beverage = new Expresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage1:Beverage;

beverage1 = new HouseBlend();
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
beverage1 = new Mocha(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);
beverage1 = new Whip(beverage1);

console.log(beverage1.getDescription() + " $" + beverage1.cost());

