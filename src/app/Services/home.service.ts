import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    root: string;
  
    constructor(private http: Http) {
        this.root= 'https://jsonplaceholder.typicode.com';
     }
    public getAllPosts(){
        return this.http.get(this.root+'/posts')
            .map(
                (response: Response) => response.json())
            .subscribe(
            (data)=>data);
    }
    
}