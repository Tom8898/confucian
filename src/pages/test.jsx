import React, { useMemo, useState } from "react";

/**
 * Mini AI App – Dynamic Mock UI Renderer
 *
 * Based on an AI-captured requirement example:
 * App Name: Employee Manager
 * Entities: Employee
 * Roles: Admin, Employee
 * Features: Add employee, Update info
 *
 * How it works
 * - Paste/adjust the `schema` JSON in the editor box and click “Apply Schema”.
 * - The UI (tabs, feature chips, and entity forms) will re-render dynamically.
 * - Forms are MOCK ONLY (no backend). A toast-like area shows the latest mock submit.
 *
 * Styling: TailwindCSS utility classes. (Works even without Tailwind; it just won’t look as polished.)
 */

const defaultSchema = {
  appName: "Employee Manager",
  roles: ["Admin", "Employee"],
  features: ["Add employee", "Update info"],
  entities: [
    {
      name: "Employee",
      fields: [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "Department", type: "text" },
      ],
    },
  ],
};

function inferInputType(fieldName, fallback = "text") {
  const key = fieldName.toLowerCase();
  if (key.includes("email")) return "email";
  if (key.includes("age") || key.includes("number") || key.includes("count")) return "number";
  if (key.includes("date")) return "date";
  if (key.includes("password")) return "password";
  return fallback;
}

export default function App() {
  const [schemaText, setSchemaText] = useState(JSON.stringify(defaultSchema, null, 2));
  const [schema, setSchema] = useState(defaultSchema);
  const [activeRole, setActiveRole] = useState(schema.roles?.[0] ?? "");
  const [lastSubmit, setLastSubmit] = useState(null);

  // one form state per entity
  const initData = useMemo(() => {
    const base = {};
    for (const ent of schema.entities || []) {
      base[ent.name] = Object.fromEntries(
        (ent.fields || []).map((f) => [f.name, ""]) 
      );
    }
    return base;
  }, [schema]);

  const [formData, setFormData] = useState(initData);

  // Reset form data whenever schema changes
  React.useEffect(() => {
    setFormData(initData);
    if (schema.roles?.length) setActiveRole(schema.roles[0]);
  }, [initData, schema.roles]);

  const handleApplySchema = () => {
    try {
      const parsed = JSON.parse(schemaText);
      // very light validation
      if (!parsed.entities || !Array.isArray(parsed.entities)) {
        alert("Schema must include an `entities` array.");
        return;
      }
      setSchema(parsed);
    } catch (e) {
      alert("Invalid JSON. Please check your schema.");
    }
  };

  const updateField = (entityName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [entityName]: { ...prev[entityName], [fieldName]: value },
    }));
  };

  const handleMockSubmit = () => {
    const payload = {
      role: activeRole,
      data: formData,
      timestamp: new Date().toISOString(),
    };
    setLastSubmit(payload);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-2xl bg-gray-900 text-white grid place-items-center text-lg font-bold">AI</div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold leading-tight">{schema.appName || "Untitled App"}</h1>
            <p className="text-sm text-gray-500">Dynamic mock UI generated from AI-captured requirements</p>
          </div>

          {/* Apply schema */}
          <button
            onClick={handleMockSubmit}
            className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90"
            title="Mock submit all forms"
          >
            Mock Submit
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Schema editor */}
        <section className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Schema (JSON)</h2>
            <p className="text-sm text-gray-500 mb-3">Paste AI output here, then click <span className="font-medium">Apply Schema</span>.</p>
            <textarea
              value={schemaText}
              onChange={(e) => setSchemaText(e.target.value)}
              className="w-full h-72 font-mono text-sm p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20"
              spellCheck={false}
            />
            <div className="mt-3 flex gap-2">
              <button
                onClick={handleApplySchema}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90"
              >
                Apply Schema
              </button>
              <button
                onClick={() => setSchemaText(JSON.stringify(defaultSchema, null, 2))}
                className="px-4 py-2 rounded-xl border"
              >
                Reset to Example
              </button>
            </div>
          </div>

          {/* Last submit preview */}
          <div className="mt-6 bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Submission Preview</h2>
            <p className="text-sm text-gray-500 mb-3">This shows the payload from the latest mock submit.</p>
            <pre className="text-xs bg-gray-100 rounded-xl p-3 overflow-auto">
{lastSubmit ? JSON.stringify(lastSubmit, null, 2) : "// Click ‘Mock Submit’ to preview payload"}
            </pre>
          </div>
        </section>

        {/* Right: Generated UI */}
        <section className="lg:col-span-7">
          {/* Roles as tabs */}
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div className="border-b flex flex-wrap">
              {(schema.roles || []).map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition ${
                    activeRole === role ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {role}
                </button>
              ))}
              {!schema.roles?.length && (
                <div className="px-4 py-2 text-sm text-gray-500">No roles defined</div>
              )}
            </div>

            {/* Features */}
            <div className="px-4 pt-4 pb-2 border-b bg-white">
              <div className="flex flex-wrap gap-2">
                {(schema.features || []).map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 border">
                    {f}
                  </span>
                ))}
                {!schema.features?.length && (
                  <span className="text-sm text-gray-400">No features listed</span>
                )}
              </div>
            </div>

            {/* Entities & Forms */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {(schema.entities || []).map((ent) => (
                <div key={ent.name} className="border rounded-2xl p-4">
                  <h3 className="font-semibold mb-3">{ent.name} Form</h3>
                  <div className="space-y-3">
                    {(ent.fields || []).map((field) => {
                      const inputType = field.type || inferInputType(field.name);
                      const id = `${ent.name}-${field.name}`.replace(/\s+/g, "-");
                      return (
                        <label key={id} className="block">
                          <span className="block text-sm text-gray-600 mb-1">{field.name}</span>
                          <input
                            id={id}
                            type={inputType}
                            value={formData?.[ent.name]?.[field.name] ?? ""}
                            onChange={(e) => updateField(ent.name, field.name, e.target.value)}
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                            placeholder={field.placeholder || `Enter ${field.name}`}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
              {!schema.entities?.length && (
                <div className="text-sm text-gray-500">No entities. Add some in schema.entities[].</div>
              )}
            </div>

            {/* Footer actions */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t bg-gray-50">
              <button
                onClick={() => setFormData(initData)}
                className="px-4 py-2 rounded-xl border"
              >
                Reset Forms
              </button>
              <button
                onClick={handleMockSubmit}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90"
              >
                Mock Submit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Tiny footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-gray-500">
        Generated UI • Demo only • No persistence
      </footer>
    </div>
  );
}