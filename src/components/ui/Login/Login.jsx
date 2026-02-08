import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn, Loader } from "lucide-react";
import useAuth from "../../../hooks/useAuth";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  padding: 2rem;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin: 0 0 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    color: #666;
  }
`;

const RememberRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #667eea;
`;

const ForgotLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #dc2626;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  color: #999;
  font-size: 0.85rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e0e0e0;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 0.875rem;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #444;
  font-weight: 500;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: #ddd;
    background: #fafafa;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin: 1.5rem 0 0 0;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SpinnerIcon = styled(Loader)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error, setError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate("/home");
    }
  };

  return (
    <Container>
      <LoginCard>
        <Logo>BeeConnect</Logo>
        <Subtitle>Selamat datang kembali! Silakan masuk ke akun Anda</Subtitle>

        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <InputGroup>
            <InputIcon>
              <Mail size={20} />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Alamat Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Kata Sandi"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputGroup>

          <RememberRow>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                disabled={loading}
              />
              Ingat saya
            </CheckboxLabel>
            <ForgotLink href="#">Lupa kata sandi?</ForgotLink>
          </RememberRow>

          <LoginButton type="submit" disabled={loading}>
            {loading ? (
              <>
                <SpinnerIcon size={20} />
                Memproses...
              </>
            ) : (
              <>
                <LogIn size={20} />
                Masuk
              </>
            )}
          </LoginButton>
        </Form>

        <Divider>atau masuk dengan</Divider>

        <SocialButtons>
          <SocialButton type="button">
            <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20" />
            Google
          </SocialButton>
          <SocialButton type="button">
            <img src="https://www.facebook.com/favicon.ico" alt="Facebook" width="20" height="20" />
            Facebook
          </SocialButton>
        </SocialButtons>

        <RegisterLink>
          Belum punya akun? <Link to="/register">Daftar sekarang</Link>
        </RegisterLink>
      </LoginCard>
    </Container>
  );
};

export default Login;
