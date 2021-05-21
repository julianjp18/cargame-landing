import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  notification,
} from 'antd';
import './signup.scss';
import { POLICY_ADS } from '../../../utils/extras';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 10,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 14,
    },
    sm: {
      span: 14,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const showPasswordError = () => {
  notification['warning']({
    message: 'Contraseñas incorrectas',
    description: 'Por favor ingresa nuevamente las constraseñas'
  });
};

const TermsLink = styled.span`
  color: #1890ff;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = ({ signUp, auth }) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [passwordError, setpasswordError] = useState(false);

  useEffect(() => {
    if (auth && auth.role) {
      history.push('/dashboard-driver');
    }
  }, [auth]);

  const onFinish = (values) => {
    setpasswordError(false);
    const {
      name,
      identification,
      email,
      password,
      confirm,
      phone,
      city,
      agreement,
    } = values;

    if (
      name &&
      identification &&
      email &&
      password &&
      confirm &&
      phone &&
      agreement &&
      city !== 'empty'
    ) {
      if (password === confirm) {
        signUp(values);
      } else setpasswordError(true);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="57">+57</Option>
      </Select>
    </Form.Item>
  );

  const sendTerms = () => {
    history.push('/terms-and-conditions-driver');
  };
  return (
    <Row className="sign-up-container">
      <Col xs={24}>
        <p className="subtitle-content">Registrate cómo transportador</p>
        {passwordError && showPasswordError()}
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '57',
          }}
          scrollToFirstError
        >
          <Form.Item
            name={'name'}
            label="Nombre completo"
            rules={[
              {
                required: true,
                message: 'Ingresa tu nombre completo!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="identification"
            label="Cédula de ciudadanía"
            rules={[
              {
                required: true,
                message: 'Inserta tu número de identificación!',
                whitespace: true,
              },
              () => ({
                validator(rule, value) {
                  const reg = /[0-9]{6,10}$/;
                  if (reg.exec(value)) return Promise.resolve();;
                  return Promise.reject('Mínimo 6 números, máximo 10.');
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo electrónico"
            rules={[
              {
                type: 'email',
                message: 'El correo electrónico no es válido!',
              },
              {
                required: true,
                message: '¡Por favor ingresa tu correo electrónico!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="Ciudad"
            rules={[
              {
                required: true,
                message: 'Por favor selecciona tu ciudad de residencia!',
              },
              () => ({
                validator(rule, value) {
                  if (value !== 'empty') return Promise.resolve();
                  return Promise.reject('Por favor selecciona una ciudad');
                },
              }),
            ]}
            initialValue="empty"
          >
            <Select>
              <Option value="empty">Selecciona una ciudad</Option>
              <Option value="Bogotá D.C.">Bogotá D.C.</Option>
              <Option value="Villavicencio">Villavicencio</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu contraseña',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirmar contraseña"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Por favor repite tu contraseña',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('¡Las dos contraseñas que ingresaste no son iguales!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Celular"
            rules={[
              {
                required: true,
                message: 'Por favor ingresa tu celular!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name="referidNumber"
            label="Número de referido"
            rules={[
              {
                required: false,
                message: 'Inserta tu número de referido',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="privacy"
            label="Aviso de privacidad"
            rules={[
              {
                disabled: true,
              },
            ]}
            initialValue={POLICY_ADS}
          >
            <TextArea bordered disabled rows={4} />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('Acepta los términos y condiciones por favor'),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              Estoy de acuerdo con los <TermsLink onClick={sendTerms}>términos y condiciones</TermsLink>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrarse
        </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
