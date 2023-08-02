import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import MainLayout from 'shared/layouts/mainLayout'

import { Button } from 'shared/ui/button'

const HomePage: FC = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <Button>{t('logout')}</Button>
    </MainLayout>
  )
}

export default HomePage
