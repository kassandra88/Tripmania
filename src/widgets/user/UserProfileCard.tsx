import { FC } from 'react'
import { Avatar, Card, Col, Divider } from 'antd'

import { Color } from 'shared/styles'
import { getUser } from 'app/store/selectors'
import { useTypedSelector } from 'app/store/hooks'

export const UserProfileCard: FC = () => {
  const { user } = useTypedSelector(getUser)

  return (
    <Card>
      <Col>
        <Avatar
          style={{ backgroundColor: Color.darkGray, verticalAlign: 'middle' }}
          size="large"
          gap={2}
        >
          U
        </Avatar>
        {user?.username || 'User'}
      </Col>

      <Divider />

      <Col> Menu</Col>

      <Divider />

      <Col> Else</Col>
    </Card>
  )
}
