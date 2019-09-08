import React from 'react';

import { Feed } from 'semantic-ui-react';

import { shallow } from 'enzyme';

import { Message } from './index.tsx';

const config = ['offline', 'online']

describe('Form component', () => {
  const textInside = 'Hello world!';
  const props = {
    nick: 'Jon "Bones" Jones',
    imgUrl: 'https://sun9-12.userapi.com/c855616/v855616888/d8e07/3FSBKuZOcZg.jpg',
    online: 1,
  };
  
  const tree = shallow(<Message {...props}>{textInside}</Message>);
  const FeedEvent = Feed.Event
  const FeedLabel = Feed.Label
  const FeedContent = Feed.Content
  const FeedSummary = Feed.Summary
  const FeedDate = Feed.Date
  const FeedUser = Feed.User
  
it('should has Feed inside', () => {
    expect(tree.contains(
      <Feed>
        <FeedEvent>
          <FeedLabel image={props.imgUrl} />
          <FeedContent>
            <FeedUser>{props.nick}</FeedUser>
            <FeedSummary>
              {textInside}
            </FeedSummary>
            <FeedDate content={config[props.online]}/>
          </FeedContent>
        </FeedEvent>
      </Feed>,
    )).toBe(true);
  });
  
  it('should has Feed.Event inside', () => {
    expect(tree.contains(
      <FeedEvent>
        <FeedLabel image={props.imgUrl} />
        <FeedContent>
          <FeedUser>{props.nick}</FeedUser>
          <FeedSummary>
            {textInside}
          </FeedSummary>
          <FeedDate content={config[props.online]}/>
        </FeedContent>
      </FeedEvent>,
    )).toBe(true);
  });
  
  it('should has Feed.Label inside', () => {
    expect(tree.contains(<FeedLabel image={props.imgUrl} />)).toBe(true);
  });
  
  it('should has Feed.Summary inside', () => {
    expect(tree.contains(
      <FeedSummary>
        {textInside}
      </FeedSummary>
    )).toBe(true);
  });
  
  it('should Feed.Label has image props', () => {
    expect(tree.find('FeedLabel').at(0).props().image).toBe(props.imgUrl);
  });
  
  it('should Feed.Date has image props', () => {
    expect(tree.find('FeedDate').at(0).props().content).toBe(config[props.online]);
  });
  
  it('should has Feed.Summary inside', () => {
    expect(tree.contains(
      <FeedUser>
        {props.nick}
      </FeedUser>
    )).toBe(true);
  });
  
  it('should Segment has raised props', () => {
    expect(tree.find('Segment').at(0).props().raised).toBe(true);
  });
  
});
