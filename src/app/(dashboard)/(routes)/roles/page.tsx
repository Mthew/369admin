"use client";

/*libs*/
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/*Componenets*/
import { Table, Button } from "antd";
import { IdentificationIcon, EditIcon, DeleteIcon } from "@/components/icons";
import { Heading, ConfirmButton } from "@/components/ui";

/*Hooks*/
import { useRole } from "@/context/RoleContext";

import { ROUTES } from "@/lib/constants";

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
  const router = useRouter();
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
        button={
          <Button onClick={() => router.push(`${ROUTES.role}/new`)}>
            Agregar Role
          </Button>
        }
      />
      <div className="px-4 lg:px-8">
        <Table columns={columns} dataSource={roles} />
      </div>
    </>
  );
};

export default List;
