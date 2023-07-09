import React from 'react'
import CommentItem from './CommentItem';


export default function Comments({commentList}) {
  return (
    <div>
        {commentList.map(comment => 
            <CommentItem
                key={comment.id}
                title={comment.title}
                content={comment.content}
                likes={comment.likes}
            />
        )}
    </div>
    );
}