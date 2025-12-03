import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders correctly", () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Textarea label="Description" />);
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });

  it("renders with helper text", () => {
    render(<Textarea helperText="Enter a detailed description" />);
    expect(screen.getByText("Enter a detailed description")).toBeInTheDocument();
  });

  it("renders with error message", () => {
    render(<Textarea error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("prioritizes error over helper text", () => {
    render(<Textarea error="Error message" helperText="Helper text" />);
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies vertical resize by default", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize-y");
  });

  it("applies none resize when specified", () => {
    render(<Textarea resize="none" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize-none");
  });

  it("applies horizontal resize when specified", () => {
    render(<Textarea resize="horizontal" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize-x");
  });

  it("applies both resize when specified", () => {
    render(<Textarea resize="both" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("resize");
  });

  it("renders as disabled", () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass("opacity-50");
    expect(textarea).toHaveClass("cursor-not-allowed");
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "Hello World");
    expect(textarea).toHaveValue("Hello World");
  });

  it("accepts multiline input", async () => {
    const user = userEvent.setup();
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");

    await user.type(textarea, "Line 1{Enter}Line 2{Enter}Line 3");
    expect(textarea).toHaveValue("Line 1\nLine 2\nLine 3");
  });

  it("applies error styles when error is present", () => {
    render(<Textarea error="Error" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("border-error-500");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  it("has proper ARIA attributes", () => {
    render(
      <Textarea
        label="Comments"
        error="Too short"
        helperText="Enter your comments"
      />
    );
    const textarea = screen.getByLabelText("Comments");
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(textarea).toHaveAttribute("aria-describedby");
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-class" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveClass("custom-class");
  });

  it("forwards native textarea props", () => {
    render(
      <Textarea
        placeholder="Test"
        rows={5}
        maxLength={100}
        required
      />
    );
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("placeholder", "Test");
    expect(textarea).toHaveAttribute("rows", "5");
    expect(textarea).toHaveAttribute("maxLength", "100");
    expect(textarea).toBeRequired();
  });
});
