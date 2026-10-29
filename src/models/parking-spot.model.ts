import type { SpotType } from "../constants/enum.js";
import type { Vehicle } from "./vehicle.model.js";

export class ParkingSpot {
    private spotId: number;
    private spotType: SpotType;
    private parkingVehicleDetails: Vehicle|null = null;
    private allParkedVehicleDetails: Vehicle[] = [];
    private isOccupied: boolean = false;

    constructor(spotId: number,spotType: SpotType){
        this.spotId = spotId;
        this.spotType = spotType;
    }
    getParkingVehicleDetails(): Vehicle | null{
        return this.parkingVehicleDetails;
    }
    storeParkingSpotVehicleDetail(vehicle: Vehicle){
        if (this.getIsOccupied()) {
            throw new Error("This spot is already occupied");
        }
        if ((vehicle.getVehicleType() == "car") && (this.spotType != "compact spot" && this.spotType != "large spot" )) {
            throw new Error("This is motorcycle spot not car spot");
        }
        if ((vehicle.getVehicleType() == "truck") && (this.spotType != "large spot")) {
            throw new Error("This is not Truck spot");
        }
        this.parkingVehicleDetails = vehicle;
        this.updateParkingSpotOccupied();
        this.insertAllVechicleDetails(vehicle);
    }

    releaseVehicle(){
        this.parkingVehicleDetails = null;
        this.isOccupied = false;
    }
    updateParkingSpotOccupied(){
        if(!this.isOccupied){
            this.isOccupied = true;
        }
    }

    insertAllVechicleDetails(vehicle: Vehicle){
        this.allParkedVehicleDetails.push(vehicle);
    }

    getAllParkedVehicleDetails(): Vehicle[]{
        return this.allParkedVehicleDetails;
    }
    getSpotType(): SpotType{
        return this.spotType;
    }

    getIsOccupied(): boolean{
        return this.isOccupied;
    }

    getSpotId():number{
        return this.spotId;
    }
}