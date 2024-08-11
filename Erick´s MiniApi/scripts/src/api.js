import { API_Scoreboard } from "../api/ScoreboardClass"
import { API_Entities } from "../api/EntitiesClass"
import { API_Funcions } from "../api/FunctionClass"

export default {

    get scoreboard(){
        return new API_Scoreboard()
    },

    get entities(){
        return new API_Entities()
    },

    get functions(){
        return new API_Funcions()
    }

}


