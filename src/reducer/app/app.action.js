export const APP = {
  INCREASE: 'APP_INCREASE',
  INCREASE_TWO: 'APP_INCREASE_TWO',
}

export const increaseAction = () => {
  return {
    type: APP.INCREASE,
  }
}

export const increaseTwoAction = () => {
  return {
    type: APP.INCREASE_TWO,
  }
}