const { Outlet, Navigate } = require("react-router-dom");
const { TokenRepository } = require("repository/TokenRepository");

function PrivateRoute() {
    const access = TokenRepository.getToken();
    return access ? <Outlet /> : <Navigate to="/" />;
}
export default PrivateRoute;
