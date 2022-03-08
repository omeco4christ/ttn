import React from 'react';
import styled from '@emotion/native';

class ForumListRenderer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data = []} = this.props;
    return (
      <ListSection>
        {data.map(forum => (
          <ListItemHolder key={forum.id}>
            {this.props.children(forum)}
          </ListItemHolder>
        ))}
      </ListSection>
    );
  }
}

export default ForumListRenderer;

const ListSection = styled.View`
  margin-top: 20px;
`;

const ListItemHolder = styled.View`
  margin-bottom: 10px;
`;
