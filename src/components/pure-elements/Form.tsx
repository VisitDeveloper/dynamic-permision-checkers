
export interface ConfigFormProps {
  isFormed?: boolean
}


interface FormProps {
  config?: ConfigFormProps
}

export default function Form(props : FormProps) {
  return (
    <>
    {props.config!.isFormed ? <div>Form listed True</div> : <div>Form listed false</div>}
    </>
    
  )
}
