import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Preview from '../../../../components/organisms/previews/Standard';
import { preview as itemType } from '../../../../types/previews/standard';

import { Container, Spacer } from './assets/styles';

interface Props {
  items: Array<itemType>,
  updateContent: (arg0: any) => void,
}

const List: React.FC<Props> = ({ items, updateContent }) => {
  const navigation = useNavigation();

  return (
    <Container>
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
