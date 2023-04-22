import { Header } from "../components/Header"
import { useMails } from "../context/MailContext"
import { Link } from "react-router-dom";

export const Spam = () => {
    const {mailState, mailDispatch} = useMails();
    return (
        <div className="inbox">
            <Header />
            <div className="content">
                <h1>Spam Folder</h1>
                {mailState.spammed.length === 0 && <h3>No Spam Messages.</h3>}
                <ul>
                    {mailState.spammed.map(mail => (
                        <>
                        <li key={mail.mId} className="lists" style={{backgroundColor: mail.unread ? '#f5f5f4' : 'white', color: mail.unread ? 'gray' : 'black'}}>
                            <h4>{mail?.subject}</h4>
                            <p>{mail?.content}</p>
                            <div className="details">
                                <Link  to={`/details/${mail.mId}`}>View Details</Link>
                                <button style={{color: 'green'}} onClick={() => mailDispatch({type: 'notSpam', payload: mail.mId})}>Not Spam</button>
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