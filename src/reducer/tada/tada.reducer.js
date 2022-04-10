import { TADA } from "./tada.action";

const initialState = {
  ecec: {
    increaseThree: 0,
  }
}

const tadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case TADA.INCREASE_THREE: {
      const oldCount = state.ecec.increaseThree
      return {
        ...state,
        ecec: {
          ...state.ecec,
          increaseThree: oldCount + 1,
        }
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default tadaReducer;