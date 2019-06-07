import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="me" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className={styles.formControl}
              id="name"
              placeholder="stuart little"
            />
          </div>
          <div>
          <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={styles.formControl}
              id="email"
              placeholder="stuart@little.mouse"
            />
          </div>
          <div>
          <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className={styles.formControl}
              id="message"
              rows="10"
              placeholder="Snowbell is finally a friend"
            />
          </div>
          <div>
            <input
              type="submit"
              value="send a message"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
