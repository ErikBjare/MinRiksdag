import { Component, OnInit } from '@angular/core';
import {default as members} from '../../assets/members.json';

export interface Party {
  id: number;
  name: string;
}
export interface Vote {
  id: number;
  name: string;
}


@Component({
  selector: 'app-riksdag',
  templateUrl: './riksdag.component.html',
  styleUrls: ['./riksdag.component.scss']
})
export class RiksdagComponent implements OnInit {
    parties: Party[] =[
      { id: 1, name: 'V' },
      { id: 2, name: 'S' },
      { id: 3, name: 'MP' },
      { id: 4, name: 'C' },
      { id: 5, name: 'L' },
      { id: 6, name: 'M' },
      { id: 7, name: 'KD' },
      { id: 8, name: 'SD' }
    ];

    members: [];
    stats = {ja: 0, nej:0, frånvaro: 0, avstår: 0};

    selectedParty = '';
    memberParty = '';



    selectParty(party){
        let no, yes, abs, blank = 0;
        let id = Object.keys(members).filter(memberID=> (members[memberID].party === party.name));
        let list = [];
        for(var i = 0; i < 10; i++) {
            let member = members[id[i]];

            yes += member.aggregate_votes.Ja;
            no += member.aggregate_votes.Nej;
            abs += member.aggregate_votes.Frånvarande;
            blank += member.aggregate_votes.Avstår;
            list.push(member);
        }
         this.members = list;
         this.stats.ja = yes;
         console.log(yes);


    }



  constructor() { }

  ngOnInit() {
  }



}
