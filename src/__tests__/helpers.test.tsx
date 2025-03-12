import { formatDate } from "@/helpers/utils";

describe("formatDate", () => {
  it("formats a date correctly", () => {
    expect(formatDate("2024-03-12T14:30:00Z")).toBe("12/03/2024 14:30");
  });

  it("formats a date without time correctly", () => {
    expect(formatDate("2024-03-12")).toBe("12/03/2024 05:00");
  });

  it("handles different time zones", () => {
    const date = new Date("2024-03-12T14:30:00Z");
    const localDate = date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).replace(",", "");

    expect(formatDate("2024-03-12T14:30:00Z")).toBe(localDate);
  });

  it("returns 'Invalid Date'", () => {
    expect(formatDate("invalid-date")).toBe("Invalid Date");
  });

  it("handles empty string", () => {
    expect(formatDate("")).toBe("Invalid Date");
  });
});
