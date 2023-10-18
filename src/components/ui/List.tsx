import { Table, Button, Tooltip, Popconfirm } from "antd";
import { Heading } from ".";
import { ActionButton } from "@/interfaces/commons";

interface Props {
  title: string;
  loading?: boolean;
  subtitle: string;
  iconTitle: JSX.Element;
  bgColorTitle: string;
  columns: any;
  dataSource: Array<any>;
  addButton: JSX.Element;
  addActions: Array<ActionButton>;
  key?: string;
}

const List = ({
  title,
  loading = false,
  columns,
  iconTitle,
  dataSource,
  addButton,
  addActions,
  subtitle,
  bgColorTitle,
  key,
  ...rest
}: Props) => {
  return (
    <div className="form-container-generic">
      <Heading
        title="Roles"
        description="Función que cumple un usuario en la empresa"
        icon={iconTitle}
        bgColor={bgColorTitle}
        button={addButton}
      />
      <div className="px-4 lg:px-8">
        <Table
          rowKey={key || "id"}
          loading={loading}
          scroll={{ x: true }}
          columns={[
            ...columns.map((column: any) => {
              if (column.filters) {
                column.filters = column.filters.map((filter: any) => ({
                  ...filter,
                  value: filter.value,
                  text: filter.text,
                }));
              }
              return {
                ...column,
                title: column.title,
              };
            }),
            addActions
              ? {
                  title: "Acciones",
                  dataIndex: "buttons",
                  key: `${Date.now().valueOf}`,
                  align: "right",
                  width: 50 * addActions?.length,
                  //   ...(actionsStyles || {}),
                  render: (value, record) => ({
                    props: {
                      ...record.props,
                    },
                    children: record.hideButtons
                      ? ""
                      : addActions?.map((action) =>
                          action.hide ? (
                            ""
                          ) : (
                            <Tooltip key={action.label} title={action.label}>
                              {action.confirm ? (
                                <Popconfirm
                                  disabled={action.disabled}
                                  title={action.confirm}
                                  placement="bottomRight"
                                  onConfirm={() => action.onClick!(record)}
                                >
                                  <Button
                                    type={action.type || "default"}
                                    shape="circle"
                                    icon={action.icon}
                                    disabled={action.disabled}
                                    danger={action.danger}
                                  />
                                </Popconfirm>
                              ) : (
                                <Button
                                  type={action.type || "default"}
                                  key={action.label}
                                  shape="circle"
                                  icon={action.icon}
                                  danger={action.danger}
                                  onClick={() => action.onClick!(record)}
                                  disabled={action.disabled}
                                  className={action.className || ""}
                                />
                              )}{" "}
                            </Tooltip>
                          )
                        ),
                  }),
                }
              : {},
          ]}
          dataSource={dataSource}
          className="custom-table"
          {...rest}
        />
      </div>
    </div>
  );
};

export default List;
