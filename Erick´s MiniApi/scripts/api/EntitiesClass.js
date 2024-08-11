import { DimensionTypes, world } from "@minecraft/server";
import { API_Funcions } from "./FunctionClass";

export class API_Entities{
    #random = new API_Funcions().math.random

    getAllPlayers(){
        return world.getAllPlayers()
    }

    getAllEntities(){
        let entities = [world.getEntity(world.getAllPlayers()[0].id)]
        entities.pop()
        DimensionTypes.getAll().map(dimension =>{
            world.getDimension(dimension.typeId).getEntities().map(entity =>{
                if(entities.includes(entity)) return
                entities.push(entity)
            })
        })
        return entities
    }

    getRandomPlayer(){
        let players = world.getAllPlayers()
        return players[this.#random(0,players.length - 1)]
    }

    getRandomEntity(){
        let entities = this.getAllEntities()
        return entities[this.#random(0,entities.length - 1)]
    }

}