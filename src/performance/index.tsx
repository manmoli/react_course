import { Link, Outlet } from "react-router-dom"

export const PerformanceSection: React.FC = () => {
    return <>
        <h1>Performance</h1>
        <ul>
            <li><Link to={'/performance/usememo'}>useMemo</Link></li>
            <li><Link to={'/performance/memo'}>memo</Link></li>
        </ul>
        <div style={{ border: '1px solid', padding: '10px', margin: '10px'}}>
            <Outlet></Outlet>
        </div>
    </>
}