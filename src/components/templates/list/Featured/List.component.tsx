import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Featured';

import { Container, Title, ScrollContainer, Spacer } from './assets/styles';

interface Props {
  title: string,
  items: any,
  updateContent: (arg0: any) => void,
}

const List: React.FC<Props> = ({title, items, updateContent}) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Title>{title}</Title>
      <ScrollContainer>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <Preview
            showContent={() => {
              updateContent(item);
              navigation.navigate('Content');
            }}
            title={item.title}
            intro={item.intro}
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
