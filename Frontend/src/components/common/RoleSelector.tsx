export type UserRole = "public" | "operator" | "admin";

type RoleSelectorProps = {
  role: UserRole;
  onChange: (role: UserRole) => void;
};

export default function RoleSelector({ role, onChange }: RoleSelectorProps) {
  return (
    <div className="mb-6 flex gap-2">
      <button
        className={`rounded px-4 py-2 ${
          role === "public" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChange("public")}
      >
        Public
      </button>

      <button
        className={`rounded px-4 py-2 ${
          role === "operator" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChange("operator")}
      >
        Grid User
      </button>

      <button
        className={`rounded px-4 py-2 ${
          role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => onChange("admin")}
      >
        Administrator
      </button>
    </div>
  );
}
