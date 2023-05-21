'use client'
import { motion } from 'framer-motion'
import { PostType } from '../util/types'

import React from 'react'

const PostList = ({ posts }: { posts: PostType[] }) => {
	return (
		<div className='flex flex-col'>
			{posts.length === 0 && <div>No posts</div>}
			{posts.map((post) => (
				<motion.div
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='py-2'
					key={post.id}
				>
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</motion.div>
			))}
		</div>
	)
}

export default PostList
