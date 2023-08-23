import { Button } from 'antd'
import { CreatePostForm } from 'entites/posts'
import { CreatePostFormType } from 'entites/posts/types'
import { FC, useState } from 'react'

import { createPost } from 'entites/posts/store/actions'
import { FormModal } from 'shared/components'
import { useTypedDispatch } from 'app/store/hooks'

export const CreatePostBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dispatch = useTypedDispatch()

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleCreatePost = (values: CreatePostFormType) => {
    dispatch(createPost(values))
  }

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <CreatePostForm
          onSubmitForm={handleCreatePost}
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
