import { FC } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Form, Formik } from 'formik'

import { Input } from 'shared/components'
import { PostType } from './types'

const { Text, Title } = Typography

type CreatePostFormPropsType = {
  onSubmitForm: (values: PostType) => void
  onCancelForm: () => void
}

export const CreatePostForm: FC<CreatePostFormPropsType> = ({
  onSubmitForm,
}) => {
  const getInitialValues = (): PostType => ({
    title: '',
    text: '',
  })

  const handleSubmitForm = (values: PostType) => onSubmitForm(values)

  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={getInitialValues()}
      onSubmit={(values) => handleSubmitForm(values)}
    >
      {({ values, setFieldValue, handleBlur }) => (
        <Form>
          <Row justify="center">
            <Title>Create Post</Title>
          </Row>

          <Col>
            <Text type="secondary">Title</Text>

            <Input
              name="title"
              ariaLabel="title"
              value={values.title}
              onChange={(e) => setFieldValue('title', e.target.value)}
              onBlur={(e) => handleBlur(e)}
            />
          </Col>

          <Col>
            <Text type="secondary">Text</Text>

            <Input
              name="text"
              ariaLabel="text"
              value={values.text}
              onChange={(e) => setFieldValue('text', e.target.value)}
              onBlur={(e) => handleBlur(e)}
            />
          </Col>

          <Row justify="center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Button danger>Cancel</Button>
          </Row>
        </Form>
      )}
    </Formik>
  )
}
