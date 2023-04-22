import { Header } from "../components/Header"
import { useMails } from "../context/MailContext"
import { Link } from "react-router-dom";

export const Trash = () => {
    const {mailState, mailDispatch} = useMails();
    return (
        <div className="inbox">
            <Header />
            <div className="content">
                <h1>Trash Box</h1>
                {mailState.deleted.length === 0 && <h3>Nothing in Trash.</h3>}
                <ul>
                    {mailState.deleted.map(mail => (
                        <>
                        <li key={mail.mId} className="lists" style={{backgroundColor: mail.unread ? '#f5f5f4' : 'white', color: mail.unread ? 'gray' : 'black'}}>
                            <h4>{mail?.subject}</h4>
                            <p>{mail?.content}</p>
                            <div className="details">
                                <Link to={`/details/${mail.mId}`}>View Details</Link>
                                <button style={{color: 'red'}} onClick={() => mailDispatch({type: 'restore', payload: mail.mId})}>Restore</button>
                            </div>
                            
                        </li>
                        <hr />
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}