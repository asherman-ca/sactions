import { prisma } from '@/prisma/Prisma'
import NewPostForm from './components/NewPostForm'
import PostList from './components/PostList'
import { PostType } from '@/app/util/types'
import { revalidatePath } from 'next/cache'

const page = async () => {
	const posts: PostType[] = await prisma.post.findMany({
		orderBy: { id: 'desc' },
	})

	return (
		<div className='flex flex-col p-4 gap-2'>
			<h1 className='text-xl font-semibold'>All Posts</h1>
			<PostList posts={posts} />
			{/* this key might not be necessary */}
			<div key={`${posts[0]?.id ?? '1'}`} className='mt-4'>
				<p className='text-xl font-semibold'>Quick Add</p>
				{/* @ts-ignore */}
				<NewPostForm
					aftersave={async () => {
						'use server'
						revalidatePath('/')
					}}
				/>
			</div>
		</div>
	)
}

export default page
