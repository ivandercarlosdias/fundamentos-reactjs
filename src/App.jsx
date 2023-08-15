import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './index.css'

export function App() {
   return (
      <>
         <Header />
         <div className="grid grid-cols-[256px_auto] gap-8 items-start max-w-6xl my-8 mx-auto px-4">
            <Sidebar />
            <main>
               <Post author="Ivander" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
               <Post
                  author="Giovanna"
                  content="Quasi minima illo sint praesentium expedita maiores, nisi, aliquam dolor voluptatibus aspernatur voluptatem rem quibusdam minus soluta."
               />
            </main>
         </div>
      </>
   )
}
