import { Modal } from "@mui/material";
import { ModalContent, ModalItem } from "../../../styles/styles";
import { ModalComponentType } from "../../../types/types";

export const ModalComponent = ({
  setIsOpenModal,
  isOpenModal,
  data,
}: ModalComponentType) => {
  const { id, name, year, color, pantone_value } = data;

  return (
    <Modal onClose={() => setIsOpenModal(false)} open={isOpenModal}>
      <ModalContent>
        <ModalItem>{id}</ModalItem>
        <ModalItem>{name}</ModalItem>
        <ModalItem>{year}</ModalItem>
        <ModalItem>{color}</ModalItem>
        <ModalItem>{pantone_value}</ModalItem>
      </ModalContent>
    </Modal>
  );
};
