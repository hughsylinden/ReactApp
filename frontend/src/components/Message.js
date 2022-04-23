import React from 'react'

function Message({message}) {
  const {name,body} = message
  return (
    <>{name} : {body}</>
  )
}

export default Message