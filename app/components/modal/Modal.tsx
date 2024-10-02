"use client"

import React, { use, useContext, useEffect, useState } from "react"
import Modal from "react-modal"

import saveStandDescription from "@/utils/saveStandDescription"
import deleteBooth from "@/utils/deleteBooth"


import styles from "./modal.module.css"
import { Context } from "@/app/provider"

export default function DescriptionModal({
  isOpen,
  onRequestClose,
  onSave,
  booth,
  identifier,
  boothNumber
}: any) {
  const { phase, area, floor, descriptions, setDescriptions, userInfo } =
    useContext<any>(Context)

  const [description, setDescription] = useState(booth?.description)

  useEffect(() => {
    setDescription(booth?.description)
    // console.log(booth)
  }, [descriptions, booth])

  useEffect(() => {
    Modal.setAppElement("#el") // Ajuste para Next.js
  }, [])

  const handleSave = async () => {
    const data = {
      status: 1,
      description,
      user_id: JSON.parse(localStorage.getItem("cantonFairUser") || '{}').userId,
      identifier,
      area,
      phase
    }

    // Obter os dados atuais do localStorage
    let descriptions = JSON.parse(localStorage.getItem("descriptions") || "[]")

    // Adicionar a nova descrição ao array
    descriptions.push(data)

    // Salvar o array atualizado no localStorage
    localStorage.setItem("descriptions", JSON.stringify(descriptions))

    setDescriptions(descriptions)

    // if (descriptions.length > 5) {
    // }
    saveStandDescription(data)
      .then((response) => {
        let filteredDescriptions = descriptions.filter(
          (description: any) => description.identifier !== data.identifier
        )
        let updatedDescriptions = [...filteredDescriptions, data]
        setDescriptions(updatedDescriptions)
        console.log("Success:", response)
      })
      .catch((error) => {
        console.error("Error:", error.message)
      })
    setDescription("")
    onRequestClose()
  }

  const removeBooth = () => {
    const data = {
      user_id: JSON.parse(localStorage.getItem("cantonFairUser") || '{}').userId,
      identifier
    }

    // if (!userInfo) {
    //   let descriptions = JSON.parse(
    //     localStorage.getItem("descriptions") || "[]"
    //   )
    //   let filteredDescriptions = descriptions.filter(
    //     (description: any) => description.identifier !== data.identifier
    //   )
    //   localStorage.setItem("descriptions", JSON.stringify(filteredDescriptions))
    //   setDescriptions(filteredDescriptions)
    // } else {
    deleteBooth(data)
      .then((response) => {
        let filteredDescriptions = descriptions.filter(
          (description: any) => description.identifier !== data.identifier
        )
        let updatedDescriptions = [...filteredDescriptions]
        setDescriptions(updatedDescriptions)
        localStorage.setItem("descriptions", JSON.stringify(updatedDescriptions))

        console.log("Success:", response)
      })
      .catch((error) => {
        console.error("Error:", error.message)
      })
    // }

    setDescription("")
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Description"
      className={styles.modal}
    >
      <h3 style={{ color: "white" }}>
        Add Description for booth {boothNumber}
      </h3>
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        cols={50}
      />
      <div className={styles.buttons}>
        <button onClick={onRequestClose} className={styles.cancelButton}>
          Cancel
        </button>
        <button onClick={handleSave} className={styles.saveButton}>
          Save
        </button>
        <button onClick={removeBooth} className={styles.removeButton}>
          Remove booth
        </button>
      </div>
    </Modal>
  )
}
