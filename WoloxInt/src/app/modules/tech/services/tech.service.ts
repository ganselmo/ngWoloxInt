import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../models/filter.model';
import { TechModel } from '../models/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  baseTechs: BehaviorSubject<Array<TechModel>> = new BehaviorSubject<Array<TechModel>>([]);;
  filteredTechs: BehaviorSubject<Array<TechModel>> = new BehaviorSubject<Array<TechModel>>([]);;
  constructor(private http: HttpClient) {
    this.likedTechs = this.getLiked();
    this.initTechs().then(
      (data: Array<TechModel>) => {
        this.baseTechs.next(data)
        this.filteredTechs.next(data.map(
          (el) => {
            el.liked = this.likedTechs.includes(el.tech)
            return el
          }
        ))
      }

    )
  }

  initTechs(): Promise<Object> {
    return this.http.get('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs').toPromise();
  }

  getTechs(): BehaviorSubject<Array<TechModel>> {
    return this.filteredTechs;
  }

  filter(filters: Array<Filter>) {
    let result = this.baseTechs.value;
    filters.forEach(filter => {
      result = result.filter((element) => {
        return element[filter.field].toLowerCase().includes(filter.value.toLowerCase())
      })
    });
    this.filteredTechs.next(result)
  }

  sortAsc(field: string) {
    let result = this.filteredTechs.value;
    result.sort(function (a: TechModel, b: TechModel): number {
      if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return 1;
      }
      if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return -1;
      }
      return 0;
    });
    this.filteredTechs.next(result)
  }
  likedTechs: Array<string>;
  likedTechsCount:BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getLiked(): Array<string> {

    const likedTechsString = localStorage.getItem('likedTechs');
    let likedArray = JSON.parse(likedTechsString)
    if(likedArray!=null)
    {
      this.likedTechsCount.next(likedArray.length)
    }
    else{
      likedArray = []
    }


    return likedArray
  }


  saveLike(tech: string) {
    this.likedTechs.push(tech)
    this.saveLiked()
  }
  deleteLike(tech: string) {
    var index =   this.likedTechs.indexOf(tech);
    if (index !== -1) {
      this.likedTechs.splice(index, 1);
    }

    this.saveLiked()
  }

  getLikedTechsCount() :BehaviorSubject<number>
  {
    return this.likedTechsCount;
  }
  private saveLiked() {
    this.likedTechsCount.next(this.likedTechs.length)
    localStorage.setItem('likedTechs', JSON.stringify(this.likedTechs));
  }

  sortDesc(field: string): void {
    let result = this.filteredTechs.value;
    result.sort(function (a: TechModel, b: TechModel): number {
      if (a[field].toLowerCase() > b[field].toLowerCase()) {
        return -1;
      }
      if (a[field].toLowerCase() < b[field].toLowerCase()) {
        return 1;
      }
      return 0;
    });
    this.filteredTechs.next(result)
  }


}