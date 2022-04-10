import { TADA } from "./tada.action";

const initialState = {
  ecec: {
    blabla: {
      increaseThree: 0,
      sosad: { e: 5 },
    }
  },
  hihi: {
    ola: [{ a: 1, b: 2 }],
    soso: 0,
    blaqq: { c: 5, d: -1 }
  }
}

const tadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case TADA.INCREASE_THREE: {
      const oldCount = state.ecec.blabla.increaseThree;
      const newState = JSON.parse(JSON.stringify(state));
      newState.ecec.blabla.increaseThree = oldCount + 1;
      return newState;
      return {
        ...state,
        ecec: {
          ...state.ecec,
          blabla: {
            ...state.ecec.blabla,
            increaseThree: oldCount + 1,
          }
        }
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default tadaReducer;