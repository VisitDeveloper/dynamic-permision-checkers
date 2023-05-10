import Form , {ConfigFormProps}  from 'components/pure-elements/Form';
import List , {ConfigListProps} from 'components/pure-elements/List';
import { CreateObjectLiterals } from 'utils/pure-function/object-literals'
import { Fragment } from 'react';


export enum Type_List_Component {
    Form = 'Form',
    List = 'List',
}

interface ObjectTest {
    Form: JSX.Element;
    List: JSX.Element;
}

interface DynamicObjectLiteralsProps {
    type: Type_List_Component;
    configKey : ConfigFormProps | ConfigListProps
}


function DynamicObjectLiterals(props:DynamicObjectLiteralsProps) {
    const objTest: ObjectTest = {
        Form: <Form config={props?.configKey! as ConfigFormProps}/>,
        List: <List config={props?.configKey! as ConfigListProps}/>
    };

    const FinalObjectRendered : JSX.Element = CreateObjectLiterals(objTest, props.type, Type_List_Component.Form) 
    return (
        <Fragment>
            {FinalObjectRendered}
        </Fragment>
    )
}
export default DynamicObjectLiterals