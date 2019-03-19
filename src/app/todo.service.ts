import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  createTask(task: string[]) {
    return this.httpClient.put('http://httpbin.org/put', null); // todo apiに送る
  }

  deleteTask(task: string[]) {
    // apiを叩いたら結果を返す
    return this.httpClient.put('http://httpbin.org/delete', null); // todo apiに送る
  }
}
