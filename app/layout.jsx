import './globals.css'
// import './dev.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50'>{children}</body>
    </html>
  )
}
