var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Vehicle = (function () {
    function Vehicle(distance, duration, destination) {
        this.destination = destination;
        this.speed = distance / duration;
        this.wheels = 4;
    }
    Vehicle.prototype.honk = function () {
        return "At " + this.destination + ", the average speed was " + this.speed + " km/h";
    };
    Vehicle.prototype.hello = function () {
        return "Hello! I'm a " + this.wheels + "-wheeler vehicle!";
    };
    return Vehicle;
})();
var car = new Vehicle(300, 5, "Brussels");
console.log(car.honk());
console.log(car.hello());
var Bicycle = (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(distance, duration, destination) {
        _super.call(this, distance, duration, destination);
        this.destination = destination;
        this.speed = distance / duration;
        this.wheels = 2;
    }
    Bicycle.prototype.hello = function () {
        return "Hello! I'm a " + this.wheels + "-wheeler vehicle!";
    };
    return Bicycle;
})(Vehicle);
var cycle = new Bicycle(100, 2, "Brussels");
console.log(cycle.honk());
console.log(cycle.hello());
