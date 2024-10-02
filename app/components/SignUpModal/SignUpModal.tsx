"use client"

import React, { useState, useContext, useEffect } from "react"
import Modal from "react-modal"
import { Context } from "@/app/provider"

import styles from "./signUpModal.module.css"


export default function SignUpModal({ isOpen, onRequestClose }: any) {
  const { setDescriptions, setUserInfo } = useContext<any>(Context)

  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSave = async () => {
    const data = {
      username,
      name,
      phone
    }

    try {
      const response = await fetch("/api/postUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const result = await response.json()
        console.log("User added successfully:", result)
        localStorage.setItem("cantonFairUser", JSON.stringify(result))
        setUserInfo(JSON.stringify(result))
        setUsername("")
        setName("")
        setPhone("")
        onRequestClose()
      } else {
        const error = await response.json()
        console.error("Error adding user:", error)
      }
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  const isFormValid = username && name && phone;
  console.log('isFormValid', isFormValid)

  useEffect(() => {
    Modal.setAppElement("#el") // Ajuste para Next.js
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add User"
      className={styles.modal}
    >
      <h3 style={{ color: "white" }}>Register Now</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div className={styles.buttons}>
        <button onClick={onRequestClose} className={styles.cancelButton}>
          Cancel
        </button>
        <button onClick={handleSave} className={styles.saveButton} disabled={!isFormValid}>
          Save
        </button>
      </div>
    </Modal>
  )
}
