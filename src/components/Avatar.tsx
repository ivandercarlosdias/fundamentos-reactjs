interface AvatarProps {
   hasBorder?: boolean
   src: string
   size?: string
}

export function Avatar({ hasBorder = true, src, size }: AvatarProps) {
   return (
      <img
         src={src}
         className={`rounded-lg ${hasBorder ? 'border-4 border-gray-800 outline outline-1 outline-red-400' : ''}
         ${size === 'small' ? 'w-10 h-10' : 'w-14 h-14'}`}
      />
   )
}
