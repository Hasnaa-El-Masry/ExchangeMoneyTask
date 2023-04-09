import 'antd/dist/reset.css'
import './styles/main.scss'
import { Providers } from '@/redux/provider'
export const metadata = {
  title: 'Currency Exchange Task',
  description: 'Calculate currency exchange between cuntries',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
