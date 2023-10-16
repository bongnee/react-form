import { ReactFormConst } from "./reactForm.const";

export const submitCreator = (payload) => { 
    return {
        type: ReactFormConst.submit,
        payload,
    }
 }
 export const editCreator = (payload) => { 
    return {
        type: ReactFormConst.edit,
        payload,
    }
 }
 export const deleteCreator = (payload) => { 
    return {
        type: ReactFormConst.delete,
        payload,
    }
 }
 export const updateCreator = (payload) => { 
    return {
        type: ReactFormConst.update,
        payload,
    }
 }