import React, { use, useContext, useEffect, useState } from "react"
import Modal from "react-modal"

import saveStandDescription from "@/utils/saveStandDescription"
import deleteBooth from "@/utils/deleteBooth"

Modal.setAppElement("#el") // Ajuste para Next.js

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
  const { phase, area, floor, descriptions, setDescriptions } =
    useContext<any>(Context)

  const [description, setDescription] = useState(booth?.description)

  useEffect(() => {
    setDescription(booth?.description)
    // console.log(booth)
  }, [descriptions, booth])

  const handleSave = async () => {
    const data = {
      status: 1,
      description,
      user_id: 1,
      identifier,
      area,
      phase
    }

    saveStandDescription(data)
      .then((response) => {
        let filteredDescriptions = descriptions.filter((description: any) => description.identifier !== data.identifier)
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
      user_id: 1,
      identifier
    }
    deleteBooth(data)
      .then((response) => {
        let filteredDescriptions = descriptions.filter((description: any) => description.identifier !== data.identifier)
        let updatedDescriptions = [...filteredDescriptions]
        setDescriptions(updatedDescriptions)
        console.log("Success:", response)
      })
      .catch((error) => {
        console.error("Error:", error.message)
      })

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
        <button onClick={removeBooth} className={styles.removeButton}>Remove booth</button>
      </div>
    </Modal>
  )
}
