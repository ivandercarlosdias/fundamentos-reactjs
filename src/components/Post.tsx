import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

interface Author {
   name: string
   role: string
   avatarUrl: string
}

interface PostProps {
   author: Author
   publishedAt: Date
   content: string
}

export function Post({ author, publishedAt, content }: PostProps) {
   const publishedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
      locale: ptBR,
   })

   const publishedToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
   })

   const [comments, setComments] = useState<string[]>([])
   const [newCommentText, setNewCommentText] = useState<string>('')

   const handleFormSubmit = (event: FormEvent) => {
      event.preventDefault()

      setComments([...comments, newCommentText])
      setNewCommentText('')
   }

   const handleNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setNewCommentText(event.target.value)
   }

   const deleteComment = (commentToDelete: string) => {
      const commentsWithoutDeletedComement = comments.filter((comment) => {
         return comment !== commentToDelete
      })

      setComments(commentsWithoutDeletedComement)
   }

   const isNewCommentEmpty = newCommentText.length === 0

   return (
      <article className="p-10 mb-8 bg-gray-700 rounded-lg">
         <header className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
               <Avatar src={author.avatarUrl} />
               <div className="flex flex-col">
                  <p className="font-semibold text-gray-100">{author.name}</p>
                  <p className="text-sm">{author.role}</p>
               </div>
            </div>
            <time dateTime={publishedAt.toISOString()} title={publishedFormatted} className="text-sm text-gray-400">
               {publishedToNow}
            </time>
         </header>
         <div>
            <p>{content}</p>
         </div>
         <form onSubmit={handleFormSubmit} className="w-full mt-6 pt-6 border-t border-t-gray-600">
            <p className="font-semibold text-gray-100 mb-3">Deixe seu feedback</p>
            <textarea
               onChange={handleNewComment}
               name="comment_input"
               value={newCommentText}
               placeholder="Deixe um comentário"
               className="w-full p-4 bg-gray-800 text-gray-400 text-sm resize-none border-none outline-none rounded-lg focus:outline-1 focus:outline-gray-400"
               required
            />
            <button
               type="submit"
               className="py-2 px-4 text-xs mt-3 border text-red-400 border-red-400 rounded-lg disabled:opacity-40 disabled:cursor-default"
               disabled={isNewCommentEmpty}
            >
               Publicar
            </button>
         </form>
         <div className="">
            {comments.map((comment) => {
               return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
            })}
         </div>
      </article>
   )
}
