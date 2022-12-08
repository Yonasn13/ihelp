import { useState } from 'react'
import React from 'react'
import styles from '../../styles/about.module.css'

export default function About() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className={styles.container}>
            <button onClick={{} = setShowModal(true)} className="btn">
                Modal
            </button>
        </div >
    )
}
