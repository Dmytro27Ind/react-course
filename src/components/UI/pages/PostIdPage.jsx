import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../../../API/PostService'
import { useFetching } from '../../../hooks/useFetching'
import Loader from '../Loader/Loader'

function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
        <h1>Page of post with ID = {params.id}</h1>
        {isLoading
          ? <Loader/>
          : <div>{post?.id}. {post?.title}</div>
        }
    </div>
  )
}

export default PostIdPage