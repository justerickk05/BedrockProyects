export class API_FuncionsMath{
    
    random(min,max){
        let r = Math.floor(Math.random() * ((max - min) + 1))
        return (min + r)
    }

}