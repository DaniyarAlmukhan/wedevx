import { ModalContainer, ModalContent, ModalOverlay } from "./modal.styles";

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: IModalProps) {
  return <ModalContainer>
    <ModalOverlay onClick={onClose} data-testId="modal-overlay" />
    <ModalContent>
      {children}
    </ModalContent>
  </ModalContainer>
}
