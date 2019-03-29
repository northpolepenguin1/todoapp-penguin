import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  createTask(task: string[]) {
    // return this.httpClient.put('//httpbin.org/put', null); // todo apiに送る
    return this.httpClient.put('http://ec2-63-35-186-174.eu-west-1.compute.amazonaws.com:8080/put', task);
  }

  deleteTask(task: string[]) {
    // apiを叩いたら結果を返す
    // return this.httpClient.put('//httpbin.org/delete', null); // todo apiに送る
    return this.httpClient.put('http://ec2-63-35-186-174.eu-west-1.compute.amazonaws.com:8080/delete', task);
  }

  getTask(task: string[]) {
    // ec2からのレスポンスを取得
    return true;
  }
}
