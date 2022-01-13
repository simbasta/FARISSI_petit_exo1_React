import React, {Component} from "react";
import Toto from "./toto";




class Maman extends Component {
    
    state = {
        messageMaman: null,
        messageToto: null,
    }

    

    orderMaman = () => {
        this.setState({
            messageMaman: "va ranger t'as chambre"
        })
    }

    Totorepond = () => {
        this.setState({
            messageToto: 'Ok Maman'
        })
    }
    
    
    render(){
        return(
            <div>
                <h1>maman</h1>
                <button onClick={this.orderMaman}>ordre de la mere</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Toto name='Toto' lestate={this.state} totov={this.Totorepond} />
                {/* <p>{this.state.messageToto}</p> */}
            </div>
        )
    }
}


export default Maman