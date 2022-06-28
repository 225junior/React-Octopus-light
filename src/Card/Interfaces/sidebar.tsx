import React from 'react'
import img from '../../images/img1.png';


interface IProps {

}


const Sidebar: React.FC<IProps> = (props) => {
    return (
        <div className="flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: "100Vh" }}>
            <div className="d-flex flex-sm-column flex-row flex-nowrap sticky-top">
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
                    title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img src={img} alt="" style={{ height: "30px" }} />
                    <span>OctoPus</span>
                </a>

                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                            Applications
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Options</a></li>
                                <li><a href="#" className="link-dark rounded">Options</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                            Test 1
                        </button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Balabolka</a></li>
                                <li><a href="#" className="link-dark rounded">Bonjour</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">Overview</a></li>
                                <li><a href="#" className="link-dark rounded">Weekly</a></li>
                                <li><a href="#" className="link-dark rounded">Monthly</a></li>
                                <li><a href="#" className="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div className="collapse" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">New</a></li>
                                <li><a href="#" className="link-dark rounded">Processed</a></li>
                                <li><a href="#" className="link-dark rounded">Shipped</a></li>
                                <li><a href="#" className="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <li><span className="rounded text-sm text-muted">Part</span></li>
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div className="collapse" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" className="link-dark rounded">New...</a></li>
                                <li><a href="#" className="link-dark rounded">Profile</a></li>
                                <li><a href="#" className="link-dark rounded">Settings</a></li>
                                <li><a href="#" className="link-dark rounded">Sign out</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;