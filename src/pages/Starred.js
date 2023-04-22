import { useMails } from "../context/MailContext";
import {Header} from '../components/Header'
import { Link } from "react-router-dom";

export const Starred = () => {
    const {starred, mailDispatch} = useMails();
    return (
        <div className="inbox">
            <Header />
            <div className="content">
                <h1>Starred</h1>
                {starred.length === 0 && <h3>No Starred Messages.</h3>}
                <ul>
                    {starred.map(mail => (
                        <>
                        <li key={mail.mId} className="lists" style={{backgroundColor: mail.unread ? '#f5f5f4' : 'white', color: mail.unread ? 'gray' : 'black'}}>
                            <div className="header">
                                <h4>{mail?.subject}</h4>
                                <button onClick={() => mailDispatch({type: 'star', payload: mail.mId})}><i style={{color: mail.isStarred ? 'rgb(253, 213, 15)' : 'rgb(198, 193, 193)'}} class="fa-solid fa-star fa-lg"></i></button>
                            </div>
                            <p>{mail?.content}</p>
                            <div className="details">
                                <Link to={`/details/${mail.mId}`}>View Details</Link>
                                <div className='buttons'>
                                    <button style={{color: 'red'}} onClick={() => mailDispatch({type: 'delete', payload: mail.mId})}><i class="fa-solid fa-trash-can"></i></button>
                                    <button style={{color: 'orange'}} onClick={() => mailDispatch({type: 'markRead', payload: mail.mId})}>Mark as {mail.unread ? 'Unread' : 'Read'}</button>
                                    <button style={{color: 'green'}}  onClick={() => mailDispatch({type: 'spam', payload: mail.mId})}>Report Spam</button>
                                </div>
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