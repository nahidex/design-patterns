interface FlyBehavior {
    fly():void;
};

class FlyWithWings implements FlyBehavior {
    fly(){
        console.log("i'm Flying!!");
    }
}

class FlyNoWay implements FlyBehavior {
    fly() {
        console.log("i can't fly!");
    }
}


interface QuackBehavior {
    quack():void;
};

class Quack implements QuackBehavior {
    quack() {
        console.log('Quack');
    }
}

class MuteQuack implements QuackBehavior {
    quack() {
        console.log('<<Slilnece>>');
    }
}

class Squack implements QuackBehavior {
    quack() {
        console.log('Squeak');
    }
}

abstract class Duck {
    public flyBehavior: FlyBehavior;
    public quackBehavior: QuackBehavior;

    constructor(){};

    public abstract display():void;

    public performFly() {
        this.flyBehavior.fly();
    }

    public performQuack() {
        this.quackBehavior.quack();
    }

    public swim():void {
        console.log('All duck float, even deocys!');
    }

    public setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

}

class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    display() {};
}

const mallerd:Duck = new MallardDuck();

mallerd.performFly();
mallerd.performQuack();


class ModelDuck extends Duck {
    
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Quack();
    }

    public display(): void {
        throw new Error("Method not implemented.");
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly() {
        console.log("I'm flying with a rocket!");
    }
}

const model:Duck =  new ModelDuck();
model.setFlyBehavior(new FlyRocketPowered()); // Changing Behavior on the fly
model.performFly();


