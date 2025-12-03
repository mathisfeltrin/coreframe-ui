import { Button } from "coreframe-ui";

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

        <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-800">Variants</h2>
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
          <h2 className="text-xl font-semibold text-neutral-800">Sizes</h2>
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small Button</Button>
            <Button size="md">Medium Button</Button>
            <Button size="lg">Large Button</Button>
          </div>
        </section>

        <section className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-800">States</h2>
          <div className="flex gap-4 flex-wrap">
            <Button>Normal Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
