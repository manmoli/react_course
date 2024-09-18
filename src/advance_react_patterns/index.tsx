import { Link, Outlet } from "react-router-dom"

export const AdvanceReactPatterns: React.FC = () => {
    return <>
        <h1>Advance react patterns</h1>
        <ul>
            <li><Link to={'/patterns/hocs'}>HOC</Link></li>
            <li><Link to={'/patterns/custom_hooks'}>Custom hooks</Link></li>
        </ul>
        <div style={{ border: '1px solid', padding: '10px', margin: '10px'}}>
            <Outlet></Outlet>
        </div>
    </>
}