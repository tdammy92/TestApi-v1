export type typesMedia= {
    id: string
    username: string
    caption: string,
    media: {
      type: 'video' | 'image',
      videoUrl: string,
      imageUrl: string,
      previewUrl: string
    },
    profilePhotoUrl: string
    likes: number
    comments: number
    shares: number
    timestamp: string
  }


  export type messageT = {
    id: number
    body: string
    postId: number
    likes: number
    user: UserT
    createdAt: string
  }
  
  export type UserT = {
    id: number
    username: string
    fullName: string
  }
  