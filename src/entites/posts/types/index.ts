import { IdBDType } from 'app/store/types'
import { UserType } from 'entites/user/types'

export type PostType = IdBDType & {
  title: string
  text: string
  likes?: string[]
  tags?: string[]
  authorId?: UserType
  createdAt?: string
}

export type CreatePostFormType = {
  title: string
  text: string
}
