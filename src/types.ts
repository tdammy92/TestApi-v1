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