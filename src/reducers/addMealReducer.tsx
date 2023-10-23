type State = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isHealthy: boolean;
}

type Action =
  | { type: 'addTask'; meal: AddMealProps }
  | { type: 'nameChange'; value: string }
  | { type: 'descriptionChange'; value: string }
  | { type: 'dateChange'; value: string }
  | { type: 'hourChange'; value: string }
  | { type: 'isHealthyChange'; value: boolean };

type AddMealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isHealthy: boolean;
}

export function mealReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addTask':
      const idMeal = (Math.floor(Math.random() * 16)).toString(16);

      const newMeal: AddMealProps = {
        id: idMeal,
        name: action.meal.name,
        description: action.meal.description,
        date: action.meal.date,
        hour: action.meal.hour,
        isHealthy: action.meal.isHealthy,
      };
      console.log('newMeal', newMeal);
      return newMeal;

    case 'nameChange':
      return { ...state, name: action.value };

    case 'descriptionChange':
      return { ...state, description: action.value };

    case 'dateChange':
      return { ...state, date: action.value };

    case 'hourChange':
      return { ...state, hour: action.value };

    case 'isHealthyChange':
      return { ...state, isHealthy: action.value };

    default:
      return state;
  }
}