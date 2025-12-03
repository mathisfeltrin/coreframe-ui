import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";

const mockOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

describe("Select", () => {
  it("renders correctly with options", () => {
    render(<Select options={mockOptions} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(<Select options={mockOptions} />);
    expect(screen.getByRole("option", { name: "Option 1" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Option 2" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Option 3" })).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Select label="Country" options={mockOptions} />);
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<Select placeholder="Select an option" options={mockOptions} />);
    expect(screen.getByRole("option", { name: "Select an option" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Select an option" })).toHaveAttribute("disabled");
  });

  it("renders with helper text", () => {
    render(<Select helperText="Choose your country" options={mockOptions} />);
    expect(screen.getByText("Choose your country")).toBeInTheDocument();
  });

  it("renders with error message", () => {
    render(<Select error="This field is required" options={mockOptions} />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("prioritizes error over helper text", () => {
    render(
      <Select
        error="Error message"
        helperText="Helper text"
        options={mockOptions}
      />
    );
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies small size styles", () => {
    render(<Select size="sm" options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("px-3");
    expect(select).toHaveClass("py-1.5");
    expect(select).toHaveClass("text-sm");
  });

  it("applies medium size styles by default", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("px-4");
    expect(select).toHaveClass("py-2");
    expect(select).toHaveClass("text-base");
  });

  it("applies large size styles", () => {
    render(<Select size="lg" options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("px-5");
    expect(select).toHaveClass("py-3");
    expect(select).toHaveClass("text-lg");
  });

  it("renders as disabled", () => {
    render(<Select disabled options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
    expect(select).toHaveClass("opacity-50");
    expect(select).toHaveClass("cursor-not-allowed");
  });

  it("allows selecting an option", async () => {
    const user = userEvent.setup();
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "2");
    expect(select).toHaveValue("2");
  });

  it("renders disabled options", () => {
    const optionsWithDisabled = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2", disabled: true },
      { value: "3", label: "Option 3" },
    ];

    render(<Select options={optionsWithDisabled} />);
    const option2 = screen.getByRole("option", { name: "Option 2" });
    expect(option2).toHaveAttribute("disabled");
  });

  it("applies error styles when error is present", () => {
    render(<Select error="Error" options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("border-error-500");
    expect(select).toHaveAttribute("aria-invalid", "true");
  });

  it("has proper ARIA attributes", () => {
    render(
      <Select
        label="Country"
        error="Required field"
        helperText="Select your country"
        options={mockOptions}
      />
    );
    const select = screen.getByLabelText("Country");
    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select).toHaveAttribute("aria-describedby");
  });

  it("applies custom className", () => {
    render(<Select className="custom-class" options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("custom-class");
  });

  it("forwards native select props", () => {
    render(<Select required name="country" options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeRequired();
    expect(select).toHaveAttribute("name", "country");
  });

  it("renders chevron icon", () => {
    const { container } = render(<Select options={mockOptions} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
