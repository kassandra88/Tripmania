import { FC, ReactNode } from 'react'
import { Modal, Row } from 'antd'

import { ModalFormWrapper } from 'shared/styledComponents'

type FormModalPropsType = {
  form: ReactNode
  trigger: ReactNode
  isModalOpen: boolean
  handleCancel: () => void
}

export const FormModal: FC<FormModalPropsType> = ({
  form,
  trigger,
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

      {trigger}
    </>
  )
}
