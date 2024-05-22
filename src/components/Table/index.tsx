import { Table } from 'antd'
import './index.css'
import { ColumnsType } from 'antd/es/table'

type Props = {
  dataSource: any
  columns: ColumnsType
  rowKey: (record: any) => any
}

const MyTable = (props: Props) => {
  return (
    <div className="p-8">
      <Table
        dataSource={props.dataSource}
        columns={props.columns}
        rowKey={props.rowKey}
        pagination={{ position: ['bottomCenter'] }}
        scroll={{ x: 400 }}
      />
    </div>
  )
}

export default MyTable
