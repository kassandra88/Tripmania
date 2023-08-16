import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'app/store'
import { FC, ReactNode, Suspense } from 'react'

import '../matchMedia'

type Props = {
  component: ReactNode
}

jest.mock('react-i18next', () => ({
  // This mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    ...originalModule,
    useLocation: () => ({
      pathname: '/',
    }),
    useParams: () => jest.fn(),
    useHistory: () => jest.fn(),
    useNavigate: () => jest.fn(),
  }
})

export const AllTheProviders: FC<Props> = ({ component }) => {
  return (
    <Provider store={store}>
      <Suspense fallback={'loading...'}>
        <BrowserRouter>{component}</BrowserRouter>
      </Suspense>
    </Provider>
  )
}
