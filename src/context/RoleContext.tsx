"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export const RoleContext = createContext<{
  roles: Array<[]>;
  loadRoles: () => Promise<void>;
  createRole: (role: any) => Promise<void>;
}>({
  roles: [],
  loadRoles: async () => {},
  createRole: async ({}) => {},
});

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRoles must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [roles, setRoles] = useState<Array<any>>([]);

  async function loadRoles() {
    const res = await fetch("/api/roles");
    const data = await res.json();
    setRoles(roles);
  }

  async function createRole(role: any) {
    const res = await fetch("/api/role", {
      method: "POST",
      body: JSON.stringify(role),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newItem = await res.json();
    setRoles([...roles, newItem]);
  }

  return (
    <RoleContext.Provider value={{ roles, loadRoles, createRole }}>
      {children}
    </RoleContext.Provider>
  );
};
