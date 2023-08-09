import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-center m-3">
      <h1 className="text-2xl font-bold">
        Pages are Pre-Rendered and Hydrate after ward
      </h1>
      {children}
    </div>
  );
}
