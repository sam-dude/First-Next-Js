import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from 'alia/components/Button/Button'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src='' 
          fill={true} 
          alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winnig digital experiences</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus quas harum maxime id exercitationem saepe natus corporis eaque debitis? Omnis illo aliquam, facilis ducimus eveniet adipisci cupiditate, molestiae corporis, harum tenetur nulla dolore incidunt <br /> <br /> impedit ratione consequatur. Accusamus a delectus reiciendis quidem, iure praesentium temporibus, aperiam cum ab omnis fuga corporis amet dolor, voluptatibus quis facilis sapiente id ipsam repudiandae. Facilis, quae neque?
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ratione, mollitia tempore, suscipit nostrum fugit assumenda porro eveniet accusamus odio laboriosam exercitationem aliquam excepturi illum, ex provident nihil magni? Obcaecati, explicabo? Nisi. <br /> <br /><br />- Dynamic Websites <br /><br />- Fast and Handy Mobile <br /><br />- Mobile Apps
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About