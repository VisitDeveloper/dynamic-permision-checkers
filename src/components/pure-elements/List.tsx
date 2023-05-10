import React from 'react'


export interface ConfigListProps {
  isListed?: boolean
}


interface ListProps {
  config?: ConfigListProps
}

 function List(props:ListProps) {
  return (
    <>
    { props?.config?.isListed! ? <div>Form listed True</div> : <div>Form listed false</div> }
    </>
  )
}
export default List