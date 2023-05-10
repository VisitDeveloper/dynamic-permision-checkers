import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ListOfUsers from './req/listOfUsers'
import PermissionsGate from 'components/Permision';
import { SCOPES } from 'components/Permision/permission-maps';
import {CreateObjectLiterals} from 'utils/pure-function/object-literals'
import {useEffect} from 'react'
import DynamicObjectLiterals , {Type_List_Component} from 'components/DynamicGeneration/DynamicObjectLiterals'


const queryClient = new QueryClient()

const objTest = {
  form :'form',
  list :'list'
}

export default function MyApp() {


  const handleClick = () =>{
    console.log('handle click');
  }

  useEffect(() => {
    console.log("objectLitterals" , CreateObjectLiterals(objTest , 'list' , 'list'))
  }, [])
  
  const config = {
    isListed : true
  }


  return (
    <>
     <QueryClientProvider client={queryClient}>
        <ListOfUsers/>
     </QueryClientProvider>
    <PermissionsGate  
        scopes={[SCOPES.canCreate!]} 
        errorProps={{ disabled: true as boolean } as never}
        RenderError={() => <p>شما دسترسی ایجاد ندارید</p>}
        > 
      <button onClick={() => handleClick()}>
        click
      </button>
    </PermissionsGate> 

    <DynamicObjectLiterals 
      type={Type_List_Component.List}
      configKey={config}
    />
    </>
  );
}

