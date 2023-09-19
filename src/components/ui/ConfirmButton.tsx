import { Button, Popconfirm } from "antd";

interface Props {
  label?: string;
  onConfirm: any;
  onCancel?: () => {};
  disabled?: boolean;
  textConfirm: string;
  icon?: JSX.Element;
  shape?: "default" | "circle" | "round";
  type?: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  danger?: boolean;
}

const DeleteButton = (props: Props) => (
  <Popconfirm
    disabled={props.disabled}
    title={props.textConfirm}
    placement="bottomRight"
    onConfirm={props.onConfirm}
    onCancel={props.onCancel}
  >
    <Button
      type={props.type || "default"}
      shape={props.shape || "circle"}
      icon={props.icon}
      disabled={props.disabled}
      danger={props.danger}
    />
  </Popconfirm>
);
export default DeleteButton;
