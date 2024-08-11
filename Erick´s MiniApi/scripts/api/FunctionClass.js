import { API_FuncionsMath } from "./function";

export class API_Funcions {
    
    get math(){
        return new API_FuncionsMath()
    }

}