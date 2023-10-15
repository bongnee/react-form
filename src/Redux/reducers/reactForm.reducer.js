import { ReactFormConst } from "./reactForm.const";


const stateForm = {
  DSSV: [], 

};
  
  export const ReactFormReducer = (state = stateForm, action) => {
    switch (action.type) {
      case ReactFormConst.submit:
          state.DSSV.push(action.payload)
          console.log(state.DSSV)
          return { ...state }
      default:
          return { ...state }
  }

}