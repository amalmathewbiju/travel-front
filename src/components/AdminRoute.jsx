import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return <Navigate to="/" />;
    }

    const decoded = jwtDecode(token);
    if (decoded.role !== 'admin') {
        return <Navigate to="/home" />;
    }

    return children;
};

export default AdminRoute;
