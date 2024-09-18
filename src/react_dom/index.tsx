import { Link, Outlet } from "react-router-dom"

export const RouterDomSection: React.FC = () => {
    return <>
        <h1>Performance</h1>
        <ul>
            <li><Link to={'/router-dom/portals'}>Portals</Link></li>
        </ul>
        <div style={{ border: '1px solid', padding: '10px', margin: '10px'}}>
            <Outlet></Outlet>
        </div>
    </>
}