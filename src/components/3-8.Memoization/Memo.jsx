import React,  { useEffect, useState } from 'react'
import Comments from './Comments';


const commentList = [
    { title: "comment1", content: "test1", likes: 1 },
    { title: "comment2", content: "test2", likes: 1 },
    { title: "comment3", content: "test3", likes: 1 }
];
export default function Memo() {
const [comments, setComments] = useState(commentList);

useEffect(() => {
    const interval = setInterval(() => {
        setComments((prevComments) => [
            ...prevComments,
            {
                title: `comment${prevComments.length + 1}`,
                content: `test${prevComments.length + 1}`,
                likes: 1
            }
        ])
    }, 5000);

    return () => {
        clearInterval(interval);
    }
}, []);

  return <Comments commentList={comments} />;
}
