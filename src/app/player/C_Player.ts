

export class C_Player {
  public id: number;
  public name: String;
  public firstname: String;
  public gender: String;
  public birthdate: String;
  public birthplace: String;
  public nationality: String;
  public domHand: String;
  public beginningCareer: String;
  public playTime: number;
  public height: number;
  public weight: number;
  public wonMatches: number;
  public lostMatches: number;
  public currentRank: number;
  public bestRank: number;


  constructor(id: number, name: String, firstname: String, gender: String, birthdate: String, birthplace: String, nationality: String, domHand: String, beginningCareer: String, playTime: number, height: number, weight: number, wonMatches: number, lostMatches: number, currentRank: number, bestRank: number) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.gender = gender;
    this.birthdate = birthdate;
    this.birthplace = birthplace;
    this.nationality = nationality;
    this.domHand = domHand;
    this.beginningCareer = beginningCareer;
    this.playTime = playTime;
    this.height = height;
    this.weight = weight;
    this.wonMatches = wonMatches;
    this.lostMatches = lostMatches;
    this.currentRank = currentRank;
    this.bestRank = bestRank;
  }
}

