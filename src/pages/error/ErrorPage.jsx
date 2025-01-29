import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist or has been moved.</p>
            <Link to="/">Back to home</Link>
        </div>
    );
}

export default ErrorPage;