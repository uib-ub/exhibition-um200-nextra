import { NotFoundPage } from 'nextra-theme-docs'
 
export default function NotFound() {
  return (
    <NotFoundPage content="Send inn en sak" labels="broken-link">
      <h1 className="text-2xl font-bold">Siden ble ikke funnet</h1>
    </NotFoundPage>
  )
}