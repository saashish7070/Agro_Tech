//dependencies
import { useParams } from 'react-router-dom'


//components
import Items from '../components/items'

//stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'

//data
import datas from '../Data/data.json'

const User = () => {
    const { userId } = useParams();

    return <>
    
        <h2> {`hello world  user ${userId}`}</h2>
        <>
            <div className = 'container'>
                {datas.map( 
                    data => {
                        return <>
                            <h2>{`${data.category}`}</h2>
                            <div className = 'row'>    
                                {data.items.map((item)=>{
                                        return <>
                                            <Items key = {item.id} item = {item} nameClass = {'col-md-3 col-6 col-lg-2'}/>
                                        </>
                                    }
                                )}
                            </div>
                        </>
                    }
                )}
            </div>            
        </>
    </>
}

export default User