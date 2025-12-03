import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("renders with helper text", () => {
    render(<Input helperText="This is a helper text" />);
    expect(screen.getByText("This is a helper text")).toBeInTheDocument();
  });

  it("renders with error message", () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("prioritizes error over helper text", () => {
    render(
      <Input error="Error message" helperText="Helper text" />
    );
    expect(screen.getByText("Error message")).toBeInTheDocument();
    expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
  });

  it("applies outline variant by default", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-neutral-300");
  });

  it("applies filled variant when specified", () => {
    render(<Input variant="filled" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-neutral-100");
  });

  it("applies small size styles", () => {
    render(<Input size="sm" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("px-3");
    expect(input).toHaveClass("py-1.5");
    expect(input).toHaveClass("text-sm");
  });

  it("applies medium size styles by default", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("px-4");
    expect(input).toHaveClass("py-2");
    expect(input).toHaveClass("text-base");
  });

  it("applies large size styles", () => {
    render(<Input size="lg" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("px-5");
    expect(input).toHaveClass("py-3");
    expect(input).toHaveClass("text-lg");
  });

  it("renders as disabled", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("opacity-50");
    expect(input).toHaveClass("cursor-not-allowed");
  });

  it("accepts user input", async () => {
    const user = userEvent.setup();
    render(<Input />);
    const input = screen.getByRole("textbox");

    await user.type(input, "Hello World");
    expect(input).toHaveValue("Hello World");
  });

  it("supports different input types", () => {
    const { rerender } = render(<Input type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(<Input type="password" />);
    expect(screen.getByDisplayValue("")).toHaveAttribute("type", "password");

    rerender(<Input type="number" />);
    expect(screen.getByRole("spinbutton")).toHaveAttribute("type", "number");
  });

  it("renders with left icon", () => {
    render(<Input leftIcon={<span data-testid="left-icon">🔍</span>} />);
    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    render(<Input rightIcon={<span data-testid="right-icon">✓</span>} />);
    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("applies error styles when error is present", () => {
    render(<Input error="Error" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-error-500");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("has proper ARIA attributes", () => {
    render(
      <Input
        label="Email"
        error="Invalid email"
        helperText="Enter your email"
      />
    );
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("forwards native input props", () => {
    render(<Input placeholder="Test" maxLength={10} required />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Test");
    expect(input).toHaveAttribute("maxLength", "10");
    expect(input).toBeRequired();
  });

  describe("Password Toggle", () => {
    it("does not show toggle button by default for password input", () => {
      render(<Input type="password" />);
      expect(screen.queryByLabelText(/show password/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/hide password/i)).not.toBeInTheDocument();
    });

    it("shows toggle button when showPasswordToggle is true", () => {
      render(<Input type="password" showPasswordToggle />);
      expect(screen.getByLabelText("Show password")).toBeInTheDocument();
    });

    it("does not show toggle for non-password inputs", () => {
      render(<Input type="text" showPasswordToggle />);
      expect(screen.queryByLabelText(/show password/i)).not.toBeInTheDocument();
    });

    it("toggles password visibility when button is clicked", async () => {
      const user = userEvent.setup();
      render(<Input type="password" showPasswordToggle placeholder="Password" />);

      const input = screen.getByPlaceholderText("Password");
      const toggleButton = screen.getByLabelText("Show password");

      // Initially password type
      expect(input).toHaveAttribute("type", "password");

      // Click to show password
      await user.click(toggleButton);
      expect(input).toHaveAttribute("type", "text");
      expect(screen.getByLabelText("Hide password")).toBeInTheDocument();

      // Click to hide password again
      await user.click(screen.getByLabelText("Hide password"));
      expect(input).toHaveAttribute("type", "password");
      expect(screen.getByLabelText("Show password")).toBeInTheDocument();
    });

    it("maintains input value when toggling visibility", async () => {
      const user = userEvent.setup();
      render(<Input type="password" showPasswordToggle />);

      const input = screen.getByRole("textbox") as HTMLInputElement;
      const toggleButton = screen.getByLabelText("Show password");

      // Type password
      await user.type(input, "secret123");
      expect(input.value).toBe("secret123");

      // Toggle visibility
      await user.click(toggleButton);
      expect(input.value).toBe("secret123");

      // Toggle back
      await user.click(screen.getByLabelText("Hide password"));
      expect(input.value).toBe("secret123");
    });

    it("prioritizes password toggle over right icon", () => {
      render(
        <Input
          type="password"
          showPasswordToggle
          rightIcon={<span data-testid="right-icon">✓</span>}
        />
      );

      expect(screen.getByLabelText("Show password")).toBeInTheDocument();
      expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
    });

    it("adds proper padding when toggle is present", () => {
      render(<Input type="password" showPasswordToggle />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveClass("pr-10");
    });
  });
});
