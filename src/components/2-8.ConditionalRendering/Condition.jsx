import React from 'react'

function UserGreeting(props) {
  // 이름이 없으면 이름을 보여주지 않음
  // 만약 count가 0이라면 Count가 출력되지 않음
    // 숫자 0을 false로 인식하면서 0을 출력하게됨
    // return <h1>{props.name && `${props.name},`} Welcome {props.count && `Count: ${props.count}`}</h1>
  // 아래와 같이 Boolean으로 감싸야함  
  return <h1>{props.name && `${props.name},`} Welcome {Boolean(props.count) && `Count: ${props.count}`}</h1>
}

function GuestGreeting(props) {
    return <h1>Sign Up first</h1>
}

function Greeting(props) {
    return props.isLoggedIn ? 
    <UserGreeting name="Kim" count={0} />
    : <GuestGreeting />;
}

export default function Condition() {
    const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
