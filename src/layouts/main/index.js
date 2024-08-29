import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <div>{children}</div>
      <MainFooter />
    </>
  );
}
