// Actions
export const CHANGE_NAME = 'CHANGE_NAME'

// Action Creators
export const handleChangeName = (name) => ({
  type: CHANGE_NAME,
  name,
})