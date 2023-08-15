import { FC, useState } from 'react'

import { FormModal } from 'shared/components'
import { registerUser } from 'entites/user/store'
import { RegistrationForm } from 'entites/user'
import { StyledRegistrationButton } from '../styledComponents'
import { UserRegistrationType } from 'entites/user/types'
import { useTypedDispatch } from 'app/store/hooks'

export const RegistrationBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const dispatch = useTypedDispatch()

  const handleRegistration = (values: UserRegistrationType) => {
    dispatch(registerUser(values))
  }

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <RegistrationForm
          onSubmitForm={handleRegistration}
          onCancelForm={handleCancelForm}
        />
      }
      trigger={
        <StyledRegistrationButton onClick={showModal}>
          Registration
        </StyledRegistrationButton>
      }
      isModalOpen={isModalVisible}
      handleCancel={handleCancelModal}
    />
  )
}
