export class Survey {
    id!: number;
    title!: string;
    description!: string;
    createDate!: Date;
    startDate!: Date;
    endDate!: Date;
    activated!: boolean;
    imageURL!: string;
    questions!: any;
    
    constructor(id: number, title: string, description: string, startDate: Date, endDate: Date, imageURL: string, questions: any){
        this.id = id;
        this.title = title;
        this.description = description;
        this.createDate = new Date();
        this.startDate = startDate;
        this.endDate = endDate;
        this.activated = true;
        this.imageURL = imageURL;
        this.questions = questions;
    }

}

