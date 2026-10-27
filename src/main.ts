import { SpotType, VehicleType } from "./constants/enum.js";
import { ParkingSpot } from "./models/parking-spot.model.js";
import { Vehicle } from "./models/vehicle.model.js";

const bike = new Vehicle("TN49 2988",VehicleType.MOTORCYCLE);
const spot1 = new ParkingSpot(1,SpotType.MOTORCYCLES_POT)
const spot2 = new ParkingSpot(2,SpotType.COMPACT_SPOT)
const spot3 = new ParkingSpot(3,SpotType.LARGE_SPOT)
const spot4 = new ParkingSpot(4,SpotType.MOTORCYCLES_POT)
spot1.storeParkingSpotVehicleDetail(bike);

console.log(bike);
console.log(spot1);
console.log(spot2);
console.log(spot3);
console.log(spot4);