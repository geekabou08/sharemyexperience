import { Component, OnInit } from '@angular/core';
import {HomeService} from './../../Services/home.service';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    title="Home Page";
    content= `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat soluta id ratione sunt accusantium perspiciatis, necessitatibus asperiores placeat. Amet iste hic dolor perspiciatis, natus nihil laboriosam asperiores officia cupiditate quae!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veniam repellendus harum tempore eum ullam, tempora sequi cumque dolores et, ab placeat sed excepturi ea architecto suscipit vero facilis quo.`;
    
    constructor (private newService: HomeService) {}
    
    ngOnInit(){ 
        let posts : Object; 
        posts=this.newService.getAllPosts();
        console.log(posts);
    }

}