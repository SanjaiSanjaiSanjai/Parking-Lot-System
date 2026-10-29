import type { SpotType, VehicleType } from "../constants/enum.js";
import { getFreeCarSpot, getFreeMotorCycleSpot, getFreeTruckSpot } from "../constants/utils.js";
import { ParkingSpot } from "./parking-spot.model.js";
import type { Vehicle } from "./vehicle.model.js";

export class Floor {
    private levelId: number;
    private parkingSpot: ParkingSpot[] = [];
    private totalParkingSpotFloor: number;

    constructor(levelId: number,totalParkingSpot: number){
        this.levelId = levelId;
        this.totalParkingSpotFloor = totalParkingSpot;
    }

    getFloorId():number{
        return this.levelId;
    }

    getTotalCountParkingSpotFloor(): number{
        return this.totalParkingSpotFloor;
    }

    getAllParkingSpotDetails(): ParkingSpot[]{
        return this.parkingSpot;
    }

    findAvailableSpot(vehicle: Vehicle): ParkingSpot[]{
        const vechileType: VehicleType = vehicle.getVehicleType(); 
        let freeParkingSpot: ParkingSpot[];
        switch (vechileType) {
            case "motorcycle":
                const motorcycleSpot = getFreeMotorCycleSpot(this.parkingSpot);
                freeParkingSpot = motorcycleSpot ? [motorcycleSpot] : [];
                break;
            case "car":
                const carSpot = getFreeCarSpot(this.parkingSpot);
                freeParkingSpot = carSpot ? [carSpot] : [];
                break;
            case "truck":
                const truckSpot = getFreeTruckSpot(this.parkingSpot);
                freeParkingSpot = truckSpot ? [truckSpot] : [];
                break;
            default:
                freeParkingSpot = []
                break;
        }
        return freeParkingSpot;
    }

    getAvailableSpotCount():number{
        let count: number = 0;
        const length_parkingSpot = this.parkingSpot.length;
        for(let i = 0;i < length_parkingSpot;i++){
            if (!this.parkingSpot[i]?.getIsOccupied()) {
                count += 1
            }
        }
        return count
    }

    createParkingSpot(parkingId:number,parkingType: SpotType): ParkingSpot{
        if (this.totalParkingSpotFloor < parkingId) {
            throw new Error("Don't create floor more than total parking spot");
        }
        const spot = new ParkingSpot(parkingId,parkingType);
        this.parkingSpot.push(spot);
        return spot;
    }

    getAllAvailableSpot(): ParkingSpot[]{
        const allAvailableSpots = this.parkingSpot.filter((spot) => !spot.getIsOccupied());
        return allAvailableSpots;
    }
}
