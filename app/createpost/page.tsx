import NewPostForm from '../components/NewPostForm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { PostType } from '../util/types'

const page = async () => {
	return (
		<div className='p-4'>
			<h1 className='text-xl font-semibold'>Create Post</h1>
			{/* @ts-ignore */}
			<NewPostForm
				aftersave={async (post: PostType) => {
					'use server'
					redirect(`/post/${post.id}`)
				}}
			/>
		</div>
	)
}

export default page
