import React from "react";
import styled from "styled-components";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 10px 40px rgba(238, 90, 90, 0.3);
`;

const ErrorCode = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
  letter-spacing: -2px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 2.5rem 0;
  max-width: 400px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: #000;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <IconWrapper>
        <AlertTriangle size={60} color="white" strokeWidth={2} />
      </IconWrapper>

      <ErrorCode>404</ErrorCode>
      <Title>Page Not Found</Title>
      <Subtitle>
        Oops! The page you're looking for doesn't exist or has been moved.
        Please check the URL or navigate back to safety.
      </Subtitle>

      <ButtonGroup>
        <SecondaryButton onClick={handleGoBack}>Go Back</SecondaryButton>
        <PrimaryButton onClick={handleGoHome}>Back to Home</PrimaryButton>
      </ButtonGroup>
    </Container>
  );
};

export default Unauthorized;
