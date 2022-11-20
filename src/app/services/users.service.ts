import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: IUser[] = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      maidenName: 'Smitham',
      age: 50,
      gender: 'male',
      email: 'atuny0@sohu.com',
      phone: '+63 791 675 8914',
      username: 'atuny0',
      password: '9uQFF1Lh',
      birthDate: '2000-12-25',
      image: './assets/hicveldicta.png',
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      maidenName: 'Cole',
      age: 28,
      gender: 'male',
      email: 'hbingley1@plala.or.jp',
      phone: '+7 813 117 7139',
      username: 'hbingley1',
      password: 'CQutx25i8r',
      birthDate: '2003-08-02',
      image: './assets/doloremquesintcorrupti.png',
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      maidenName: 'Hoeger',
      age: 38,
      gender: 'male',
      email: 'rshawe2@51.la',
      phone: '+63 739 292 7942',
      username: 'rshawe2',
      password: 'OWsTbMUgFc',
      birthDate: '1992-12-30',
      image: './assets/consequunturautconsequatur.png',
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      maidenName: 'Maggio',
      age: 49,
      gender: 'male',
      email: 'yraigatt3@nature.com',
      phone: '+86 461 145 4186',
      username: 'yraigatt3',
      password: 'sRQxjPfdS',
      birthDate: '1969-01-16',
      image: './assets/facilisdignissimosdolore.png',
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      maidenName: 'Yundt',
      age: 38,
      gender: 'male',
      email: 'kmeus4@upenn.edu',
      phone: '+372 285 771 1911',
      username: 'kmeus4',
      password: 'aUTdmmmbH',
      birthDate: '1968-11-03',
      image: './assets/adverovelit.png',
    },
  ];

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(id: number): IUser {
    //For Testing (mock up data)
    return this.users.find((x) => x.id == id)!;
  }
}
