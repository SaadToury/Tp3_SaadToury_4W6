export class Score{

    constructor(
        public id : number,
        public Username : string | null,
        public date : string | null,
        public Temps : string,
        public Value : number,
        public Visibilite : boolean
    ){}

}