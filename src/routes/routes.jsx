import { Navigate, Route, Routes } from "react-router-dom";
import ListSessionPageAdmin from "../pages/admin/ListSessionPageAdmin/ListSessionPageAdmin";
import SessionPageAdmin from "../pages/admin/SessionPageAdmin/SessionPageAdmin";
import DashboardAdmin from "../pages/DashboardAdmin/DashboardAdmin";
import DashboardCommon from "../pages/DashboardCommon/DashboardCommon";
import HomePage from "../pages/Home/HomePage";
import ListBuyedSessions from "../pages/ListBuyedSessions/ListBuyedSessions";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import RegisterPage from "../pages/Register/RegisterPage";
import SessionPage from "../pages/SessionPage/SessionPage";


const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboardUser/sessions/:elemId/payment" element={<PaymentPage />} />
    <Route path="/dashboardUser/sessions/:elemId" element={<SessionPage/>} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
    <Route path="/dashboardAdmin/editSession" element={<SessionPageAdmin />} />
    <Route path="/dashboardAdmin/listSession" element={<ListSessionPageAdmin />} />
    <Route path="/dashboardUser/listBuyedSessions" element={<ListBuyedSessions />} />
    <Route path="/dashboardUser" element={<DashboardCommon />} />
    {/* <Route path="*" element={<Navigate to="/" />} /> */}
  </Routes>
);

export default RoutesMain;