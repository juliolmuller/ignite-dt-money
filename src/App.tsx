import { Dashboard } from '~/components/Dashboard'
import { Header } from '~/components/Header'
import { GlobalStyle } from '~/styles/_global'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  )
}
