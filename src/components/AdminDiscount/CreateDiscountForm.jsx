import { Form, Input, InputNumber } from 'antd'

export default function CreateDiscountForm({ form, onFinish, onFinishFailed }) {
  return (
    <div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Name"
          name="discount"
          rules={[
            {
              required: true,
              message: 'please fill discount name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
              message: 'please fill discount value',
            },
          ]}
        >
          <InputNumber
            defaultValue={0}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
          />
        </Form.Item>
      </Form>
    </div>
  )
}
