import type { Floor } from "./floor.model.js";
import type { ParkingSpot } from "./parking-spot.model.js";
import type { ParkingTicket } from "./parking-ticket.js";
import type { Vehicle } from "./vehicle.model.js";

export class ParkingService {
    private parkingServiceId: number;
    private allocateFloorId: number;

    constructor(parkingServiceId:number,floorId:number){
        this.parkingServiceId = parkingServiceId;
        this.allocateFloorId = floorId;
    }

    findSuitableSpot(vehicle: Vehicle,floor: Floor): ParkingSpot[]{
        const availableSpot = floor.findAvailableSpot(vehicle);
        return availableSpot;
    }

    assignSpot(spot: ParkingSpot,vehicle:Vehicle){
        spot.storeParkingSpotVehicleDetail(vehicle)
    }

    releaseVehicleSpot(spot: ParkingSpot,ticket: ParkingTicket){
        spot.releaseVehicle();
        ticket.vehicleExitTime();
    }

    getParkingServiceId():number{
        return this.parkingServiceId;
    }

    getAlloctaeFloorId():number{
        return this.allocateFloorId;
    }
}