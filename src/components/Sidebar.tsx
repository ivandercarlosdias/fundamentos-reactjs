import { Avatar } from './Avatar'

import { PencilSimpleLine } from '@phosphor-icons/react'

import coverPlaceholder from '../assets/user-cover-placeholder.jpg'

export function Sidebar() {
   return (
      <aside className="overflow-hidden rounded-lg bg-gray-700">
         <img src={coverPlaceholder} className="w-full h-20 object-cover" />
         <div className="flex flex-col items-center py-4 px-6 -mt-10">
            <Avatar src="https://avatars.githubusercontent.com/u/25375556?v=4" />
            <p className="mt-4 font-semibold text-gray-100">Ivander Dias</p>
            <p className="text-sm">Web Developer</p>
         </div>
         <hr className="w-full border-t-2 border-t-gray-800 border-b border-b-[#232633]" />
         <div className="p-6">
            <a
               href="#"
               className="flex items-center justify-center gap-2 py-2 px-8 bg-red-500 text-white text-sm no-underline rounded-lg transition-colors hover:bg-red-400"
            >
               <PencilSimpleLine size={18} />
               Editar seu perfil
            </a>
         </div>
      </aside>
   )
}
