import { Avatar } from './Avatar'
import { Comment } from './Comment'

export function Post() {
   return (
      <article className="p-10 mb-8 bg-gray-700 rounded-lg">
         <header className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
               <Avatar src="https://avatars.githubusercontent.com/u/25375556?v=4" />
               <div className="flex flex-col">
                  <p className="font-semibold text-gray-100">Ivander Dias</p>
                  <p className="text-sm">Web Developer</p>
               </div>
            </div>
            <time dateTime="2023-05-11 18:30:12" title="11 de Maio às 18:30" className="text-sm text-gray-400">
               Publicado há 1h
            </time>
         </header>
         <div>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem, iste quos, repellendus
               voluptatem dolor quae nemo numquam, eligendi earum esse ab. Explicabo debitis impedit aliquam quibusdam
               nulla quos id?
            </p>
         </div>
         <form className="w-full mt-6 pt-6 border-t border-t-gray-600">
            <p className="font-semibold text-gray-100 mb-3">Deixe seu feedback</p>
            <textarea
               placeholder="Deixe um comentário"
               className="w-full p-4 bg-gray-800 text-gray-400 text-sm resize-none border-none outline-none rounded-lg focus:outline-1 focus:outline-gray-400"
            />
            <button type="submit" className="py-2 px-4 text-xs mt-3 border text-red-400 border-red-400 rounded-lg">
               Publicar
            </button>
         </form>
         <div className="">
            <Comment />
            <Comment />
            <Comment />
         </div>
      </article>
   )
}
