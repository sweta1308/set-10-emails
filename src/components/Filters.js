import { useMails } from "../context/MailContext"

export const Filters = () => {
    const {mailDispatch} = useMails();
    return (
        <>
            <fieldset>
                <legend>Filters</legend>
                <label>
                    <input type="checkbox" onChange={() => mailDispatch({type: 'unread'})}  /> Show Unread Mails
                </label>
                <label>
                    <input type="checkbox" onChange={() => mailDispatch({type: 'isStarred'})}  /> Show Starred Mails
                </label>
            </fieldset>
        </>
    )
}