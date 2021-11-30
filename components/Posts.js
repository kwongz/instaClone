import React from 'react'
import Post from './Post'

const posts = [
    {
        id:'123',
        username: "kwongz",
        userImg:"http://www.sherrida.com/divisions/photos/2315/bigs/p_118645_1727125192.jpg",
        img: 'https://images.pexels.com/photos/9676210/pexels-photo-9676210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption: 'Sunset'
    },
    {
        id:'123',
        username: "kwongz",
        userImg:"http://www.sherrida.com/divisions/photos/2315/bigs/p_118645_1727125192.jpg",
        img: 'https://images.pexels.com/photos/6477259/pexels-photo-6477259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption: 'Sunset'
    }
]

function Posts() {
    return (
        <div>
            {/* individual Post*/}
            {
                posts.map(post => {
                    return <Post 
                        key={post.id}
                        username={post.username}
                        id={post.id}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                })
            }
        </div>
    )
}

export default Posts
