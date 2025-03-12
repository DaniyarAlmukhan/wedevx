import authReducer, { login, logout } from "@/store/slices/authSlice";
import { IAuthState, IUser } from "@/interfaces/types";

describe("authSlice", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("should return initial state", () => {
        const initialState: IAuthState = {
            isAuthenticated: false,
            user: null,
        };
        expect(authReducer(undefined, { type: "" })).toEqual(initialState);
    });

    it("should handle login", () => {
        const user: IUser = { name: "testuser" };

        const newState = authReducer(undefined, login(user));

        expect(newState.isAuthenticated).toBe(true);
        expect(newState.user).toEqual(user);
        expect(localStorage.getItem("user")).toEqual(JSON.stringify(user));
    });

    it("should handle logout", () => {
        const user: IUser = { name: "testuser" };
        localStorage.setItem("user", JSON.stringify(user));

        const prevState: IAuthState = {
            isAuthenticated: true,
            user,
        };

        const newState = authReducer(prevState, logout());

        expect(newState.isAuthenticated).toBe(false);
        expect(newState.user).toBeNull();
        expect(localStorage.getItem("user")).toBeNull();
    });
});
