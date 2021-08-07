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
// export default props => (
//     <div className="MessageBlock">
//         <p className="MessageText">{props.text}</p>
//         messageList.map((message) => <div>{message}</div>)
//     </div>
// )

// export function Message(props) {
//     // const [messages, setMessages] = useState([
//     //     "message 1",
//     //     "message 2",
//     //     "message 3",
//     // ]);
//     return props.text.map((message) =>
//         <div className="MessageBlock">
//             <p className="MessageText">{message}</p>
//         </div>)
// }

// export default Message;

// export default props => (
//     props.text.map((message) =>
//         <div className="MessageBlock">
//             <div className="MessageSubText">{message.author} {message.id}</div>
//             <p className="MessageText">{message.text}</p>
//         </div>)
// )

export const Message = ({ text, author, id }) => (
    <div className="MessageBlock">
        <div className="MessageSubText">{author} {id}</div>
        <p className="MessageText">{text}</p>
    </div>
);

