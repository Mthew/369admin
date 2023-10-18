"use client";

/*libs*/
import { useRouter } from "next/navigation";

/*components*/
import { Button, Form, Input, Space } from "antd";
import { IdentificationIcon } from "@/components/icons";
import { Heading } from "@/components/ui";

/*hooks*/
import { useRole } from "@/context/RoleContext";
import { ROUTES } from "@/config/constants";

const App: React.FC = () => {
  const router = useRouter();
  const { create, selectedItem, update, loading } = useRole();

  const handlers = {
    async submit(values: any) {
      if (selectedItem) {
        await update(selectedItem.id!, values);
      } else {
        await create(values);
      }
      router.replace(ROUTES.role);
    },
  };

  return (
    <>
      <Heading
        title="Roles"
        description="Función que cumple un usuario en la empresa"
        icon={<IdentificationIcon className="w-10 h-10 text-violet-500" />}
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <Form
          layout="vertical"
          autoComplete="off"
          onFinish={handlers.submit}
          initialValues={selectedItem}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Descripción"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Guardar
              </Button>
              <Button
                htmlType="reset"
                onClick={() => router.back()}
                loading={loading}
              >
                Cancelar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default App;
