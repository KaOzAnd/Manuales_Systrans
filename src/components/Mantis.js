import { NavLink } from "react-router-dom";

const Mantis = () => {
    return (
        <>
            <li className="list__item">
                <div className="list__button">
                <i class="fa-solid fa-handshake-angle"></i>
                <i class="fa-solid fa-locust"></i>
                    <NavLink className="nav__link" to="Mantis">Mantis</NavLink>
                </div>
            </li>
        </>
    );
}
export default Mantis