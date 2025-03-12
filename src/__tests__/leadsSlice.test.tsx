import leadsReducer, { addLead,  updateLead } from "@/store/slices/leadsSlice";
import { ILead, ILeadState } from "@/interfaces/types";
import { defaultState } from "@/constants/table.constants";

describe("leadsSlice", () => {
  const initialState: ILeadState = {
    leads: defaultState,
  }

  it("should return the initial state", () => {
    expect(leadsReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle addLead", () => {
    const newLead: ILead = {
      id: 2,
      name: "Alice",
      surname: "Smith",
      status: "REACHED_OUT",
      submitted: "2022-02-01",
      email: "alice.smith@gmail.com",
    };

    const newState = leadsReducer(initialState, addLead(newLead));

    expect(newState.leads.length).toBe(defaultState.length + 1);
    expect(newState.leads[defaultState.length]).toEqual(newLead);
  });

  it("should handle updateLead", () => {
    const updatedLead: ILead = {
      id: 1,
      name: "John Updated",
      surname: "Doe",
      status: "PENDING",
      submitted: "2022-01-01",
      email: "john.doe@gmail.com",
    };

    const newState = leadsReducer(initialState, updateLead(updatedLead));

    expect(newState.leads[0]).toEqual(updatedLead);
  });
});
