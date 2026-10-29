import { Floor } from "./floor.model.js";
import { ParkingService } from "./parking-service.js";
import type { ParkingSpot } from "./parking-spot.model.js";
import type { ParkingTicket } from "./parking-ticket.js";
import type { Vehicle } from "./vehicle.model.js";

export class ParkingLot {
  private floors: Floor[] = [];
  private parkingService: ParkingService[] = [];

  createFloor(floorId: number, totalFloorParkingSpot: number): Floor {
    const newFloor = new Floor(floorId, totalFloorParkingSpot);
    this.floors.push(newFloor);
    return newFloor;
  }

  createParkingService(
    parkingServiceId: number,
    floorId: number,
  ): ParkingService {
    const newParkingService = new ParkingService(parkingServiceId, floorId);
    this.parkingService.push(newParkingService);
    return newParkingService;
  }

  parkVehicle(vehicle: Vehicle, floorId: number): ParkingSpot {
    const floor = this.floors.find((floor) => floor.getFloorId() === floorId);

    if (!floor) {
      throw new Error(`Floor ${floorId} does not exist`);
    }

    const parkingServiceFloor = this.parkingService.find(
      (service) => service.getAlloctaeFloorId() === floorId,
    );

    if (!parkingServiceFloor) {
      throw new Error(`No parking service found for floor ${floorId}`);
    }

    const [spot] = parkingServiceFloor.findSuitableSpot(vehicle, floor);

    if (!spot) {
      throw new Error("No available spot for this vehicle");
    }

    parkingServiceFloor.assignSpot(spot, vehicle);

    return spot;
  }

  unParkVehicle(
  spot: ParkingSpot,
  ticket: ParkingTicket,
  floorId: number,
): void {
  const parkingServiceFloor = this.parkingService.find(
    (service) => service.getAlloctaeFloorId() === floorId,
  );

  if (!parkingServiceFloor) {
    throw new Error(`No parking service found for floor ${floorId}`);
  }

  if (!spot.getIsOccupied()) {
    throw new Error("This parking spot is already empty");
  }

  parkingServiceFloor.releaseVehicleSpot(spot, ticket);
}

getAvailabilitySpots(): ParkingSpot[] {
  return this.floors.flatMap((floor) => floor.getAllAvailableSpot());
}
}
