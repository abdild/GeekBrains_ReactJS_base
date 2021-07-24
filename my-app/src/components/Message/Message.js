import './css/Message.css';

// Вариант 1
// const Message = (props) => {
//     return (
//         <div className="MessageBlock">
//             <p className="MessageText">{props.text}</p>
//         </div>
//     )
// }
// export default Message;

// Вариант 2
// function Message(props) {
//     return (
//         <div className="MessageBlock">
//             <p className="MessageText">{props.text}</p>
//         </div>
//     )
// }
// export default Message;


// Вариант 3
export default props => (
    <div className="MessageBlock">
        <p className="MessageText">{props.text}</p>
    </div>
)