

const Header = () => {
  return (
    <div className='w-full h-[60px] bg-gray-100 p-4 flex flex-column justify-end items-center font-semibold'>
        <h2 className="flex-1 text-lg ml-2">MyRole</h2>
        <a href="/tasks" className="no-underline text-sm focus:underline underline-offset-4 decoration-green-500 font-semibold mr-4">Tasks</a>
        <a href="/about" className="no-underline text-sm focus:underline underline-offset-4 decoration-green-500 font-semibold mr-4 ">About</a>
    </div>
  )
}

export default Header