export const TADA = {
  INCREASE_THREE: 'TADA_INCREASE_THREE',
  TEST_OLA: 'TADA_TEST_OLA',
}

export const increaseThreeAction = () => {
  return {
    type: TADA.INCREASE_THREE,
  }
}

export const testOlaAction = () => {
  return {
    type: TADA.TEST_OLA,
  }
}