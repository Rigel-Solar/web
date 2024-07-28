import { useCallback, useState } from "react";

const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [hasEditedData, setHasEditedData] = useState(false);
  const [openConfirmCloseModal, setOpenConfirmCloseModal] = useState(false);

  const handleOpenModal = useCallback(() => setOpenModal(true), []);
  const handleCloseModal = useCallback(() => setOpenModal(false), []);

  const onOpenChange = useCallback(() => {
    if (hasEditedData) {
      setOpenConfirmCloseModal(true);
      return;
    }
    setOpenModal((prevState) => !prevState);
  }, [hasEditedData]);

  const onConfirmCloseModal = useCallback(() => {
    setHasEditedData(false);
    setOpenConfirmCloseModal(false);
    setOpenModal(false);
  }, []);

  return {
    openModal,
    hasEditedData,
    openConfirmCloseModal,
    setOpenConfirmCloseModal,
    handleOpenModal,
    handleCloseModal,
    onOpenChange,
    onConfirmCloseModal,
    setHasEditedData,
  };
};

export default useModal;
