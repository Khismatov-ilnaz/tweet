console.log('work')

const dan = {
    id: 'dan_abramov',
    name:'Dan Abramov',
    avatarUrl: 'http://twitter.com/50/50',
}
const firstTweet = {
    id: 1166364879852359681,
    author: dan,
    content: '...',
    created: 1569659172,
    comments: 183,
    retweets: 988,
    likes: 6324,
}



function Tweet(id, author, content) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.comments = 0;
        this.retweets = 0;
        this.likes = 0;
}
const secondTweet = new Tweet(1, dan, 'Hello world!');
console.log(secondTweet);
const thirdTweet = new Tweet(2, dan, 'learn react!');
console.log(thirdTweet);


const created = firstTweet.created;
const date = new Date(created * 1000); //что это значит?
console.log(date.getFullYear()); //что это значит?