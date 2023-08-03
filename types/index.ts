import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  title: string;
};

export type AutoCompleteInputProps = {
  value: string;
  onChange: (value: string) => void;
};

type Car = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CarCardProps = {
  car: Car;
};
