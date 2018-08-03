var Facebook = /** @class */ (function () {
    function Facebook(Username, Birthdate, currentCity, RelationshipStatus, occupation, college, school, friendsCount, friendsName, CheckInns, Likes, email, Gender, Languages, ReligiousViews) {
        var _this = this;
        this.getBirthdate = function () {
            return _this.Birthdate;
        };
        this.getUserName = function () {
            return _this.Username;
        };
        this.getFriendsName = function () {
            return _this.FriendsName;
        };
        this.getLanguagesKnown = function () {
            return _this.languagesKnown;
        };
        this.getReligiousViews = function () {
            return _this.relationshipStatus;
        };
        this.getCurrentcity = function () {
            return _this.CurrentLocation;
        };
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
    return Facebook;
}());
var fb = new Facebook('rgd', "26-4-1993", 'chennai', 'single', 'developer', 'vel tech university', ' ', 3, ['raja', 'ram', 'rahul'], 'hotel rainbow', 2000, 'xxx@gmail.com', "male", ['tamil', 'english', 'hindi'], 'spirituality');
console.log(fb.getUserName());
console.log(fb.getFriendsName());
console.log(fb.getLanguagesKnown());
console.log(fb.getReligiousViews());
console.log(fb.getCurrentcity());
// school name is optional. so if the school name is not given we can show other message
var school = fb.schoolName;
if (school == " ") {
    console.log("Sorry Information about school is not Provided");
}
else {
    console.log(school);
}
var college = fb.collegeName;
if (college == " ") {
    console.log("Sorry Information about college is not Provided");
}
else {
    console.log(college);
}
var relationship = fb.relationshipStatus;
console.log(relationship);
var checkInns = fb.checkInns;
console.log(checkInns);
var gender = fb.gender;
console.log(gender);
