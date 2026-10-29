import type { ParkingSpot } from "../models/parking-spot.model.js";

export const getFreeMotorCycleSpot = (
  parkingSpotArray: ParkingSpot[]
): ParkingSpot | undefined => {
  return parkingSpotArray.find(
    (spot) =>
      ["motorcycle spot", "compact spot", "large spot"].includes(
        spot.getSpotType()
      ) && !spot.getIsOccupied()
  );
};
export const getFreeCarSpot = (
  parkingSpotArray: ParkingSpot[],
): ParkingSpot | undefined => {
  return parkingSpotArray.find(
    (spot) =>
      ["compact spot", "large spot"].includes(spot.getSpotType()) &&
      !spot.getIsOccupied(),
  );
};

export const getFreeTruckSpot = (
  parkingSpotArray: ParkingSpot[],
): ParkingSpot | undefined => {
  return parkingSpotArray.find(
    (spot) => spot.getSpotType() === "large spot" && !spot.getIsOccupied(),
  );
};