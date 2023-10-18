"use client";

import React, { createContext, useContext, useState } from "react";
import instance from "@/lib/axios";
import { url } from "inspector";

const URLs = {
  base: "/role",
};

export const RoleContext = createContext<{
  item: {};
  list: Array<[]>;
  getAll: () => Promise<void>;
  create: (role: any) => Promise<void>;
  remove: (id: number) => Promise<void>;
  getById: (id: number) => any;
}>({
  item: {},
  list: [],
  getAll: async () => {},
  create: async ({}) => {},
  remove: async (id: number) => {},
  getById: (id: number) => {},
});

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRoles must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<Array<any>>([]);
  const [item, setItem] = useState<any>({});

  async function getAll() {
    const res = await instance.get(URLs.base);
    setList(res.data);
  }

  const getById = async (id: number) => {
    const res = list.find((x) => x.id === id);
    setItem(res);
  };

  async function create(role: any) {
    const res = await instance.post(URLs.base, role);
    const newItem = await res.data;
    setList([...list, newItem]);
  }

  async function remove(roleId: number) {}
  async function update(roleId: number, role: any) {}

  return (
    <RoleContext.Provider
      value={{ list, item, getById, getAll, create, remove }}
    >
      {children}
    </RoleContext.Provider>
  );
};
