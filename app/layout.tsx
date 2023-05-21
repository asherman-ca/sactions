import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Server Action Sandbox',
	description: 'Server action sandbox',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='h-screen'>
			<body className={`flex flex-col bg-gray-100 ${inter.className}`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
