import { Link } from "react-router-dom";
const ErrorPage = () => 
<div className="p-8 text-red-600">404 - Page Not Found
    <br/>
    <Link to="/"><button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Back To Home</button></Link>
</div>;
export default ErrorPage;
