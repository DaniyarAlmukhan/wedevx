import { ILead, ILeadState } from "@/interfaces/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultState: ILead[] = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    status: "PENDING",
    submitted: "2022-01-01",
    email: "john.doe@gmail.com",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Doe",
    status: "REACHED_OUT",
    submitted: "2022-01-02",
    email: "jane.doe@gmail.com"
  },
  {
    id: 3,
    name: "Alice",
    surname: "Smith",
    status: "PENDING",
    submitted: "2022-01-03",
    email: "alice.smith@gmail.com"
  },
  {
    id: 4,
    name: "Bob",
    surname: "Smith",
    status: "PENDING",
    submitted: "2022-01-04",
     email: "bob.smith@gmail.com"
  },
  {
    id: 5,
    name: "Charlie",
    surname: "Brown",
    status: "REACHED_OUT",
    submitted: "2022-01-05",
    email: "charlie.brown@gmail.com"
  },
  {
    id: 6,
    name: "David",
    surname: "Johnson",
    status: "PENDING",
    submitted: "2022-01-06",
    email: "david.johnson@gmail.com"
  },
  {
    id: 7,
    name: "Emma",
    surname: "Williams",
    status: "REACHED_OUT",
    submitted: "2022-01-07",
    email: "emma.williams@gmail.com"
  },
  {
    id: 8,
    name: "Olivia",
    surname: "Brown",
    status: "PENDING",
    submitted: "2022-01-08",
    email: "olivia.brown@gmail.com"
  },
  {
    id: 9,
    name: "Liam",
    surname: "Jones",
    status: "PENDING",
    submitted: "2022-01-09",
    email: "liam.jones@gmail.com"
  },
  {
    id: 10,
    name: "Sophia",
    surname: "Garcia",
    status: "REACHED_OUT",
    submitted: "2022-01-10",
    email: "sophia.garcia@gmail.com"
  },
  {
    id: 11,
    name: "Mason",
    surname: "Martinez",
    status: "PENDING",
    submitted: "2022-01-11",
    email: "mason.martinez@gmail.com"
  },
  {
    id: 12,
    name: "Isabella",
    surname: "Rodriguez",
    status: "REACHED_OUT",
    submitted: "2022-01-12",
    email: "isabella.rodriguez@gmail.com"
  },
  {
    id: 13,
    name: "James",
    surname: "Hernandez",
    status: "PENDING",
    submitted: "2022-01-13",
    email: "james.hernandez@gmail.com"
  },
  {
    id: 14,
    name: "Mia",
    surname: "Lopez",
    status: "PENDING",
    submitted: "2022-01-14",
    email: "mia.lopez@gmail.com"
  },
  {
    id: 15,
    name: "Benjamin",
    surname: "Gonzalez",
    status: "REACHED_OUT",
    submitted: "2022-01-15",
    email: "benjamin.gonzalez@gmail.com"
  }
]

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
      const index = state.leads.findIndex((lead) => lead.id === action.payload.id);
      state.leads[index] = action.payload;
    },
   
  },
});

export const { addLead, updateLead } = leadsSlice.actions;
export default leadsSlice.reducer;

