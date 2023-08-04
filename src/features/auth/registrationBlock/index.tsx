import { FC, useState } from 'react'

import { FormModal } from 'shared/components'
import { RegistrationForm } from 'entites/auth'
import { StyledRegistrationButton } from '../styledComponents'
import { UserRegistrationType } from 'entites/auth/types'

export const RegistrationBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleRegistration = (values: UserRegistrationType) => {}

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <RegistrationForm
          onSubmitForm={handleRegistration}
          onCancelForm={handleCancelForm}
        />
      }
      triggerButton={
        <StyledRegistrationButton onClick={showModal}>
          Registration
        </StyledRegistrationButton>
      }
      isModalOpen={isModalVisible}
      handleCancel={handleCancelModal}
    />
  )
}
