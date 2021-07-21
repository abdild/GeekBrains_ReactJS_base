import './css/Message.css';

// export const Message = (props) => {
//     return (
//         <div className="MessageBlock">
//             <p className="MessageText">{props.text}</p>
//         </div>
//     )
// }

function Message(props) {
    return (
        <div className="MessageBlock">
            <p className="MessageText">{props.text}</p>
        </div>
    )
}

export default Message;