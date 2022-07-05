import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './Reducer/slice'

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
})

export default store
