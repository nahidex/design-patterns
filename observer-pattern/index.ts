interface Observer {
    update(temp?:number, humidity?:number, pressure?:number):void;
}
interface Subject {
    registerObserver(o:Observer):void;
    removeObserver(o:Observer):void;
    notifyObserver():void;
}

interface DisplayElement {
    display():void;
}

class WeatherData implements Subject {

    private observers:Array<Observer>;
    private temperature:number;
    private humidity:number;
    private pressure:number;

    constructor() {
        this.observers = new Array<Observer>();
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        const indexOfObserver:number = this.observers.indexOf(o);
        if ( indexOfObserver > -1) {
            this.observers.splice(indexOfObserver, 1);
        }
    }

    notifyObserver(): void {
        for(let i in this.observers){
            const observer:Observer = this.observers[i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged(): void {
        this.notifyObserver();
    }

    setMeasurements(temperature:number, humidity:number, pressure:number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}


class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temparature:number;
    private humidity:number;
    private weatherData:Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    display(): void {
        console.log("Current conditions:" + this.temparature + "F degrees and " + this.humidity + "% humidity");
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temparature = temp;
        this.humidity = humidity;
        this.display();
    }
}


class StatisticsDisplay implements Observer, DisplayElement {
    
    private temparature:number;
    private humidity:number;
    private pressure:number;
    private weatherData:Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    display(): void {
        console.log("Statistics: " + this.temparature + "F degrees and " + this.humidity + "% humidity " + this.pressure + "kPa");
    }
    update(temp: number, humidity: number, pressure: number): void {
        this.temparature = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
}


const weatherData:WeatherData = new WeatherData();
const currentConditionDisplay:CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay:StatisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 34.6);
weatherData.setMeasurements(40, 23, 97.6);
weatherData.setMeasurements(50, 93, 45.8);