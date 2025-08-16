import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from "@/src/theme/theme";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'Malki New | Counsellor & Family Therapist',
    description: 'Professional counselling and family therapy services. Providing compassionate, evidence-based support for individuals, couples, and families.',
    keywords: 'counsellor, therapist, family therapy, mental health, counselling',
}

export default function RootLayout({ children } : {
    children: React.ReactNode
}){
    return (
        <html lang="en">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
        <body className={inter.className}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
