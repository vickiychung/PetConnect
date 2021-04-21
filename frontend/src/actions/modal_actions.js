export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    showModal: true
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    showModal: false
  };
};