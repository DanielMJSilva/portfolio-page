export class Project {
title: string;
link: string;
votes: number;
description: string;
youtube: string;
date: string;



    constructor(title: string, link: string, description: string, youtube: string, date: string, votes?: number){
        this.title = title;
        this.link = link;
        this.description = description;
        this.youtube = youtube;
        this.date = date;
        this.votes = votes || 0;
    }
}