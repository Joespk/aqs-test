import { InitialState, SetActiveLinkAction } from '../types/types';

// กำหนดค่าเริ่มต้นของ state ด้วยค่าที่ดึงมาจาก localStorage หรือใช้ค่าว่างเปล่าถ้าไม่มี
const initialState: InitialState = {
  activeLink: '',
};

const activeLinkReducer = (
  state = initialState,
  action: SetActiveLinkAction | { type: string },
) => {
  switch (action.type) {
    case 'setActiveLink':
      return { ...state, activeLink: (action as SetActiveLinkAction).payload };
    default:
      return state;
  }
};

export default activeLinkReducer;
