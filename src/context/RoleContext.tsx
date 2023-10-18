"use client";

import React, { createContext, useContext, useState } from "react";
import instance from "@/lib/axios";
import { Role } from "@/interfaces/role";

const URLs = {
  base: "/role",
};

export const RoleContext = createContext<{
  selectedItem: Role | undefined;
  list: Role[];
  loading: boolean;
  getAll: () => Promise<void>;
  create: (role: any) => Promise<void>;
  remove: (id: number) => Promise<void>;
  getById: (id: number) => any;
  setSelectedItem: (item: Role | undefined) => void;
  update: (id: number, item: Role) => void;
}>({
  selectedItem: undefined,
  list: [],
  loading: false,
  getAll: async () => {},
  create: async ({}) => {},
  remove: async (id: number) => {},
  getById: (id: number) => {},
  setSelectedItem: (item: Role | undefined) => {},
  update: (id: number, item: Role) => {},
});

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRoles must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<Role[]>([]);
  const [selectedItem, setSelectedItem] = useState<Role | undefined>({});
  const [loading, setLoading] = useState(false);

  async function asyncHandler(callback: any) {
    setLoading(true);
    await callback();
    setLoading(false);
  }

  const getAll = () =>
    asyncHandler(async () => {
      const res = await instance.get(URLs.base);
      setList(res.data);
    });

  const getById = async (id: number) => {
    const res = list.find((x) => x.id === id);
    setSelectedItem(res);
  };

  const create = (role: Role) =>
    asyncHandler(async () => {
      const res = await instance.post(URLs.base, role);
      const newItem = await res.data;
      setList([...list, newItem]);
    });

  const remove = (id: number) =>
    asyncHandler(async () => {
      const res = await instance.delete(`${URLs.base}/${id}`);
      const removedItem = await res.data;
      setList(list.filter((item) => item.id !== id));
    });

  const update = (id: number, role: Role) =>
    asyncHandler(async () => {
      const res = await instance.put(`${URLs.base}/${id}`, role);
      const updatedItem = await res.data;
      setList(list.map((item) => (item.id === id ? updatedItem : item)));
    });

  return (
    <RoleContext.Provider
      value={{
        list,
        selectedItem,
        setSelectedItem,
        getById,
        getAll,
        create,
        remove,
        update,
        loading,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
