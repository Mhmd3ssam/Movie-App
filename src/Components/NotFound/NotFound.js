import { Link } from 'react-router-dom';
import PageNotFound from '../../Assets/PageNotFound.png'
export default function NotFound() {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "red" }}> 404 </h1>
            <p style={{ textAlign: "center" }} >
                <Link to="/" class="text-decoration-none" style={{ color: "red" }}> Go to Home </Link>
            </p>
            <img src={PageNotFound} alt="PageNotFound" class="rounded mx-auto d-block" />
        </div>
    )
}
