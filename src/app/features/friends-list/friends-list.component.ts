import { Component, OnInit } from '@angular/core';
import { Friend } from '../../model/friend';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent implements OnInit {
  title: string = "Friends List:";
  friends: Friend[] | undefined;
  newFriend: Friend = new Friend();

  f1: Friend = new Friend("Gravy", 2, "greycatcantjump@gmail.com", true);
  f2: Friend = new Friend("Sheba", 10, "shebert@gmail.com", true);
  f3: Friend = new Friend("Valkyrie", 8, "linebackerkitty@gmail.com", true);
  f4: Friend = new Friend("Rockland", 15, "babycat@gmail.com", false);
  f5: Friend = new Friend("Moggy", 4, "floofbutt@gmail.com", false);

  ngOnInit(): void {
    this.friends = [this.f1, this.f2, this.f3, this.f4, this.f5];
  }

  addFriend(): void {
    this.friends?.push(this.newFriend);
    this.newFriend = new Friend();
  }

  deleteFriend(index: number) {
    // Remove the friend at the specified index
    this.friends?.splice(index, 1);
  }
}
