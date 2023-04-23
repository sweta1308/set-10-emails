import { NavLink } from "react-router-dom"

export const Header = () => {
    const getStyles = ({isActive}) => ({
        color: 'black',
        borderRadius: '30px',
        textDecoration: 'none',
        display: 'block', 
        padding: '10px',
        marginTop: '10px', 
        backgroundColor: isActive ? 'rgba(125, 125, 125, 0.3)' : ''
    })
    return (
        <nav>
            <NavLink style={getStyles} to='/'><i class="fa-solid fa-envelope-open"></i>  Inbox</NavLink>
            <NavLink style={getStyles} to='/starred'><i class="fa-sharp fa-solid fa-star"></i>  Starred</NavLink>
            <NavLink style={getStyles} to='/trash'><i class="fa-solid fa-trash"></i>  Trash</NavLink>
            <NavLink style={getStyles} to='/spam'> <i class="fa-solid fa-circle-exclamation"></i> Spam</NavLink>
        </nav>
    )
}