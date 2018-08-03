var YouTube = /** @class */ (function () {
    //constructor 
    function YouTube(videoSize, videoTitle, videoViews, videoChannel, videoCommentsCount, videoLikes, videoDislikes, videoShares, channelSubscription, videoComments) {
        var _this = this;
        this.getVideosize = function () {
            return _this.videoSize;
        };
        this.getVideoViews = function () {
            return _this.videoViews;
        };
        this.getVideoShares = function () {
            return _this.videoShares;
        };
        this.getVideoCommentsCount = function () {
            return _this.videoCommentsCount;
        };
        this.videoSize = videoSize;
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoChannel = videoChannel;
        this.videoCommentsCount = videoCommentsCount;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoShares = videoShares;
        this.channelSubscription = channelSubscription;
        this.videoComments = videoComments;
    }
    return YouTube;
}());
var video = new YouTube(30, 'Good video', 200, 'Good channel', 3, 234, 34, 50, 100, ['something', 'another', 'comments']);
console.log(video.getVideosize());
console.log(video.getVideoViews());
console.log(video.getVideoShares());
console.log(video.getVideoCommentsCount());
var title = video.videoTitle;
var channel = video.videoChannel;
var comments = video.videoComments;
var likes = video.videoLikes;
var dislikes = video.videoDislikes;
console.log(title);
console.log(channel);
console.log(comments);
console.log(likes);
console.log(dislikes);
