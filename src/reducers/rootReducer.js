const initialState = {
  palette: []
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD':
      return { palette: [...state.palette.slice(0, action.id), action.payload] }
    case 'CHANGE':
      const palette = [...state.palette];
      palette.splice(action.id - 1, 1, action.payload);
      return {palette: palette};
    case 'DELETE':
      return {palette: [...state.palette.slice(0, action.id), ...state.palette.slice(action.id + 1)]}
    default: 
        return state
  }
}