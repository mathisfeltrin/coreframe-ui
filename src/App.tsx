import { Button, Input, Label, Textarea, Select } from "coreframe-ui";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-semibold text-neutral-900">
            CoreFrameUI
          </h1>
          <p className="text-lg text-neutral-600">
            Modern React component library with Apple-inspired design
          </p>
        </header>

        {/* Button Component */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Button</h2>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Variants</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" onClick={() => alert("Primary clicked!")}>
                Primary Button
              </Button>
              <Button
                variant="secondary"
                onClick={() => alert("Secondary clicked!")}
              >
                Secondary Button
              </Button>
              <Button variant="outline" onClick={() => alert("Outline clicked!")}>
                Outline Button
              </Button>
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Sizes</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <Button size="sm">Small Button</Button>
              <Button size="md">Medium Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">States</h3>
            <div className="flex gap-4 flex-wrap">
              <Button>Normal Button</Button>
              <Button disabled>Disabled Button</Button>
            </div>
          </section>
        </div>

        {/* Input Component */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Input</h2>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Basic</h3>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Enter text..." />
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Variants</h3>
            <div className="space-y-4 max-w-md">
              <Input
                variant="outline"
                label="Outline (default)"
                placeholder="Outline input"
              />
              <Input
                variant="filled"
                label="Filled"
                placeholder="Filled input"
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Sizes</h3>
            <div className="space-y-4 max-w-md">
              <Input size="sm" placeholder="Small input" />
              <Input size="md" placeholder="Medium input (default)" />
              <Input size="lg" placeholder="Large input" />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">
              With Icons
            </h3>
            <div className="space-y-4 max-w-md">
              <Input
                label="Search"
                placeholder="Search..."
                leftIcon={<span>🔍</span>}
              />
              <Input
                label="Username"
                placeholder="Enter username"
                rightIcon={<span>✓</span>}
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">
              Helper Text & Errors
            </h3>
            <div className="space-y-4 max-w-md">
              <Input
                label="Username"
                placeholder="Choose a username"
                helperText="Must be 3-20 characters long"
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                error="This email is already taken"
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">States</h3>
            <div className="space-y-4 max-w-md">
              <Input label="Normal" placeholder="Normal input" />
              <Input
                label="Disabled"
                placeholder="Disabled input"
                disabled
              />
            </div>
          </section>
        </div>

        {/* Label Component */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Label</h2>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Basic</h3>
            <div className="space-y-4 max-w-md">
              <div>
                <Label htmlFor="example1">Basic Label</Label>
                <Input id="example1" placeholder="Input field" />
              </div>
              <div>
                <Label htmlFor="example2" required>
                  Required Label
                </Label>
                <Input id="example2" placeholder="Required field" />
              </div>
              <div>
                <Label htmlFor="example3" optional>
                  Optional Label
                </Label>
                <Input id="example3" placeholder="Optional field" />
              </div>
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Sizes</h3>
            <div className="space-y-4 max-w-md">
              <Label size="sm">Small Label</Label>
              <Label size="md">Medium Label (default)</Label>
              <Label size="lg">Large Label</Label>
            </div>
          </section>
        </div>

        {/* Textarea Component */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Textarea</h2>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Basic</h3>
            <div className="space-y-4 max-w-md">
              <Textarea
                label="Description"
                placeholder="Enter a description..."
                rows={4}
              />
              <Textarea
                label="Comments"
                placeholder="Your comments..."
                helperText="Maximum 500 characters"
                rows={3}
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Resize Options</h3>
            <div className="space-y-4 max-w-md">
              <Textarea
                label="No Resize"
                resize="none"
                placeholder="Cannot be resized"
                rows={3}
              />
              <Textarea
                label="Vertical Resize (default)"
                resize="vertical"
                placeholder="Resize vertically only"
                rows={3}
              />
              <Textarea
                label="Both"
                resize="both"
                placeholder="Resize in both directions"
                rows={3}
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">States</h3>
            <div className="space-y-4 max-w-md">
              <Textarea
                label="With Error"
                placeholder="Enter text..."
                error="This field is required"
                rows={3}
              />
              <Textarea
                label="Disabled"
                placeholder="Disabled textarea"
                disabled
                rows={3}
              />
            </div>
          </section>
        </div>

        {/* Select Component */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Select</h2>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Basic</h3>
            <div className="space-y-4 max-w-md">
              <Select
                label="Country"
                placeholder="Select a country"
                options={[
                  { value: "us", label: "United States" },
                  { value: "ca", label: "Canada" },
                  { value: "mx", label: "Mexico" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "fr", label: "France" },
                ]}
              />
              <Select
                label="Language"
                placeholder="Select a language"
                helperText="Choose your preferred language"
                options={[
                  { value: "en", label: "English" },
                  { value: "fr", label: "French" },
                  { value: "es", label: "Spanish" },
                  { value: "de", label: "German" },
                ]}
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">Sizes</h3>
            <div className="space-y-4 max-w-md">
              <Select
                size="sm"
                placeholder="Small select"
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
              <Select
                size="md"
                placeholder="Medium select (default)"
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
              <Select
                size="lg"
                placeholder="Large select"
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
            </div>
          </section>

          <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-800">States</h3>
            <div className="space-y-4 max-w-md">
              <Select
                label="With Error"
                placeholder="Select an option"
                error="This field is required"
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
              <Select
                label="Disabled"
                placeholder="Disabled select"
                disabled
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2" },
                ]}
              />
              <Select
                label="With Disabled Options"
                placeholder="Select an option"
                options={[
                  { value: "1", label: "Option 1" },
                  { value: "2", label: "Option 2 (disabled)", disabled: true },
                  { value: "3", label: "Option 3" },
                ]}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
