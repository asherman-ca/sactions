import { prisma } from '@/prisma/Prisma'

const NewPostForm = ({ aftersave }: { aftersave: any }) => {
	const handleSubmit = async (e: any) => {
		'use server'
		const { title, content } = Object.fromEntries(e)
		const post = await prisma.post.create({
			data: {
				title: title,
				content: content,
			},
		})
		await aftersave(post)
	}

	return (
		<form action={handleSubmit} className='w-full mt-2 space-y-4'>
			<div>
				<input
					type='text'
					className='w-full p-1 outline-none border border-gray-200'
					placeholder='Title'
					name='title'
					required
				/>
			</div>
			<div>
				<input
					type='text'
					className='w-full p-1 outline-none border border-gray-200'
					placeholder='Content'
					name='content'
					required
				/>
			</div>
			<div className='text-left'>
				<button
					type='submit'
					className='font-medium bg-sky-500 text-white px-3 py-1'
				>
					Create post
				</button>
			</div>
		</form>
	)
}

export default NewPostForm
