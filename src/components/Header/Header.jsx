import React from 'react';
import './Header.css';

const Header = () => {
    return (

        <>


            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-2">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <button className="btn btn-outline-success searchbutton" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                            <input className="form-control me-2  searchfield bg-light" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav m-auto logo">
                                <img src="https://cdn.shopify.com/s/files/1/0093/6042/files/website_logo_250x@2x.jpg?v=1500400958" alt="" />
                            </div>
                            <div className="navbar-nav ms-auto iconmenu">
                                <span className="pt-1 secendary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </span>
                                <a href="#" className="nav-item nav-link iconmenuname">Account</a>
                                <span className="pt-1 secendary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg>
                                </span>
                                <a href="#" className="nav-item nav-link">cart</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <ul className="drawer__nav my-4">
                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Gift Baskets</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Gourmet Foods</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Mercantile</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Artisans</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Corporate Gifts</a>
                </li>

                <li className="drawer__nav-item">
                    <a href="#" className="drawer__nav-link">Blog</a>
                </li>

            </ul>



        </>
    )
}

export default Header







