export const reducerFunction = (state, action) => {
    switch(action.type) {
        case 'isStarred':
            return {...state, isStarred: !state.isStarred}
        case 'unread':
            return {...state, unread: !state.unread}
        case 'delete':
            return {...state, 
                mailData: state.mailData.filter(mail => mail.mId !== action.payload),
                deleted: [...state.deleted, state.mailData.find(mail => mail.mId === action.payload)]
            }
        case 'spam':
            return {...state, 
                mailData: state.mailData.filter(mail => mail.mId !== action.payload),
                spammed: [...state.spammed, state.mailData.find(mail => mail.mId === action.payload)]
            }
        case 'star':
            return {
                ...state, mailData: state.mailData.map(mail => mail.mId === action.payload ? {...mail, isStarred: !mail.isStarred} : mail)
            }
        case 'markRead':
            return {
                ...state, mailData: state.mailData.map(mail => mail.mId === action.payload ? {...mail, unread: !mail.unread} : mail)
            }
        case 'notSpam': 
            return {
                ...state,
                mailData: [...state.mailData, state.spammed.find(mail => mail.mId === action.payload)],
                spammed: state.spammed.filter(mail => mail.mId !== action.payload)
            } 
        case 'restore':
            return {
                ...state,
                mailData: [...state.mailData, state.deleted.find(mail => mail.mId === action.payload)],
                deleted: state.deleted.filter(mail => mail.mId !== action.payload)
            }

        case 'viewUnread':
            return {...state,
                mailData: state.mailData.filter(mail => state.unread ? !mail.unread : mail)
            }
        case 'viewStarred':
            return {...state,
                mailData: state.mailData.filter(mail => state.isStarred ? mail.isStarred : mail)
            }
        default:
            return state
    }
}