import React from 'React';
import { Form, Upload } from 'antd';

const DriverForm = ({ }) => {

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
      <Form.Item label="Licencia de conducción" name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Selecciona o arrastra el archivo a esta área.</p>
          <p className="ant-upload-hint"></p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item
        name="expireLicense"
        label="Fecha de expiración licencia de conducción"
      >
        <DatePicker onChange={onChangeExpireLicense} />
      </Form.Item>
      <Form.Item
        label="Tarjeta de propiedad"
        name="dragger"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Selecciona o arrastra el archivo a esta área.</p>
          <p className="ant-upload-hint"></p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item
        name="expiresPropertyCard"
        label="Fecha de expiración tarjeta de propiedad"
      >
        <DatePicker onChange={onChangeExpirePropertyCard} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Actualizar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DriverForm;
