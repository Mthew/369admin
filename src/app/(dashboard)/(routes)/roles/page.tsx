"use client";

/*libs*/
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/*Componenets*/
import { Button } from "antd";
import List from "@/components/ui/List";
import { IdentificationIcon, EditIcon, DeleteIcon } from "@/components/icons";

/*Hooks*/
import { useRole } from "@/context/RoleContext";

/*Constants*/
import { ROUTES } from "@/config/constants";

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
];

const ListCrud = () => {
  const router = useRouter();
  const { list, getAll, remove, setSelectedItem, loading } = useRole();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <List
        title="Roles"
        subtitle="Función que cumple un usuario en la empresa"
        iconTitle={<IdentificationIcon className="w-10 h-10 text-violet-500" />}
        bgColorTitle={"bg-violet-500/10"}
        loading={loading}
        addButton={
          <Button
            loading={loading}
            onClick={() => {
              setSelectedItem(undefined);
              router.push(`${ROUTES.role}/new`);
            }}
          >
            Agregar Role
          </Button>
        }
        addActions={[
          {
            label: "Editar",
            icon: <EditIcon />,
            type: "default",
            onClick: (record: any) => {
              setSelectedItem(record);
              router.push(`${ROUTES.role}/${record.id}`);
            },
          },
          {
            confirm: "¿Esta seguro de eliminar el registro?",
            label: "Eliminar",
            danger: true,
            icon: <DeleteIcon />,
            type: "primary",
            onClick: (record: any) => remove(record.id),
          },
        ]}
        columns={columns}
        dataSource={list}
      />
    </>
  );
};

export default ListCrud;
