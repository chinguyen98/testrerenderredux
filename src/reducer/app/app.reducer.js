import { APP } from "./app.action";

const initialState = {
  count: 0,
  countTwo: 0
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.INCREASE: {
      const oldCount = state.count;
      return {
        ...state,
        count: oldCount + 1
      }
    }
    case APP.INCREASE_TWO: {
      const oldCount = state.countTwo;
      return {
        ...state,
        countTwo: oldCount + 1
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default appReducer;