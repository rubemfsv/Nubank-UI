import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabItem } from './styles';

export default function Tab() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff" />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    );
}