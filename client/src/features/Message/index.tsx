import React from 'react'

import { Feed, Segment } from 'semantic-ui-react'

type TProps = {
  nick: string,
  children: string,
  imgUrl: string,
  online: number,
  createdAt: string,
}

const config = ['offline', 'online']

export const Message = ({
  imgUrl,
  children,
  nick,
  online,
  createdAt,
}: TProps) => (
  <Segment raised>
    <Feed>
      <Feed.Event>
        <Feed.Label image={imgUrl} />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>
              {nick}
            </Feed.User>
            <Feed.Date content={createdAt} />
          </Feed.Summary>
          <Feed.Summary>
            {children}
          </Feed.Summary>
          <Feed.Meta>
          <Feed.Date content={config[online]} />
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </Segment>
)
