import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound}  from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if(!res.ok){
    return notFound()
  }

  return res.json();
}


async function BlogPost({params}) {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, veniam laboriosam molestiae dolorum quis voluptate eos adipisci corrupti voluptatem. Odio cum explicabo eum voluptatem laboriosam doloribus illo eius excepturi perspiciatis commodi rem ex repellendus, enim numquam.
          </p>
          <div className={styles.author}>
            <Image
              src=''
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Donne</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='https://unsplash.com/photos/4NamroKS0JI'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.text}>
          {data.body}
        </p>
      </div>
    </div>
  )
}

export default BlogPost