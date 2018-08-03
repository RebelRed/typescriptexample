class Facebook{

  Username: string;
  private Birthdate: string;  //private class
  CurrentLocation: string;
  relationshipStatus: string;
  occupation: string;
  collegeName?: string;
  schoolName?: string;
  FriendsCount: number;
  FriendsName: string[];
  checkInns: string;
  Likes: number;
  email: string;
  gender: string;
  languagesKnown: string[];
  religiousViews: string;

  constructor(Username: string, Birthdate: string, currentCity: string,RelationshipStatus: string, occupation: string, college: string, school: string, friendsCount: number, friendsName: string[], CheckInns: string, Likes: number, email: string, Gender: string, Languages: string[], ReligiousViews: string  ){
    this.Username = Username;
    this.Birthdate = Birthdate;
    this.CurrentLocation = currentCity;
    this.relationshipStatus = RelationshipStatus;
    this.occupation = occupation;
    this.collegeName = college;
    this.schoolName = school;
    this.FriendsCount = friendsCount;
    this.FriendsName = friendsName;
    this.checkInns = CheckInns;
    this.Likes = Likes;
    this.email = email;
    this.gender = Gender;
    this.languagesKnown = Languages;
    this.religiousViews = ReligiousViews;
    
  }

  getBirthdate = () => {
    return this.Birthdate 
  }
  getUserName = () => {
    return this.Username
  }
  getFriendsName = () => {
    return this.FriendsName
  }
  getLanguagesKnown = () => {
    return this.languagesKnown
  }
  getReligiousViews = () => {
    return this.relationshipStatus
  }
  getCurrentcity = () => {
    return this.CurrentLocation
  }
}

let fb = new Facebook('rgd',"26-4-1993",'chennai','single','developer','vel tech university',' ',3,['raja','ram','rahul'],'hotel rainbow',2000,'xxx@gmail.com',"male",['tamil','english','hindi'],'spirituality')

console.log(fb.getUserName());

console.log(fb.getFriendsName());

console.log(fb.getLanguagesKnown());

console.log(fb.getReligiousViews());

console.log(fb.getCurrentcity());



// school name is optional. so if the school name is not given we can show other message
let school = fb.schoolName;
if (school == " "){
  console.log("Sorry Information about school is not Provided");
}else{
  console.log(school);
}

let college = fb.collegeName;
if (college == " "){
  console.log("Sorry Information about college is not Provided");
}else{
  console.log(college)
}

let relationship = fb.relationshipStatus;
console.log(relationship)

let checkInns = fb.checkInns;
console.log(checkInns)

let gender = fb.gender;
console.log(gender)
