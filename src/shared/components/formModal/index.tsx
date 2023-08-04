import { FC, ReactNode } from 'react'
import { Modal, Row } from 'antd'

import { ModalFormWrapper } from 'shared/styledComponents'

type FormModalPropsType = {
  form: ReactNode
  triggerButton: ReactNode
  isModalOpen: boolean
  handleCancel: () => void
}

export const FormModal: FC<FormModalPropsType> = ({
  form,
  triggerButton,
  isModalOpen,
  handleCancel,
}) => {
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Row justify="center">
          <ModalFormWrapper justify="center">{form}</ModalFormWrapper>
        </Row>
      </Modal>

      {triggerButton}
    </>
  )
}
