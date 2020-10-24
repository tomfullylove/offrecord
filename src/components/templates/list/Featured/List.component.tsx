import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Featured';

import { Container, Title, ScrollContainer, Spacer } from './assets/styles';

interface Props {
  title: string,
  items: any,
}

const List: React.FC<Props> = ({title, items}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>{title}</Title>
      <ScrollContainer>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <Preview
            showContent={() => navigation.navigate('Content')}
            title={item.title}
            subTitle={item.subTitle}
            name={item.user.name}
            type={item.type}
          />
        {item !== items[items.length - 1] && <Spacer />}
        </React.Fragment>
      ))}
      </ScrollContainer>
    </Container>
  );
};

export default List;
