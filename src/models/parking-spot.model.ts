import type { SpotType } from "../constants/enum.js";
import type { Vehicle } from "./vehicle.model.js";

export class ParkingSpot {
    private spotId: number;
    private spotType: SpotType;
    private parkingVehicleDetails: Vehicle | null;
    private isOccupied: boolean = false;
    constructor(spotId: number,spotType: SpotType){
        this.spotId = spotId;
        this.spotType = spotType;
        this.parkingVehicleDetails = null;
    }
    getParkingVehicleDetails(): Vehicle | null{
        return this.parkingVehicleDetails;
    }
    storeParkingSpotVehicleDetail(vehicle: Vehicle){
        if ((vehicle.getVehicleType() == "car") && (this.spotType != "compact spot" && this.spotType != "large spot" )) {
            throw new Error("This is motorcycle spot not car spot");
        }
        if ((vehicle.getVehicleType() == "truck") && (this.spotType != "large spot")) {
            throw new Error("This is not Truck spot");
            
        }
        this.parkingVehicleDetails = vehicle;
        this.updateParkingSpotOccupied();
    }
    updateParkingSpotOccupied(){
        if(!this.isOccupied){
            this.isOccupied = true;
        }
    }
}