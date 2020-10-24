import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Standard';
import { preview as itemType } from '../../../../types/previews/standard';

import { Container, Spacer } from './assets/styles';

interface Props {
  items: Array<itemType>,
}

const List: React.FC<Props> = ({ items }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {items.map(item => (
        <React.Fragment key={item.id}>
        <Preview
          showContent={() => navigation.navigate('Content')}
          title={item.title}
          subTitle={item.subTitle}
          name={item.user.name}
          date={item.date}
          type={item.type}
        />
        {item !== items[items.length - 1] && <Spacer />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default List;
