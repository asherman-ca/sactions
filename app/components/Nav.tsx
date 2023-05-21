import Link from 'next/link'

const Nav = () => {
	return (
		<div className='flex gap-4 bg-gray-100 p-4 font-semibold text-gray-500'>
			<Link href='/'>Home</Link>
			<Link href='/createpost'>Post</Link>
		</div>
	)
}

export default Nav
