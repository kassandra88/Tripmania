import { useTranslation } from 'react-i18next'
import { FC, useState } from 'react'

import { FormModal } from 'shared/components'
import { RegistrationForm } from 'entites/auth'
import { StyledRegistrationButton } from '../styledComponents'
import { UserRegistrationType } from 'entites/auth/types'

export const RegistrationBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { t } = useTranslation()

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleRegistration = (values: UserRegistrationType) => {
    console.log(values)
  }

  const handleCancelForm = () => {
    console.log(`cancel`)
  }

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
