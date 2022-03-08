import React, {useState} from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import UserSpaceHeader from '../component/space/user/UserSpaceHeader';
import Tabs from '../component/shared/tabs/Tabs';
import Tab from '../component/shared/tabs/Tab';
import SpaceList from '../component/shared/list/SpaceList';
import useGetSpaceList from '../hooks/useGetSpaceList';

const UserSpaceScreen = () => {
  const [data] = useGetSpaceList();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = val => {
    setTabIndex(val);
  };
  return (
    <View>
      <UserSpaceHeader />
      <TabSection>
        <Tabs>
          <Tab
            label={'Own space'}
            index={tabIndex}
            value={0}
            onChange={handleChange}
          />
          <Tab
            label={'Following space'}
            index={tabIndex}
            value={1}
            onChange={handleChange}
          />
        </Tabs>
      </TabSection>
      <SpaceListSection>
        {tabIndex === 0 && <SpaceList data={data} />}
        {tabIndex === 1 && <SpaceList data={data} />}
      </SpaceListSection>
    </View>
  );
};

export default UserSpaceScreen;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SpaceListSection = styled.View`
  padding: 10px;
`;

const TabSection = styled.View`
  margin-vertical: 40px;
`;
