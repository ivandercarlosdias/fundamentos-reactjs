import { useState } from 'react'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
   const handleDeleteComment = () => {
      onDeleteComment(content)
   }

   const [likeCount, setLikeCount] = useState(0)

   const handleLikeComment = (value) => {
      setLikeCount(likeCount + value)
   }

   return (
      <div className="mt-6 flex gap-4">
         <Avatar hasBorder={false} size="small" src="https://avatars.githubusercontent.com/u/25375556?v=4" />
         <div className="flex-1">
            <div className="p-4 mb-2 bg-gray-600 rounded-lg">
               <div className="flex items-start justify-between mb-4">
                  <div>
                     <p className="text-sm">Ivander Carlos Dias</p>
                     <time dateTime="2023-05-11 18:30:12" title="11 de Maio às 18:30" className="text-xs text-gray-400">
                        Cerca de 1h atrás
                     </time>
                  </div>
                  <button onClick={handleDeleteComment}>
                     <Trash size={20} className="text-gray-500 border-none rounded-sm hover:text-red-400" />
                  </button>
               </div>
               <p className="text-gray-500">{content}</p>
            </div>
            <button
               onClick={() => handleLikeComment(1)}
               className="flex items-center text-xs text-gray-500 hover:text-cyan-500"
            >
               <ThumbsUp className="mr-2" />
               <p>Aplaudir</p>
               <span className="ml-2 before:pr-2 before:content-['•']">{likeCount}</span>
            </button>
         </div>
      </div>
   )
}