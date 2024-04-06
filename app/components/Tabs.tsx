// Tabs.tsx Component
"use client";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Menu() {
  return (
    <div className="flex h-9 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
      <Tabs />
    </div>
  );
}

function Tabs() {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [dir, setDir] = React.useState<null | "l" | "r">(null);

  function handleSetSelected(val: number | null) {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected < val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
  }

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            tab={t.id} // Add the missing 'tab' property
            selected={selected}
            handleSetSelected={handleSetSelected}
          >
            {t.title}
          </Tab>
        );
      })}

      {/* TODO: Render all of our content */}
    </div>
  );
}

function Tab({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) {
  return (
    <button
      onMouseEnter={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${selected === tab ? "bg-neutral-800 text-neutral-100" : "text-neutral-400"}`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${selected === tab ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function ExampleComponent() {
  return <div>Hello, World!</div>;
}

const TABS = [
  {
    title: "Products",
    Component: ExampleComponent,
  },
  {
    title: "Pricing",
    Component: ExampleComponent,
  },
  {
    title: "Blog",
    Component: ExampleComponent,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
