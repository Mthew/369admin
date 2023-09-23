"use client";

import Link from "next/link";
import { Button } from "antd";

import { Table } from "antd";
import { IdentificationIcon, EditIcon, DeleteIcon } from "@/components/icons";
import { Heading, ConfirmButton } from "@/components/ui";

import { useRole } from "@/context/RoleContext";
import { useEffect } from "react";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Acciones",
    dataIndex: "actions",
    key: "actions",
    render: (text: string, record: any) => (
      <>
        <Button icon={<EditIcon />} />
        <ConfirmButton
          icon={<DeleteIcon />}
          onConfirm={() => {}}
          textConfirm=""
        />
      </>
    ),
  },
];

const List = () => {
  const { roles, loadRoles } = useRole();

  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <>
      <Heading
        title="Roles"
        description="Función que cumple un usuario en la empresa"
        icon={<IdentificationIcon className="w-10 h-10 text-violet-500" />}
        bgColor="bg-violet-500/10"
        button={<Link href="/roles/new">Agregar Role</Link>}
      />
      <div className="px-4 lg:px-8">
        <Table columns={columns} dataSource={roles} />
      </div>
    </>
  );
};

export default List;
