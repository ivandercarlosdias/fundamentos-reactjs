import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './index.css'

import { database } from './database'

export function App() {
   return (
      <>
         <Header />
         <div className="grid md:grid-cols-[256px_auto] gap-8 items-start max-w-6xl my-8 mx-auto px-4">
            <Sidebar />
            <main>
               {database.map((post) => {
                  return (
                     <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
                  )
               })}
            </main>
         </div>
      </>
   )
}
