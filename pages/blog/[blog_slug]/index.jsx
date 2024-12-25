import React from 'react'
import { useRouter } from 'next/router'
export default function BlogSlug() {

    const router = useRouter();
    const slug = router.query.blog_slug
  return (
    <div>This is the {slug} </div>
  )
}
