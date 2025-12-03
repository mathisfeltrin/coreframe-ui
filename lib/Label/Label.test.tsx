import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  it("renders children correctly", () => {
    render(<Label>Username</Label>);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders with required indicator", () => {
    render(<Label required>Email</Label>);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByLabelText("required")).toBeInTheDocument();
  });

  it("renders with optional indicator", () => {
    render(<Label optional>Phone</Label>);
    expect(screen.getByText("Phone")).toBeInTheDocument();
    expect(screen.getByText("(optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("optional")).toBeInTheDocument();
  });

  it("prioritizes required over optional", () => {
    render(
      <Label required optional>
        Field
      </Label>
    );
    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.queryByText("(optional)")).not.toBeInTheDocument();
  });

  it("applies small size styles", () => {
    render(<Label size="sm">Small Label</Label>);
    const label = screen.getByText("Small Label");
    expect(label).toHaveClass("text-xs");
  });

  it("applies medium size styles by default", () => {
    render(<Label>Medium Label</Label>);
    const label = screen.getByText("Medium Label");
    expect(label).toHaveClass("text-sm");
  });

  it("applies large size styles", () => {
    render(<Label size="lg">Large Label</Label>);
    const label = screen.getByText("Large Label");
    expect(label).toHaveClass("text-base");
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Label</Label>);
    const label = screen.getByText("Label");
    expect(label).toHaveClass("custom-class");
  });

  it("forwards native label props", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("has base styles applied", () => {
    render(<Label>Label</Label>);
    const label = screen.getByText("Label");
    expect(label).toHaveClass("block");
    expect(label).toHaveClass("font-medium");
    expect(label).toHaveClass("text-neutral-900");
  });
});
