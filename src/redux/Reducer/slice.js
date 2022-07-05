import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  employees: [],
}

const employeeReducer = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    pushEmployee: (draft, action) => {
      draft.employees.push(action.payload)
      return
    },
  },
})

const { actions, reducer } = employeeReducer

export const { pushEmployee } = actions

export default reducer
