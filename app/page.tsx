import { prisma } from '@/prisma/Prisma'
import NewPostForm from './components/NewPostForm'

const page = async () => {
	const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } })

	return (
		<div className='flex flex-col p-4 gap-2'>
			<h1 className='text-xl font-semibold'>All Posts</h1>
			<div className='flex flex-col'>
				{posts.length === 0 && <div>No posts</div>}
				{posts.map((post) => (
					<div className='py-2' key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</div>
				))}
			</div>
			{/* @ts-ignore */}
			<div key={`${posts[0]?.id ?? '1'}`}>
				<p>Quick Add</p>
				<NewPostForm />
			</div>
		</div>
	)
}

export default page
