import React, { useCallback } from 'react'
import CommentItem from './CommentItem';


export default function Comments({commentList}) {
    const handleClick = useCallback(() => { // 특정 함수를 memoization
        console.log('눌림');
    }, []);
  return (
    <div>
        {commentList.map(comment => 
            <CommentItem
                key={comment.id}
                title={comment.title}
                content={comment.content}
                likes={comment.likes}
                onClick={handleClick} // 만약 handleClick에 comment.title과 같은 변수를 넘기면 memo가 동작하지 않음
                // Bug : inline함수를 넣으면 새로 렌더링 될때마다 새로운 함수가 만들어지므로 memo가 동작안함, const 변수로 빼도 마찬가지
            />
        )}
    </div>
    );
}