import React from 'react'
import { useState, useEffect } from 'react'
import client from "../client"

export default function Magazin() {
  const [posts, setPosts] = useState([])
  useEffect (() => {
    client.fetch(
      `*[_type == "post"]{
        title,
        slug,
        body,
        mainImage{
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
    ).then((data) => setPosts (data)).catch(console.error)
  }, [])

  return (
    <>
      <section>
        <h1>Magazin page</h1>
        <h2> VI SMOTRITE {posts.length} magazin posts</h2>
      </section>
    </>
  )
}