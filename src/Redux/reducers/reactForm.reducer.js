import { ReactFormConst } from "./reactForm.const";

const stateDefault = {
  DSSV: [],
  svEdit: null,
  mangTK: [],
}
export const ReactFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
      case ReactFormConst.submit: {
        const newDSSV = [...state.DSSV];
        newDSSV.push(action.payload);
        state.DSSV = newDSSV;
        return {...state};
      //   state.DSSV.push(action.payload)
      //   return { ...state }
      }
         
      case ReactFormConst.delete:
          state.DSSV = state.DSSV.filter((sv) => sv !== action.payload)
          return { ...state }
      case ReactFormConst.edit:
          state.svEdit = action.payload
          return { ...state }
      case ReactFormConst.update:{
          const newDSSV = [...state.DSSV]
          const index = state.DSSV.findIndex((sv) => sv.maSV === action.payload.maSV)
          newDSSV.splice(index, 1, action.payload)
          state.DSSV = newDSSV;
          state.svEdit = null;
          return { ...state }
      }
      case ReactFormConst.search:{
        
          if (action.keySearch) {
            let searchName = state.DSSV.filter((sv) =>{
              return sv.maSV.toLocaleLowerCase().includes((action.keySearch).toLocaleLowerCase().trim());
            })
            state.mangTK = searchName;
          } else{
            state.mangTK = []
          }
          return { ...state }
         
      }
      default:

        return state;
  }

}