import 'antd/dist/reset.css'
import './styles/main.scss'
export const metadata = {
  title: 'Currency Exchange Task',
  description: 'Calculate currency exchange between cuntries',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
