import { ReactFormConst } from "./reactForm.const";

const STATE_TTSV = {
  DSSV: [],
  svEdit: null,
}
export const ReactFormReducer = (state = STATE_TTSV, action) => {
  switch (action.type) {
      case ReactFormConst.submit:
          state.DSSV.push(action.payload)
          return { ...state }
      case ReactFormConst.delete:
          state.DSSV = state.DSSV.filter((sv) => sv !== action.payload)
          return { ...state }
      case ReactFormConst.edit:
          state.svEdit = action.payload
          return { ...state }
      case ReactFormConst.update:
          const newDSSV = [...state.DSSV]
          const index = state.DSSV.findIndex((sv) => sv.maSV === action.payload.maSV)
          newDSSV.splice(index, 1, action.payload)
          state.DSSV = newDSSV;
          state.svEdit = null;
          return { ...state }
      default:
          return { ...state }
  }

}