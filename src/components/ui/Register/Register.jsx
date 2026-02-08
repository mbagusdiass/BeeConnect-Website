import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Phone, UserPlus, Check } from "lucide-react";

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

const RegisterCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 480px;
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

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
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

const PasswordStrength = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const StrengthBar = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: ${props => props.$active ? props.$color : "#e0e0e0"};
  transition: background 0.3s;
`;

const StrengthText = styled.span`
  font-size: 0.8rem;
  color: ${props => props.$color};
  margin-top: 0.25rem;
  display: block;
`;

const TermsLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  line-height: 1.4;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #667eea;
  margin-top: 2px;
  flex-shrink: 0;
`;

const RegisterButton = styled.button`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
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

const LoginLink = styled.p`
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

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { level: 0, text: "", color: "#e0e0e0" };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    const levels = [
      { level: 1, text: "Lemah", color: "#ef4444" },
      { level: 2, text: "Cukup", color: "#f59e0b" },
      { level: 3, text: "Kuat", color: "#10b981" },
      { level: 4, text: "Sangat Kuat", color: "#059669" },
    ];

    return levels[strength - 1] || { level: 0, text: "", color: "#e0e0e0" };
  };

  const passwordStrength = getPasswordStrength();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }
    // Handle registration logic here
    navigate("/login");
  };

  return (
    <Container>
      <RegisterCard>
        <Logo>BeeConnect</Logo>
        <Subtitle>Buat akun baru untuk mulai berbelanja</Subtitle>

        <Form onSubmit={handleSubmit}>
          <InputRow>
            <InputGroup>
              <InputIcon>
                <User size={20} />
              </InputIcon>
              <Input
                type="text"
                name="firstName"
                placeholder="Nama Depan"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <User size={20} />
              </InputIcon>
              <Input
                type="text"
                name="lastName"
                placeholder="Nama Belakang"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </InputRow>

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
            />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <Phone size={20} />
            </InputIcon>
            <Input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              value={formData.phone}
              onChange={handleChange}
              required
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
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputGroup>
          
          {formData.password && (
            <>
              <PasswordStrength>
                {[1, 2, 3, 4].map((level) => (
                  <StrengthBar
                    key={level}
                    $active={passwordStrength.level >= level}
                    $color={passwordStrength.color}
                  />
                ))}
              </PasswordStrength>
              <StrengthText $color={passwordStrength.color}>
                {passwordStrength.text}
              </StrengthText>
            </>
          )}

          <InputGroup>
            <InputIcon>
              <Lock size={20} />
            </InputIcon>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Konfirmasi Kata Sandi"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </PasswordToggle>
          </InputGroup>

          <TermsLabel>
            <Checkbox
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <span>
              Saya menyetujui <a href="#">Syarat & Ketentuan</a> dan{" "}
              <a href="#">Kebijakan Privasi</a> BeeConnect
            </span>
          </TermsLabel>

          <RegisterButton type="submit" disabled={!formData.agreeTerms}>
            <UserPlus size={20} />
            Daftar Sekarang
          </RegisterButton>
        </Form>

        <Divider>atau daftar dengan</Divider>

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

        <LoginLink>
          Sudah punya akun? <Link to="/login">Masuk di sini</Link>
        </LoginLink>
      </RegisterCard>
    </Container>
  );
};

export default Register;
