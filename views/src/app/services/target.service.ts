import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  basePath = 'apiGoals/api/users';

  constructor(private http: HttpClient) { }

  addGoals(userId, goalName, price) {
    return this.http.post(this.basePath + '/'+ userId + '/goals', {name: goalName, total: price});
  }

  getGoals(userId) {
    return this.http.get(this.basePath + '/' + userId + '/goals');
  }

  getGoal(userId, goalId) {
    return this.http.get(this.basePath + '/' + userId + '/goals/'+ goalId);
  }

  addTips(userId, goalId, amount) {
    return this.http.put(this.basePath + '/'+ userId + '/goals/'+ goalId + '/tips/' + amount, {});
  }
}
