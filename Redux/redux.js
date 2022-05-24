import axios from "axios";

// action type
const UPDATE_CAMPUS_INFO = "UPDATE_CAMPUS_INFO";

//action creator
export const updateCampusInfo = (id, input) => {
  return {
    type: UPDATE_CAMPUS_INFO,
    id,
    input,
  };

  // or using payload
  /* 
   return {
      type: UPDATE_CAMPUS_INFO,
      payload: {
        id, 
        input,
      }
    };
  */
};

//thunk
export const fetchUpdatedCampus = (id, input) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/campuses/${id}`, { updatedFields: { input } });
      dispatch(updateCampusInfo(id, input));
    } catch (error) {
      console.log(error);
    }
  };
};


//initial state
const initialState = {
  info: {
    students: [],
  },
};

//reducer
export const singleCampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAMPUS_INFO:
      if (info.id === action.id) {
        return { ...state, info: action.input };
      }
    default:
      return state;
  }
};
