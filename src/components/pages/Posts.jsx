import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [searcheParams, setSearcheParams] = useSearchParams()

    useEffect(() => {
        const QueryDataApi = async () => {
            try {
                axios.defaults.baseURL = 'https://dummyjson.com/posts?limit=10&skip=0'
                const response = await axios.get()
                setPosts(response.data.posts)
            } catch {
                console.log('ERROR')
            }
        }
        QueryDataApi()
    }, [])

    useEffect(() => {
        const QueryDataApi = async () => {
            try {
                axios.defaults.baseURL = `https://dummyjson.com/posts?limit=10&skip=${searcheParams.get('page')}0`
                const response = await axios.get()
                setPosts(response.data.posts)
            } catch {
                console.log('ERROR')
            }
        }
        QueryDataApi()
    }, [searcheParams])
    return (
        <div style={{marginBottom: '10px'}}>
            <div className="container">
                <div className="paginations">
                    <ul style={{display: 'flex', gap: '10px'}}>
                        {[0,1,2,3,4,5].map((pag) => (
                            <li key={pag} onClick={() => setSearcheParams({ page: pag })}
                                style={{border: '1px solid black', padding: '5px 10px', cursor: 'pointer'}}>
                                {pag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {posts.map((post) => (
                        <div key={post.id} className="post">
                            <span>POST {post.id}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
