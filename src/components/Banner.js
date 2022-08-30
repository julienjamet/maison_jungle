import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = "La maison jungle "
    return (
    <div className="banner">
        <img src={logo} alt={title} className="logo"/>
        <h1 className="title">{title}</h1>
    </div>
    )
}

export default Banner