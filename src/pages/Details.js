import { useParams } from "react-router"
import { mails } from "../data/data";
import { Header } from "../components/Header";

export const Details = () => {
    const {mailID} = useParams();
    const findMail = mails.find(mail => mail.mId === mailID);

    return (
        <div className='inbox'>
            <Header />
            <div className="content">
                <h1>Details</h1>
                <div className='lists-details'>
                    <h4>{findMail?.subject}</h4>
                    <p>{findMail?.content}</p>
                </div>
                
            </div>
        </div>
    )

}