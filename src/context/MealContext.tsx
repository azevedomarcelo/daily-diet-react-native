import { ReactNode, createContext, useState } from "react";

type MealContextProps = {
  children: ReactNode;
}

type Props = {

}

export const MealContext = createContext({} as Props);

export function MealContextProvider({ children }: MealContextProps) {

  return (
    <MealContext.Provider value={{

    }}>
      {children}
    </MealContext.Provider>
  )
}