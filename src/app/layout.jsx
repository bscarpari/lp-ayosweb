import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ayos',
    default: 'Ayos - Desenvolvemos para inovar, criamos para transformar',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="pt-BR" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
