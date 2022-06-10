import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface IUsers {
  id: string
  name: string
}

const initialState: IUsers[] = [
  { id: '0', name: 'Edson Ottoni' },
  { id: '1', name: 'Lorenzo' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state: RootState) => state.users

export default usersSlice.reducer
