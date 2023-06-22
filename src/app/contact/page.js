import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Hero2 from '../../../public/img2.png'
import Button from 'alia/components/Button/Button'

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src={Hero2}
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="email" placeholder='email' className={styles.input} />
          <textarea 
            className={styles.textarea} 
            name="" 
            placeholder='message' 
            cols="30" 
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact