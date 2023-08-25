import { useState } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import { Avatar } from './Avatar'

interface CommentProps {
   content: string
   onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
   const handleDeleteComment = () => {
      onDeleteComment(content)
   }

   const [likeCount, setLikeCount] = useState(0)

   const handleLikeComment = (value: number) => {
      setLikeCount(likeCount + value)
   }

   const publishedNow = format(new Date(), "d 'de' LLLL 'às' HH:mm", {
      locale: ptBR,
   })

   return (
      <div className="mt-6 flex gap-4">
         <Avatar hasBorder={false} size="small" src="https://picsum.photos/128/128?random=3" />
         <div className="flex-1">
            <div className="p-4 mb-2 bg-gray-600 rounded-lg">
               <div className="flex items-start justify-between mb-4">
                  <div>
                     <p className="text-sm">Ivander</p>
                     <time dateTime="2023-05-11 18:30:12" title="11 de Maio às 18:30" className="text-xs text-gray-400">
                        {publishedNow}
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
               className={`flex items-center text-xs text-gray-500 hover:text-cyan-500 ${
                  likeCount ? 'text-cyan-500' : ''
               }`}
            >
               <ThumbsUp className="mr-2" />
               <p>Aplaudir</p>
               <span className="ml-2 before:pr-2 before:content-['•']">{likeCount}</span>
            </button>
         </div>
      </div>
   )
}
