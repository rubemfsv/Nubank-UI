import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 297.582,78</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 30,00 recebida de Gabriel Ferreira Santos.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}

export default Main;