"use client";

import { Button, Form, Input, Space } from "antd";

import { useRole } from "@/context/RoleContext";

const App: React.FC = () => {
  const { createRole } = useRole();

  const handlers = {
    async submit(values: any) {
      console.log("VALUES =>>", values);
      await createRole(values);
    },
  };

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handlers.submit}>
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
          <Button htmlType="reset">Cancelar</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default App;
