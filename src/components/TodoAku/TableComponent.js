import React, { useState } from "react";
import { Table, Space, Divider, Popconfirm, message, } from "antd";
import EditModal from "./Modal/EditModal";
import { useDispatch, useSelector,  } from "react-redux";
import { deleteTodo } from "./Todos";
//import Checkbox from "antd/lib/checkbox/Checkbox";

export const TodosData = [

];

const TableComponent = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.value);
  const [selectionType ] = useState('checkbox');

const columns = [
  {
      title: "TODO",
      dataIndex: "todo",
      key: "todo",
      render: (text) => <div>{text}</div>,
  },
  {
      title: "ACTION",
      dataIndex: "id",
      key: "id",
      fixed: "right",
      width: 256,
      render: (rows, record) => [
          <Space split={<Divider type="vertical" />} size="middle">
              {/* DONE CHECKBOX */}

              {/* EDIT DATA MODAL */}
              <EditModal
              todo={record.todo}
              id={rows}
              />

              {/* id={id} untuk mengirim data ID untuk parameter function di EditModal component */}

              {/* DELETE DATA */}
              <Popconfirm // popup konfirmasi yakin hapus data?
                  title="Are you sure to delete this task?"
                  onConfirm={() => {
                      // manggil function redux deleteTodo di "../features/Todos"
                      dispatch(deleteTodo({ id: rows }));
                      message.success('Task deleted');
                  }}
              >
                  <a>Delete</a>
              </Popconfirm>
          </Space>
      ],
  },
];

      const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      // getCheckboxProps: (record) => ({
      //   disabled: record.name === 'Disabled User',
      //   // Column configuration not to be checked
      //   name: record.name,
      // }),
    };

      return (
        <div  style={{ marginTop: 12 }}>
          {/* <Radio.Group
            onChange={({ target: { value } }) => {
              setSelectionType(value);
            }}
            value={selectionType}
          >
            <Radio value="checkbox">Checkbox</Radio>
            <Radio value="radio">radio</Radio>
          </Radio.Group> */}

          <Divider />
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={todoList}
            pagination={{ defaultPageSize: 5 }}
            rowKey="id"
            />
        </div>
    );
};


export default TableComponent;

