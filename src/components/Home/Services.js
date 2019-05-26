import React from "react"
import services from "../../constants/services"
import Title from "../Title"
import styles from "../../css/services.module.css"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>
        {services.map((service, index) => {
          return (
            <article key={index} className={styles.service}>
              <span>{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
