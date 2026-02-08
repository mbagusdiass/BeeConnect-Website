import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

const Container = styled.div`
  width: 100%;
  background: #fff;
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const BrandLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000;
  margin: 0;
  padding: 0;
  letter-spacing: -0.5px;
  flex-shrink: 0;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const SearchSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 4rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  font-size: 0.9rem;
  color: #333;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #999;
  pointer-events: none;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 0.95rem;
  color: ${(props) => (props.$active ? "#000" : "#999")};
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const TopBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === "/home") {
      return currentPath === "/" || currentPath === "/home";
    }
    if (path === "/cart") {
      const cartRoutes = ["/cart", "/checkout", "/shipping-details", "/success-paying"];
      return cartRoutes.some(route => currentPath === route || currentPath.startsWith(route));
    }
    return currentPath === path || currentPath.startsWith(path);
  };

  return (
    <Container>
      <BrandLink to="/">Brand</BrandLink>

      <SearchSection>
        <SearchWrapper>
          <SearchIconWrapper>
            <Search size={18} />
          </SearchIconWrapper>
          <SearchInput placeholder="Search" />
        </SearchWrapper>
      </SearchSection>

      <NavLinks>
        <NavItem to="/home" $active={isActive("/home")}>
          Home
        </NavItem>
        <NavItem to="/cart" $active={isActive("/cart")}>
          Cart
        </NavItem>
        <NavItem to="/profile" $active={isActive("/profile")}>
          Profile
        </NavItem>
        <NavItem to="/contact" $active={isActive("/contact")}>
          Contact us
        </NavItem>
      </NavLinks>
    </Container>
  );
};

export default TopBar;

