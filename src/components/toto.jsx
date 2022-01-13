import React from "react";


const Toto = props => {
    const btnReponseToto = props.lestate.messageMaman !== null ? (<button onClick={props.totov}>réponse</button>) :  (<button disabled>réponse</button>);
    
    return(
        <div>
           <h2>{props.name}</h2>
           {btnReponseToto}
           <p>{props.lestate.messageToto}</p>
        </div>
    )
}


export default Toto