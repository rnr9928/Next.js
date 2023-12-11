import './globals.css'


export const metadata = {
  title: 'tutorials Next',
  description: 'Guk',
}

export default async function RootLayout({ children }) {
const resp = await fetch("http://localhost:9999/topics", {cache: 'no-store'})
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
        <ul>
          <li><a href='/create'>Create</a></li>
          <li><a href='/create'>Update</a></li>
          <li><input type="button" value="delete"></input></li>
        </ul>
        </body>
    </html>
  )
}
