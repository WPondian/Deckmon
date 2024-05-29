import { Player } from './player';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  private readonly API = "https://api-deckmon.vercel.app/api/v1/user";

  private http = inject(HttpClient);

  list(): Observable<Player[]> {
    return this.http.get<Player[]>(this.API);
  }

  create(player: Player): Observable<Player> {
    console.log(player);
    return this.http.post<Player>(`${this.API}/`, player);
  }

  update(player: Player): Observable<Player> {
    const url = `${this.API}/${player.id}`
    return this.http.put<Player>(url, player)
  }

  remove(id: string): Observable<Player> {
    const url = `${this.API}/${id}`
    return this.http.delete<Player>(url)
  }

  searchId(id: string): Observable<Player> {
    const url = `${this.API}/${id}`
    return this.http.get<Player>(url)
  }
}
