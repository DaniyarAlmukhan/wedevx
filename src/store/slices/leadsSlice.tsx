import { defaultState } from "@/constants/table.constants";
import { ILead, ILeadState } from "@/interfaces/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: ILeadState = {
  leads: defaultState,
}

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead: (state, action: PayloadAction<ILead>) => {
      state.leads.push(action.payload);
    },
    updateLead: (state, action: PayloadAction<ILead>) => {
      state.leads = state.leads.map(lead =>
        lead.id === action.payload.id ? action.payload : lead
      );
    }
  },
});

export const { addLead, updateLead } = leadsSlice.actions;
export default leadsSlice.reducer;

