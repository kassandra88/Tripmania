import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'antd'

import { Button } from 'shared/components'
import { CreatePostCard } from 'widgets/posts'
import { MainLayout } from 'app/layouts'
import { UserProfileCard } from 'widgets/user'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <MainLayout pageTitle="HomePage">
      <Row gutter={[20, 20]}>
        <Col xs={5}>
          <UserProfileCard />
        </Col>

        <Col xs={12}>
          <CreatePostCard />
        </Col>

        <Col xs={5}>
          <Button data-testid="logout-btn">{t('logout')}</Button>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default HomePage
