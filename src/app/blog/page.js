import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }

  return res.json();
}

async function Blog () {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
             src='https://unsplash.com/photos/QBcqTQW2128'
             alt=''
             width={400}
             height={250}
             className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.styles}>{item.title}</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog