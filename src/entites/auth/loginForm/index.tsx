import { FC } from 'react'
import { Button, Col, Row } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Form, Formik } from 'formik'

import { UserLoginType } from '../types'
import { Input, PasswordInput } from 'shared/components'

type LoginFormPropsType = {
  onSubmitForm: (values: UserLoginType) => void
  onCancelForm: () => void
}

export const LoginForm: FC<LoginFormPropsType> = ({
  onSubmitForm,
  onCancelForm,
}) => {
  const getInitialValues = (): UserLoginType => {
    return {
      email: '',
      password: '',
    }
  }

  const handleSubmitForm = (values: UserLoginType) => onSubmitForm(values)

  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={getInitialValues()}
      onSubmit={(values) => handleSubmitForm(values)}
    >
      {({ values, setFieldValue, handleBlur }) => (
        <Form>
          <Col>
            <Input
              name="email"
              ariaLabel="email"
              value={values.email}
              onChange={(e) => setFieldValue('email', e.target.value)}
              onBlur={(e) => handleBlur(e)}
            />
          </Col>

          <Col>
            <PasswordInput
              name="password"
              ariaLabel="password"
              value={values.password}
              onChange={(e) => setFieldValue('password', e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onBlur={(e) => handleBlur(e)}
            />
          </Col>
          <Row justify="center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Button danger onClick={onCancelForm}>
              Cancel
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  )
}
