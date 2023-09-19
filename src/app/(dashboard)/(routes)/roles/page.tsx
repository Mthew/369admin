"use client";

import { Button } from "antd";

import { IdentificationIcon, EditIcon, DeleteIcon } from "@/components/icons";
import { Heading, ConfirmButton } from "@/components/ui";

import { Table } from "antd";

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
  return (
    <>
      <Heading
        title="Roles"
        description="Función que cumple un usuario en la empresa"
        icon={<IdentificationIcon className="w-10 h-10 text-violet-500" />}
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <Table columns={columns} />
      </div>
    </>
  );
};

export default List;
