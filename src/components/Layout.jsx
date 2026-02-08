import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Navigation.jsx';

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
