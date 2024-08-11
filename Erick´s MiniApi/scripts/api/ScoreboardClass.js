import { world } from "@minecraft/server";
import { API_ScoreboardExtra } from "./scoreboard";

export class API_Scoreboard{
    #score = world.scoreboard

    get Extra(){
        return new API_ScoreboardExtra
    }

    getScore(player,objectiveID){
        return this.#score.getObjective(objectiveID).getScore(player)
    }

    getScores(objectiveID){
        return this.#score.getObjective(objectiveID).getScores()
    }

    getObjectives(){
        return this.#score.getObjectives()
    }

    getPlayerScores(player){
        let output = [{objectiveID:undefined,score:undefined}]
        this.#score.getObjectives().map(objective => {
            objective.getParticipants().map(participant => {
                if(player.scoreboardIdentity.id !== participant.id) return
                if(output[0].objectiveID === undefined && output[0].score === undefined){
                    output[0].objectiveID = objective.id
                    output[0].score = objective.getScore(player)
                    return
                }
                output.push({objectiveID:objective.id,score:this.#score.getObjective(objective.id).getScore(player)})
            })
        })
        return output
    }

}