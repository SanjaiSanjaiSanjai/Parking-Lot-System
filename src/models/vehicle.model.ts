import type { VehicleType } from "../constants/enum.js";

export class Vehicle {
    private licensePlate: string;
    private vechicleType: VehicleType;
    constructor(licensePlate:string,vechicleType: VehicleType){
        this.licensePlate = licensePlate;
        this.vechicleType = vechicleType;
    }
    getVehicleLicensePlate(): string {
        return this.licensePlate;
    }
    getVehicleType(): VehicleType{
        return this.vechicleType;
    }
} 