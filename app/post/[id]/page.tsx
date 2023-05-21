import { prisma } from '@/prisma/Prisma'
import { PostType } from '@/app/util/types'

const page = async ({ params }: { params: { id: string } }) => {
	const post: PostType | null = await prisma.post.findUnique({
		where: { id: Number(params.id) },
	})

	return (
		<div className='p-4 flex flex-col gap-4'>
			<h1 className='font-semibold'>{post?.title}</h1>
			<p className='text-gray-500'>{post?.content}</p>
		</div>
	)
}

export default page
