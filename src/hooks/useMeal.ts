import { useContext } from "react";
import { MealContext } from "@context/MealContext";

export const useMeal = () => useContext(MealContext);