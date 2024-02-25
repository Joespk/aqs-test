import { InitialState, SetActiveLinkAction } from '../types/types';

// ดึงค่า activeLink จาก localStorage
const storedState = localStorage.getItem('activeLinkState');

// กำหนดค่าเริ่มต้นของ state ด้วยค่าที่ดึงมาจาก localStorage หรือใช้ค่าว่างเปล่าถ้าไม่มี
const initialState: InitialState = {
  activeLink: storedState ? JSON.parse(storedState).activeLink : '',
};

const activeLinkReducer = (
  state = initialState,
  action: SetActiveLinkAction | { type: string },
) => {
  switch (action.type) {
    case 'setActiveLink':
      // เมื่อมีการเปลี่ยนแปลงค่า activeLink ให้บันทึกค่าลงใน localStorage เพื่อให้สามารถเรียกใช้ได้ในการโหลดหน้าใหม่
      localStorage.setItem(
        'activeLinkState',
        JSON.stringify({ activeLink: (action as SetActiveLinkAction).payload }),
      );
      return { ...state, activeLink: (action as SetActiveLinkAction).payload };
    default:
      return state;
  }
};

export default activeLinkReducer;
