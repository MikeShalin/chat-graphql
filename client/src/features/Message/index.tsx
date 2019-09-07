import React from 'react'

import { Feed } from 'semantic-ui-react'

type TProps = {
  nick: string,
  children: string,
  imgUrl: string,
  online: number,
}

const config = ['offline', 'online']

export const Message = ({
  imgUrl,
  children,
  nick,
  online,
}: TProps) => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={imgUrl} />
      <Feed.Content>
        <Feed.User>
          {nick}
        </Feed.User>
        <Feed.Summary>
          {children}
        </Feed.Summary>
        <Feed.Date content={config[online]} />
      </Feed.Content>
    </Feed.Event>
  </Feed>
)
