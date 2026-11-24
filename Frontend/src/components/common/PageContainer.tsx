import type { ReactNode } from "react";

type PageContainerProps = {
  title: string;
  children: ReactNode;
};

export default function PageContainer({ title, children }: PageContainerProps) {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">{title}</h1>

      {children}
    </div>
  );
}
