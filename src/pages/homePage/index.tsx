import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components'
import { MainLayout } from 'app/layouts'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <MainLayout pageTitle="HomePage">
      <Button data-testid="logout-btn">{t('logout')}</Button>
    </MainLayout>
  )
}

export default HomePage
