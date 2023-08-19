import logo from '../assets/logo.svg'

export function Header() {
   return (
      <header className="flex gap-2 items-center justify-center py-5 bg-gray-900">
         <img src={logo} className="block w-auto h-12" />
         <p className="font-semibold text-lg text-red-500">Feed</p>
      </header>
   )
}
