import { Html, Head, Body, Container, Section, Text, Heading } from '@react-email/components';
import * as React from 'react';

interface OrderCreatedEmailProps {
  customerName: string;
  technicianName: string;
}

export const OrderCreatedEmail: React.FC<OrderCreatedEmailProps> = ({
  customerName,
  technicianName,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Heading style={heading}>Pedido Criado com Sucesso!</Heading>
          <Text style={paragraph}>Olá {customerName},</Text>
          <Text style={paragraph}>
            Seu pedido  foi criado com sucesso.
          </Text>
          <Text style={paragraph}>
            O técnico designado para seu pedido é: <strong>{technicianName}</strong>.
          </Text>
          <Text style={paragraph}>Obrigado por confiar em nossos serviços!</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
};

const container = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '20px',
};

const heading = {
  fontSize: '20px',
  marginBottom: '10px',
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '1.5',
};
