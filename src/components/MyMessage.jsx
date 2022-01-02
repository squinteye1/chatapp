import parse from "html-react-parser"; // To parse the html from the chat app

const MyMessage = ({ message }) => {
    console.log(message);
    if(message?.attachments?.length > 0) {
        return(
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right'}}
            />
        )
    }
   // const messageString = message.text;
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
           {parse(message.text)}
        </div>
    )
}

export default MyMessage
