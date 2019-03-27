var config=require('./config.json');
import React,{component} from 'react'
class Greeter extends Component{
    render(){
        return(
            <div>
                {config.greetText}
            </div>
        )
    }
}
export default Greeter
// module.exports=function () {
//     var greet=document.createElement('div');
//     greet.textContent=config.greetText;
//     return greet;
// };