import { Card } from 'antd'
import { FC } from 'react'

import { CreatePostBlock } from 'features/posts/createPostBlock'

export const CreatePostCard: FC = () => {
  return (
    <Card>
      <CreatePostBlock />
    </Card>
  )
}
