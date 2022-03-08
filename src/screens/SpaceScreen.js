import React, {useState} from 'react';
import SpaceHeader from '../component/space/SpaceHeader';
import useGetSpace from '../hooks/useGetSpace';
import styled from '@emotion/native';
import Tabs from '../component/shared/tabs/Tabs';
import Tab from '../component/shared/tabs/Tab';
import {TextXs} from '../component/shared/text/Text';
import ForumTopicList from '../component/shared/list/ForumTopicList';
import useGetForumTopics from '../hooks/forumTopic/useGetForumTopics';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import SpacePostBox from '../component/space/SpacePostBox';

const SpaceScreen = () => {
  const [data] = useGetSpace();
  const {data: latestTopics} = useGetForumTopics();
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = val => {
    setTabIndex(val);
  };
  return (
    <VerticalScroll>
      <Holder>
        <SpaceHeader {...data} />
        <Tabs>
          <Tab
            label={'About'}
            value={0}
            index={tabIndex}
            onChange={handleChange}
          />
          <Tab
            label={'Posts'}
            value={1}
            index={tabIndex}
            onChange={handleChange}
          />
          <Tab
            label={'Questions'}
            value={2}
            index={tabIndex}
            onChange={handleChange}
          />
        </Tabs>
        <BodySection>
          {tabIndex === 0 && (
            <TextXs>
              Please take a minute to read our rules: Tellit English language
              You can learn the way to understand the rule of english Please
              take a minute to read our rules: Tellit English language Please
              take a minute to read our rules: Tellit English language Please
              take a minute to read our rules: Tellit English language Please
              take a minute to read our rules: Tellit English language Please
              take a minute to read our rules: Tellit English language
            </TextXs>
          )}
          {tabIndex === 1 && (
            <>
              <SpacePostBox />
              <ForumTopicList data={latestTopics} />
            </>
          )}
          {tabIndex === 2 && <ForumTopicList data={latestTopics} />}
        </BodySection>
      </Holder>
    </VerticalScroll>
  );
};

export default SpaceScreen;

const Holder = styled.View``;

const BodySection = styled.View`
  padding: 20px;
`;
