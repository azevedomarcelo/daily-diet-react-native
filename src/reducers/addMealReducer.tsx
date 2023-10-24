import { TMealProps } from "@typings/types";

type State = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isHealthy: boolean;
}

type Action =
  | { type: 'addTask'; meal: TMealProps }
  | { type: 'nameChange'; value: string }
  | { type: 'descriptionChange'; value: string }
  | { type: 'dateChange'; value: string }
  | { type: 'timeChange'; value: string }
  | { type: 'isHealthyChange'; value: boolean };

export function mealReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addTask':
      const idMeal = (Math.floor(Math.random() * 16)).toString(16);

      const newMeal: TMealProps = {
        id: idMeal,
        name: action.meal.name,
        description: action.meal.description,
        date: action.meal.date,
        time: action.meal.time,
        isHealthy: action.meal.isHealthy,
      };

      return newMeal;

    case 'nameChange':
      return { ...state, name: action.value };

    case 'descriptionChange':
      return { ...state, description: action.value };

    case 'dateChange':
      return { ...state, date: action.value };

    case 'timeChange':
      return { ...state, time: action.value };

    case 'isHealthyChange':
      return { ...state, isHealthy: action.value };

    default:
      return state;
  }
}