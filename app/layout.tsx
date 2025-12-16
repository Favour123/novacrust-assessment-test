
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google' 
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
    subsets: ["latin"],
    variable: '--font-geist-sans', 
});
const geistMono = Geist_Mono({ 
    subsets: ["latin"],
    variable: '--font-geist-mono', 
});

export const metadata: Metadata = {
    title: 'NOVACRUST', 
    description: 'Cryptocurrency to Cash and back.', 
    icons: {
        icon: [
            {
                url: '/BlackTrans.png',
                media: '(prefers-color-scheme: light)',
            }
        ],
        shortcut: '/BlackTrans.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        // 2. Apply font variables to the html tag
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            {/* 3. Use the font variable for the body element */}
            <body className={`font-sans antialiased`}> 
                {children}
                <Analytics />
            </body>
        </html>
    )
}
