import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/data";
import { reducerFunction } from "../reducer/Reducer";

const MailContext = createContext();

export const MailProvider = ({children}) => {
    const initial = {
        unread: false,
        isStarred: false,
        mailData: mails,
        deleted: [],
        spammed: []
    }

    const [mailState, mailDispatch] = useReducer(reducerFunction, initial); 

    const filterCheckData = mailState.mailData.filter(mail => 
        (mailState.unread && !mail.unread) || (mailState.isStarred && mail.isStarred) || (!mailState.unread && !mailState.isStarred)
    )

    const unRead = filterCheckData.reduce((acc, curr) => !curr.unread ? acc + 1 : acc , 0);

    const starred = mailState.mailData.filter(mail => mail.isStarred)

    return (
        <MailContext.Provider value={{mailState, mailDispatch, filterCheckData, unRead, starred}}>
            {children}
        </MailContext.Provider>
    )
}

export const useMails = () => useContext(MailContext)