import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { useMails } from "../context/MailContext";
import { Link } from "react-router-dom";

export const Inbox = () => {
    const {mailDispatch, filterCheckData, unRead} = useMails();
    return (
        <div className="inbox">
            <Header />
            <div className="content">
                <h1><i class="fa-regular fa-envelope"></i> Mail Box</h1>
                <Filters />
                <h3 style={{textAlign: 'left', paddingLeft: '60px'}}>Unreads: {unRead}</h3>
                <ul>
                    {filterCheckData.map(mail => (
                        <>
                        <li key={mail.mId} style={{backgroundColor: mail.unread ? '#f5f5f4' : 'white', color: mail.unread ? 'gray' : 'black'}}>
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