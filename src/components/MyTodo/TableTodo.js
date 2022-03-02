import { Table, Space, } from "antd";

const TableTodo = () => {
  const data = [
      {
          id: '1',
          todo: 'sandyco',
      },
      {
          id:'2',
          todo: 'torina',
      },

    ];



  const columns = [
    {
        title: 'TODO',
        dataIndex: 'todo',
        key: 'todo',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'ACTION',
        dataIndex: 'id',
        key: 'action',
        width: 100,
        render: (rows, record) => (
          <Space size="middle">
            <a>done</a>
            <a>edit</a>
            <a>delete</a>
            </Space>
        ),
      },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  );
};
export default TableTodo;

