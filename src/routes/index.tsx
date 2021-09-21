import {Switch, Route} from "react-router-dom"
import {Home, DicasG} from "pages"

const routes =( ) =>{
  return(
      <Switch>
          <Route path ="/DicasGuia"  component ={DicasG} />
          <Route path ="/" component={Home}/>
          
      </Switch>
  )
}

export default routes