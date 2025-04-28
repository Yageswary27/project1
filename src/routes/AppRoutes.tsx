import { Routes, Route } from 'react-router-dom';
import CVBuilder from '../pages/CVBuilder';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/CV" element={<CVBuilder />} />
    </Routes>
  );
};

export default AppRoutes;
