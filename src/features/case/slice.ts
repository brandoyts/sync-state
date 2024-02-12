import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface CaseState {
  title: string;
  description: string;
}

const initialState: CaseState = {
  title: "",
  description: "",
};

export const caseSlice = createSlice({
  name: "case",
  initialState,
  reducers: {
    onSubmitCase: (state) => {
      const submittedCase: CaseState = {
        title: state.title,
        description: state.description,
      };
      console.log("case submitted: ", submittedCase);
    },

    onChangeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    onChangeDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },

    onReset: (state) => {
      state.title = "";
      state.description = "";
    },
  },
});

export const { onSubmitCase, onChangeTitle, onChangeDescription, onReset } =
  caseSlice.actions;
export const caseState = (state: RootState) => state.case.description;
export default caseSlice.reducer;
