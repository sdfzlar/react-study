import React from 'react'
import ThanksDialog from './ThanksDialog'
import { createPortal } from 'react-dom'

export default function Example() {
  const Portal = (props) => {
    return createPortal(props.children, document.getElementById('portal'));
  };

  return ( // Portal 아래 있으면 index.html에 추가한 portal div 아래로 붙게 됨  (단, App.css 속성은 적용 안받기 때문에 별도 적용 필요) 
    // div 이벤트 역시 Portal에도 동작
    <div onClick={() => console.log('div click')}> 
      <Portal> 
        <ThanksDialog />
      </Portal>
      <div style={{ position: "absolute" }}>
        <button>Hi ~~!!</button>
      </div>
      
    </div>
  )
}
