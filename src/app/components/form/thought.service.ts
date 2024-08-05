import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = "http://localhost:3000/thoughts"

  constructor(
    private http: HttpClient,
  ) { }

  list(page: number, filter: string, liked?: boolean): Observable<Thought[]> {
    const limitPerPage = 6

    let params = new HttpParams()
      .set("_page", page)
      .set("_limit", limitPerPage)

    if (filter.trim().length > 2) {
      params = params.set("q", filter)
    }

    if (liked) {
      params = params.set("liked", liked)
    }

    return this.http.get<Thought[]>(this.API, { params })
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought)
  }

  exclude(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`

    return this.http.delete<Thought>(url)
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`

    return this.http.put<Thought>(url, thought)
  }

  changeLiked(thought: Thought): Observable<Thought> {
    thought.liked = !thought.liked

    return this.edit(thought)
  }

  getById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`

    return this.http.get<Thought>(url)
  }
}
