const Footer = () => {

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5 className="text-uppercase">Navegación</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-light p-0" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light p-0" href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light p-0" href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light p-0" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h5 className="text-uppercase">Contacto</h5>
                        <p className="mb-1">
                            <span className="me-2">📍</span>
                            Calle Falsa 123, Ciudad Ejemplo
                        </p>
                        <p className="mb-1">
                            <span className="me-2">📞</span>
                            +54 11 1234 5678
                        </p>
                        <p className="mb-1">
                            <span className="me-2">✉️</span>
                            contacto@miapp.com
                        </p>
                    </div>
                </div>
                <div className="row pt-3 border-top border-secondary">
                    <div className="col text-center">
                        <small>© 2026 Mi App. Todos los derechos reservados.</small>
                    </div>
                </div>
            </div>
        </footer>







    

    )





}













export default Footer;