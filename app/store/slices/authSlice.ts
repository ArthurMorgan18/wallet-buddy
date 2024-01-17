import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginInputs, signUpInputs } from '@/app/common/mock/auth';

export interface IAuthState {
  option: 'login' | 'signUp' | null;
  inputs: Array<{}>;
}

const initialState: IAuthState = {
  option: null,
  inputs: [],
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    dispatchAuthChoice: (state, action: PayloadAction<'login' | 'signUp'>) => {
      state.option = action.payload;
      state.inputs = state.option === 'login' ? loginInputs : signUpInputs;
    },
  },
});
export const { dispatchAuthChoice } = authSlice.actions;
export default authSlice.reducer;
