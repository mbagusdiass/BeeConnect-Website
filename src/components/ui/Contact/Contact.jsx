import React, { useState } from "react";
import styled from "styled-components";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";

const Container = styled.div`
  width: 100%;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 5rem;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 4rem 5rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.5rem 0;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 0.95rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FAQSection = styled.section`
  padding: 4rem 5rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
`;

const FAQAnswer = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Terima kasih! Pesan Anda telah terkirim.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "Bagaimana cara melacak pesanan saya?",
      answer: "Anda dapat melacak pesanan melalui halaman 'Pesanan Saya' di profil Anda atau menggunakan nomor resi yang dikirimkan via email.",
    },
    {
      question: "Berapa lama waktu pengiriman?",
      answer: "Waktu pengiriman bervariasi tergantung lokasi Anda. Umumnya 2-5 hari kerja untuk area Jabodetabek dan 5-10 hari kerja untuk luar pulau.",
    },
    {
      question: "Bagaimana kebijakan pengembalian barang?",
      answer: "Kami menerima pengembalian dalam 7 hari setelah barang diterima, dengan syarat barang masih dalam kondisi asli dan belum digunakan.",
    },
  ];

  return (
    <Container>
      <HeroSection>
        <HeroTitle>Hubungi Kami</HeroTitle>
        <HeroSubtitle>
          Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda 24/7
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <ContentGrid>
          <ContactInfo>
            <SectionTitle>Informasi Kontak</SectionTitle>
            
            <InfoCard>
              <IconWrapper>
                <Mail size={24} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>support@beeconnect.id</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <Phone size={24} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Telepon</InfoTitle>
                <InfoText>+62 21 1234 5678</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <MapPin size={24} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Alamat</InfoTitle>
                <InfoText>
                  Jl. Kebon Jeruk Raya No. 123<br />
                  Jakarta Barat, 11530
                </InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <Clock size={24} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Jam Operasional</InfoTitle>
                <InfoText>
                  Senin - Jumat: 09.00 - 18.00 WIB<br />
                  Sabtu: 09.00 - 15.00 WIB
                </InfoText>
              </InfoContent>
            </InfoCard>
          </ContactInfo>

          <div>
            <SectionTitle>Kirim Pesan</SectionTitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Nama Lengkap</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Masukkan email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Subjek</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Topik pesan Anda"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Pesan</Label>
                <TextArea
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">
                <Send size={18} />
                Kirim Pesan
              </SubmitButton>
            </ContactForm>
          </div>
        </ContentGrid>
      </ContentSection>

      <FAQSection>
        <FAQContainer>
          <SectionTitle style={{ textAlign: "center", marginBottom: "2rem" }}>
            <MessageCircle size={28} style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
            Pertanyaan Umum (FAQ)
          </SectionTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion>{faq.question}</FAQQuestion>
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>
    </Container>
  );
};

export default Contact;
