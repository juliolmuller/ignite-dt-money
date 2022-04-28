import { MouseEvent, ReactNode, useEffect, useState } from 'react'

import { Backdrop, CloseButton, Dialog } from '~/styles/Modal'

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  width?: number
  onClose: () => void
}

export function Modal({ children, isOpen, width = 580, onClose }: ModalProps) {
  const [isVisible, setVisible] = useState(isOpen)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleClose() {
    onClose()
  }

  function handleMakeInvisible() {
    !isOpen && setVisible(false)
  }

  function handleStopPropagation(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  useEffect(() => {
    isOpen && setVisible(true)
  }, [isOpen])

  useEffect(() => {
    function handlePressEscape(event: KeyboardEvent) {
      if (isOpen && event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handlePressEscape)
    return () => document.removeEventListener('keydown', handlePressEscape)
  }, [handleClose, isOpen])

  return (
    <Backdrop
      opacity={isOpen ? 1 : 0}
      visibility={isVisible ? 'visible' : 'hidden'}
      onClick={handleClose}
      onTransitionEnd={handleMakeInvisible}
      aria-hidden={!isOpen}
    >
      <Dialog
        maxWidth={width}
        role="dialog"
        tabIndex={1}
        onClick={handleStopPropagation}
      >
        <CloseButton title="Fechar" onClick={handleClose}>
          <img
            alt="ícone de fechamento de janela"
            src="/img/close.svg"
            title="Fechar"
          />
        </CloseButton>

        {isVisible && children}
      </Dialog>
    </Backdrop>
  )
}
