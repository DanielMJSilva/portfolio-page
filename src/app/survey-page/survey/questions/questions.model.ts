export class Survey {
    id!: number;
    question!: string;
    isActivated!: boolean;
    answer!: any
   
    
    constructor(id: number, question: string, isActivated: boolean, ansewer: any){
        this.id = id;
        this.question = question;
        this.isActivated = isActivated;
        this.answer = ansewer;
    }

}