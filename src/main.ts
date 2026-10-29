import { SpotType, VehicleType } from "./constants/enum.js";
import { ParkingLot } from "./models/parking-lot.js";
import { ParkingTicket } from "./models/parking-ticket.js";
import { Vehicle } from "./models/vehicle.model.js";

const parkingLot = new ParkingLot();
const floor = parkingLot.createFloor(1, 4);
parkingLot.createParkingService(101, 1);

floor.createParkingSpot(1, SpotType.MOTORCYCLES_SPOT);
floor.createParkingSpot(2, SpotType.COMPACT_SPOT);
floor.createParkingSpot(3, SpotType.LARGE_SPOT);
floor.createParkingSpot(4, SpotType.LARGE_SPOT);

const car = new Vehicle("TN-01-AB-1234", VehicleType.CAR);
const truck = new Vehicle("TN-02-CD-5678", VehicleType.TRUCK);

const carSpot = parkingLot.parkVehicle(car, 1);
const truckSpot = parkingLot.parkVehicle(truck, 1);

const carTicket = new ParkingTicket(1);
carTicket.storeVechileDetailsTicket(car);
carTicket.storeVehicleSpotTicket(carSpot);

console.log("Car parked in spot:", carSpot.getSpotId());
console.log("Truck parked in spot:", truckSpot.getSpotId());
console.log(
  "Available spots:",
  parkingLot.getAvailabilitySpots().map((spot) => spot.getSpotId()),
);

parkingLot.unParkVehicle(carSpot, carTicket, 1);

console.log("Car exit time:", carTicket.getExitTime());
console.log(
  "Available spots after car exit:",
  parkingLot.getAvailabilitySpots().map((spot) => spot.getSpotId()),
);
