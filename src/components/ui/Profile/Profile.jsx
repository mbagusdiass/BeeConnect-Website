import React, { useState } from "react";
import styled from "styled-components";
import { User, Mail, Phone, MapPin, Edit2, Package, Heart, Settings, LogOut, ChevronRight, Camera } from "lucide-react";

const Container = styled.div`
  width: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f5f5f7;
  min-height: calc(100vh - 200px);
`;

const ProfileHeader = styled.section`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
  padding: 4rem 5rem;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  border: 4px solid rgba(255, 255, 255, 0.2);
`;

const EditAvatarButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #7c3aed;
  border: 3px solid #1a1a2e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #6d28d9;
  }
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
`;

const UserEmail = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 0.25rem 0;
`;

const MemberSince = styled.p`
  font-size: 0.9rem;
  opacity: 0.6;
  margin: 0;
`;

const ContentSection = styled.section`
  padding: 2rem 5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: -3rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -2rem;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${props => props.$gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StatContent = styled.div``;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div``;

const MenuCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #f0f0f0;
  background: ${props => props.$active ? "#f8f9fa" : "transparent"};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8f9fa;
  }
`;

const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${props => props.$color || "#f0f0f0"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$iconColor || "#666"};
`;

const MenuText = styled.div`
  flex: 1;
`;

const MenuTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`;

const MenuSubtitle = styled.div`
  font-size: 0.8rem;
  color: #888;
`;

const MainContent = styled.div``;

const ProfileCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #e0e0e0;
    color: #1a1a1a;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #1a1a1a;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &:disabled {
    background: #f8f9fa;
    color: #888;
  }
`;

const AddressCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AddressLabel = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`;

const AddressText = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
  margin: 0;
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
`;

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState("profile");
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+62 812 3456 7890",
    address: "Jl. Kebon Jeruk Raya No. 123, RT 001/RW 002, Kebon Jeruk, Jakarta Barat, DKI Jakarta 11530",
  });

  const menuItems = [
    { id: "profile", icon: User, title: "Profil Saya", subtitle: "Kelola informasi akun", color: "#e8f4fd", iconColor: "#3b82f6" },
    { id: "orders", icon: Package, title: "Pesanan Saya", subtitle: "Lihat riwayat pesanan", color: "#fef3c7", iconColor: "#f59e0b" },
    { id: "wishlist", icon: Heart, title: "Wishlist", subtitle: "Produk favorit Anda", color: "#fce7f3", iconColor: "#ec4899" },
    { id: "settings", icon: Settings, title: "Pengaturan", subtitle: "Atur preferensi akun", color: "#e0e7ff", iconColor: "#6366f1" },
    { id: "logout", icon: LogOut, title: "Keluar", subtitle: "Logout dari akun", color: "#fee2e2", iconColor: "#ef4444" },
  ];

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <ProfileHeader>
        <HeaderContent>
          <AvatarContainer>
            <Avatar>JD</Avatar>
            <EditAvatarButton>
              <Camera size={16} />
            </EditAvatarButton>
          </AvatarContainer>
          <UserInfo>
            <UserName>{userData.firstName} {userData.lastName}</UserName>
            <UserEmail>{userData.email}</UserEmail>
            <MemberSince>Member sejak Januari 2024</MemberSince>
          </UserInfo>
        </HeaderContent>
      </ProfileHeader>

      <ContentSection>
        <StatsGrid>
          <StatCard>
            <StatIcon $gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
              <Package size={24} />
            </StatIcon>
            <StatContent>
              <StatNumber>12</StatNumber>
              <StatLabel>Total Pesanan</StatLabel>
            </StatContent>
          </StatCard>

          <StatCard>
            <StatIcon $gradient="linear-gradient(135deg, #ec4899 0%, #be185d 100%)">
              <Heart size={24} />
            </StatIcon>
            <StatContent>
              <StatNumber>8</StatNumber>
              <StatLabel>Wishlist</StatLabel>
            </StatContent>
          </StatCard>

          <StatCard>
            <StatIcon $gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)">
              <MapPin size={24} />
            </StatIcon>
            <StatContent>
              <StatNumber>2</StatNumber>
              <StatLabel>Alamat Tersimpan</StatLabel>
            </StatContent>
          </StatCard>
        </StatsGrid>

        <SectionGrid>
          <Sidebar>
            <MenuCard>
              {menuItems.map(item => (
                <MenuItem 
                  key={item.id} 
                  $active={activeMenu === item.id}
                  onClick={() => setActiveMenu(item.id)}
                >
                  <MenuIcon $color={item.color} $iconColor={item.iconColor}>
                    <item.icon size={20} />
                  </MenuIcon>
                  <MenuText>
                    <MenuTitle>{item.title}</MenuTitle>
                    <MenuSubtitle>{item.subtitle}</MenuSubtitle>
                  </MenuText>
                  <ChevronRight size={18} color="#ccc" />
                </MenuItem>
              ))}
            </MenuCard>
          </Sidebar>

          <MainContent>
            <ProfileCard>
              <CardHeader>
                <CardTitle>Informasi Pribadi</CardTitle>
                <EditButton>
                  <Edit2 size={16} />
                  Edit
                </EditButton>
              </CardHeader>

              <FormGrid>
                <FormGroup>
                  <Label>Nama Depan</Label>
                  <Input 
                    type="text" 
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Nama Belakang</Label>
                  <Input 
                    type="text" 
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <Input 
                    type="email" 
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Nomor Telepon</Label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormGrid>

              <AddressCard>
                <AddressHeader>
                  <Label style={{ marginBottom: 0 }}>
                    <MapPin size={16} style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                    Alamat Utama
                  </Label>
                  <AddressLabel>Utama</AddressLabel>
                </AddressHeader>
                <AddressText>{userData.address}</AddressText>
              </AddressCard>

              <SaveButton>Simpan Perubahan</SaveButton>
            </ProfileCard>
          </MainContent>
        </SectionGrid>
      </ContentSection>
    </Container>
  );
};

export default Profile;
