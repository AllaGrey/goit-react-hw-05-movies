import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledNavLink } from './SharedLayout.styled';
import { ClipLoader } from 'react-spinners';
export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <Suspense fallback={<ClipLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
