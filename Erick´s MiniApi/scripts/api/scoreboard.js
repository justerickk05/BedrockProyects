import { world } from "@minecraft/server";
import { API_Funcions } from "./FunctionClass";

export class API_ScoreboardExtra{
    #random = new API_Funcions().math.random
    #score = world.scoreboard

    giveaway(objectiveID,prize){
        let objective = this.#score.getObjective(objectiveID)
        let participants = objective.getParticipants()
        let r = this.#random(0,participants.length - 1)
        objective.addScore(participants[r],prize)
    }

}
