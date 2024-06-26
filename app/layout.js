import "../style/global.css";
import Navigation from "../components/navigation"
export const metadata = {
  title: {
    template: "%s | Next JS",
    default: "Next JS"
  },
  description: 'Generated by Next.js',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
