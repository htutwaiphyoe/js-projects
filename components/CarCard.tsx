import { CarCardProps } from "@/types";

function CarCard({ car }: CarCardProps) {
  return <div>{car.city_mpg}</div>;
}

export default CarCard;
