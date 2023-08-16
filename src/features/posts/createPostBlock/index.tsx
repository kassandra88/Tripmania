import { Button } from 'antd'
import { CreatePostForm } from 'entites/posts'
import { FC, useState } from 'react'

import { FormModal } from 'shared/components'

export const CreatePostBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleLogin = (values: any) => {}

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <CreatePostForm
          onSubmitForm={handleLogin}
          onCancelForm={handleCancelForm}
        />
      }
      trigger={
        <Button type="primary" onClick={showModal}>
          Create New Post
        </Button>
      }
      isModalOpen={isModalVisible}
      handleCancel={handleCancelModal}
    />
  )
}
