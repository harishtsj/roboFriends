import React from "react";

/*
    Class Component
*/

// class Hello extends Component {
//     render() {
//         return (
//             <div class = 'f1 tc'>
//                 <h1>Hello World</h1>
//                 <p> { this.props.greet }</p>
//             </div>
//         );
//     }
// }

/*
    Functional Component
*/

//the props are destructured and passed

const Hello = ( { greet, come }) => {
    return (
        <div className = 'f1 tc'>
            <h1>Hello World</h1>
            <p> { greet }</p>
            <p> { come }</p>
        </div>
    );
}

// OR

//without De-Structuring the props

// const Hello = (props) => {
//     return (
//         <div className = 'f1 tc'>
//             <h1>Hello World</h1>
//             <p> { props.greet }</p>
//             <p> { props.come }</p>
//         </div>
//     );
// }

export default Hello;