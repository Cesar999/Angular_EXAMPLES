const initialState = {
    framework: 'Angular',
    subscription: 'Intermediate',
    showDetails: false,
    showMessage: false
  };

export function reducer(state = initialState, action) {
  switch (action.type) {

    case 'TOGGLE_DETAILS':
      return{
        ...state,
        showDetails: action.payload
      };

      case 'TOGGLE_MESSAGE':
      return{
        ...state,
        showMessage: action.payload
      };

      case 'SELECTED_FRAMEWORK':
      return{
        ...state,
        framework: action.payload
      };


      case 'SELECTED_SUBSCRIPTION':
      return{
        ...state,
        subscription: action.payload
      };


    default:
      return state;
  }
}
