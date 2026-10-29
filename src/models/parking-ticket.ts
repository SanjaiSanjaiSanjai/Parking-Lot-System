import type { ParkingSpot } from "./parking-spot.model.js";
import type { Vehicle } from "./vehicle.model.js";

export class ParkingTicket {
    private ticketId: number;
    private vehicle!: Vehicle;
    private spot!: ParkingSpot;
    private entryTime: Date;
    private exitTime?: Date;

    constructor(ticketId: number){
        this.ticketId = ticketId;
        this.entryTime = new Date();
    }
    storeVechileDetailsTicket(vehicle:Vehicle):void{
        this.vehicle = vehicle;
    }
    storeVehicleSpotTicket(spot: ParkingSpot):void{
        this.spot = spot;
    }
    getTicketVehicleDetails():Vehicle{
        return this.vehicle;
    }
    getTicketId():number{
        return this.ticketId;
    }
    getTicketVehicleSpotDetail():ParkingSpot{
        return this.spot;
    }
    getExitTime():Date | undefined{
        return this.exitTime;
    }
    vehicleExitTime(){
        this.exitTime = new Date();
    }
}