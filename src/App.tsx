import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './index.css'

const defaultPosts = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://picsum.photos/128/128?random=1',
         name: 'Carlos',
         role: 'Desenvolvedor web',
      },
      content:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam quidem necessitatibus vitae nulla adipisci suscipit dolore culpa laborum soluta. Veniam aliquam consequatur aperiam quo exercitationem repellendus tenetur quasi dicta!',
      publishedAt: new Date('2023-08-15 20:00:00'),
   },
   {
      id: 2,
      author: {
         avatarUrl: 'https://picsum.photos/128/128?random=2',
         name: 'Giovanna',
         role: 'Advogada',
      },
      content:
         'Nihil cupiditate cumque iusto deleniti, nulla optio vel quo, distinctio beatae eum earum, excepturi obcaecati sint sapiente magni tempora blanditiis suscipit similique asperiores dicta minima officia animi quos! Necessitatibus, dignissimos?',
      publishedAt: new Date('2023-08-06 12:30:00'),
   },
]

export function App() {
   return (
      <>
         <Header />
         <div className="grid md:grid-cols-[256px_auto] gap-8 items-start max-w-6xl my-8 mx-auto px-4">
            <Sidebar />
            <main>
               {defaultPosts.map((post) => {
                  return (
                     <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
                  )
               })}
            </main>
         </div>
      </>
   )
}
