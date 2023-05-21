import { prisma } from '@/prisma/Prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const NewPostForm = async () => {
	const handleSubmit = async (e: any) => {
		'use server'
		const { title, content } = Object.fromEntries(e)
		const post = await prisma.post.create({
			data: {
				title: title,
				content: content,
			},
		})
		revalidatePath('/')
	}

	return (
		<div className='p-4'>
			<form action={handleSubmit}>
				<div>
					<input
						type='text'
						className='w-full'
						placeholder='Title'
						name='title'
						required
					/>
				</div>
				<div>
					<input
						type='text'
						className='w-full'
						placeholder='Content'
						name='content'
						required
					/>
				</div>
				<button type='submit'>Create post</button>
			</form>
		</div>
	)
}

export default NewPostForm
