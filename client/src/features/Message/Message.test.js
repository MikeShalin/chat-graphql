import React from 'react';

import { Feed } from 'semantic-ui-react';

import { shallow } from 'enzyme';

import { Message } from './index.tsx';

const config = ['offline', 'online']

describe('Form component', () => {
  const textInside = 'Hello world!';
  const props = {
    nick: 'Jon "Bones" Jones',
    online: 1,
    createdAt: '1567927583899',
  };
  
  const tree = shallow(<Message {...props}>{textInside}</Message>);
  const FeedEvent = Feed.Event
  const FeedLabel = Feed.Label
  const FeedContent = Feed.Content
  const FeedSummary = Feed.Summary
  const FeedDate = Feed.Date
  const FeedUser = Feed.User
  const FeedMeta = Feed.Meta
  
  it('should has Feed inside', () => {
    expect(tree.contains(
      <Feed>
        <FeedEvent>
          <FeedContent>
            <FeedSummary>
              <FeedUser>{props.nick}</FeedUser>
              <FeedDate content={props.createdAt} />
            </FeedSummary>
            <FeedSummary>
              {textInside}
            </FeedSummary>
            <FeedMeta>
              <FeedDate content={config[props.online]} />
            </FeedMeta>
          </FeedContent>
        </FeedEvent>
      </Feed>,
    )).toBe(true);
  });
  
  it('should has Feed.Event inside', () => {
    expect(tree.contains(
      <FeedEvent>
        <FeedContent>
          <FeedSummary>
            <FeedUser>{props.nick}</FeedUser>
            <Feed.Date content={props.createdAt} />
          </FeedSummary>
          <FeedSummary>
            {textInside}
          </FeedSummary>
          <FeedMeta>
            <FeedDate content={config[props.online]} />
          </FeedMeta>
        </FeedContent>
      </FeedEvent>,
    )).toBe(true);
  });
  
  it('should has Feed.Summary inside', () => {
    expect(tree.contains(
      <FeedSummary>
        {textInside}
      </FeedSummary>,
    )).toBe(true);
  });
  
  it('should Feed.Date has image props', () => {
    expect(tree.find('FeedDate').at(1).props().content).toBe(config[props.online]);
  });
  
  it('should Feed.Date has image props', () => {
    expect(tree.find('FeedDate').at(0).props().content).toBe(props.createdAt);
  });
  
  it('should has Feed.Summary inside', () => {
    expect(tree.contains(
      <FeedUser>
        {props.nick}
      </FeedUser>,
    )).toBe(true);
  });
  
  it('should Segment has raised props', () => {
    expect(tree.find('Segment').at(0).props().raised).toBe(true);
  });
  
});
