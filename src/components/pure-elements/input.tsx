import React, { ForwardedRef, forwardRef } from 'react'

interface PropsInput{
 onChange?: (e : any) => void;
 value?: any
} 

 const Input = forwardRef((props :PropsInput ,  ref: ForwardedRef<HTMLInputElement | null> ) : JSX.Element =>  {
  return (
    <div>
        <input ref={ref} type={'text'} value={props.value} onChange={props.onChange} />
    </div>
  )
})

export default Input