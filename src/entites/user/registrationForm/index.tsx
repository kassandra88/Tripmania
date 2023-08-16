import { FC } from 'react'
import { Button, Col, Row } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Form, Formik } from 'formik'

import { UserRegistrationType } from '../types'
import { Input, PasswordInput } from 'shared/components'

type RegistrationFormPropsType = {
  onSubmitForm: (values: UserRegistrationType) => void
  onCancelForm: () => void
}

export const RegistrationForm: FC<RegistrationFormPropsType> = ({
  onSubmitForm,
  onCancelForm,
}) => {
  const getInitialValues = (): UserRegistrationType => {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    }
  }

  const handleRegisterUser = (values: UserRegistrationType) => {
    onSubmitForm(values)
  }

  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={getInitialValues()}
      onSubmit={(values) => handleRegisterUser(values)}
    >
      {({ values, setFieldValue, errors, touched, handleBlur, isValid }) => (
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
            <Input
              name="username"
              ariaLabel="username"
              value={values.username}
              onChange={(e) => setFieldValue('username', e.target.value)}
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

          <Col>
            <PasswordInput
              name="passwordConfirmation"
              ariaLabel="passwordConfirmation"
              value={values.passwordConfirmation}
              onChange={(e) =>
                setFieldValue('passwordConfirmation', e.target.value)
              }
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
