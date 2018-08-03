class YouTube{

  videoSize: number;
  videoTitle: string;
  videoViews: number;
  videoChannel: string;
  videoCommentsCount: number;
  videoLikes: number;
  videoDislikes: number;
  videoShares: number;
  channelSubscription: number;
  videoComments: string[];

  //constructor 
  constructor(videoSize: number, videoTitle: string, videoViews: number, videoChannel: string,videoCommentsCount: number, videoLikes: number, videoDislikes: number, videoShares: number, channelSubscription: number, videoComments: string[]){
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
  
  getVideosize = () => {
    return this.videoSize
  }

  getVideoViews = () => {
    return this.videoViews
  }
  getVideoShares = () => {
    return this.videoShares
  }
  getVideoCommentsCount = () => {
    return this.videoCommentsCount
  }
}

let video = new YouTube(30,'Good video',200,'Good channel',3,234,34,50,100,['something','another','comments'])


console.log(video.getVideosize());
console.log(video.getVideoViews());
console.log(video.getVideoShares());
console.log(video.getVideoCommentsCount());



let title = video.videoTitle;
let channel = video.videoChannel;
let comments = video.videoComments;
let likes = video.videoLikes;
let dislikes = video.videoDislikes;


console.log(title)
console.log(channel)
console.log(comments)
console.log(likes)
console.log(dislikes)