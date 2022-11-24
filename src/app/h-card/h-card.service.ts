



export class MatchesService{
  getMatches(){
    return [
      {
        'id' : 1,
        'date': "22/11/2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 2,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 3,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '1 2 3',

      },
      {
        'id' : 4,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 5,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 7,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '4 2 1',


      },
      {
        'id' : 8,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '1 2 3',


      }
    ];
  }
  getMatchesTermine(){
    return [
      {
        'id' : 3,
        'date': "22/11/2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '3 2 1',

      },
      {
        'id' : 7,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '4 2 1',

      },
      {
        'id' : 8,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '1 2 3',

      }
    ];
  }


  getMatchesVenir(){
    return [
      {
        'id' : 1,
        'date': "22/11/2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 2,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
      {
        'id' : 4,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',


      },
      {
        'id' : 5,
        'date': "22-11-2022",
        'type': true, //true=single, false=double
        'gender': "man", //true=man, false=women
        'score': '',

      },
    ];
  }


getMatchePlayers(id:number){
  return (
    {'team1' : [
        {
          'id':1,
          'name' : 'klane',
          'firstname' : 'stuf'
        }
      ],
      'team2' : [
        {
          'id':2,
          'name' : 'Jean der var',
          'firstname' : 'staint'
        }
      ]
    }
  );
}



}
