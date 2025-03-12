import { render, screen } from "@testing-library/react";
import Login from "@/pages/login";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { store } from "@/store/store";


jest.mock("next-intl", () => ({
    useTranslations: () => (key: string) => key, 
  }));

jest.mock("axios");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Login Component", () => {
  let mockPush: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it("renders login form", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByRole("textbox", { name: /username/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /password/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
