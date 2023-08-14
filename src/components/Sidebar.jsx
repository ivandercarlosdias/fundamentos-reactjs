import { PencilSimpleLine } from '@phosphor-icons/react'

import coverPlaceholder from '../assets/user-cover-placeholder.jpg'

export function Sidebar() {
   return (
      <aside className="overflow-hidden rounded-lg bg-gray-700">
         <img src={coverPlaceholder} className="w-full h-20 object-cover" />
         <div className="flex flex-col items-center py-4 px-6">
            <img
               src="https://avatars.githubusercontent.com/u/25375556?v=4"
               className="w-14 h-14 -mt-10 mb-4 rounded-lg border-4 border-gray-800 outline outline-red-400"
            />
            <p className="font-semibold text-gray-100">Ivander Dias</p>
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
