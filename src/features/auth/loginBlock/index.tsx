import { FC, useState } from 'react'

import { FormModal } from 'shared/components'
import { LoginForm } from 'entites/auth'
import { StyledLoginButton } from '../styledComponents'
import { UserLoginType } from 'entites/auth/types'

export const LoginBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleLogin = (values: UserLoginType) => {}

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <LoginForm onSubmitForm={handleLogin} onCancelForm={handleCancelForm} />
      }
      triggerButton={
        <StyledLoginButton type="primary" onClick={showModal}>
          Login
        </StyledLoginButton>
      }
      isModalOpen={isModalVisible}
      handleCancel={handleCancelModal}
    />
  )
}
