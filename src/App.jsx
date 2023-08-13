import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {
   return (
      <>
         <Header />
         <Post author="Ivander" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
         <Post
            author="Giovanna"
            content="Quasi minima illo sint praesentium expedita maiores, nisi, aliquam dolor voluptatibus aspernatur voluptatem rem quibusdam minus soluta."
         />
      </>
   )
}
