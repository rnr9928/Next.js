import { Control } from './Control'
import './globals.css'


export const metadata = {
  title: 'tutorials Next',
  description: 'Guk',
}

export default async function RootLayout({ children }) {
const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+"topics", {cache: 'no-store'})
const topics = await resp.json()

  return (
    <html>
      <body>
        <h1><a href='/'>WEB</a></h1>
        <ol>
         {topics.map((topic)=>{
          return <li key={topic.id}><a href={'/read/${topic.id}'}>{topic.title}</a></li>
         })}
        </ol>
        {children}
        <Control/>
        </body>
    </html>
  )
}
