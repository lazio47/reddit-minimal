import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PostAtributes } from "../../components/posts/post";

interface PostsListsAtt {
    [posts: string]: PostAtributes[]
}

const postsList:PostsListsAtt = {
    "facepalm": [
        {
            "title": "He must be stopped..",
            "id": "bbb",
            "author": "John_1992_funny",
            "score": 37149,
            "subreddit": "facepalm",
            "icon_img": "https://i.redd.it/snoovatar/avatars/d307dca3-a61d-47a8-affe-9938cdd1d072-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/egw3iawbuyge1.png",
            "video": null,
            "num_comments": 1070,
            "created_utc": "2025-02-03 18:18:22",
            "permalink": "/r/facepalm/comments/1igvt6x/he_must_be_stopped/",
            "isComment": false
        },
        {
            "title": "Elon is angry at Reddit! ❄️",
            "id": "ccc",
            "author": "Miserable-Lizard",
            "score": 5547,
            "subreddit": "facepalm",
            "icon_img": "https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfM2I0NzdhNmIxYmUyMzY2MjhiMDg4MzllMWU4Y2Y4YmE4ZDkzNTg5YV8xNjg5_rare_78582579-6892-45f3-8ef2-d75db215ec25-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/pxazk9zefzge1.jpeg",
            "video": null,
            "num_comments": 620,
            "created_utc": "2025-02-03 20:16:25",
            "permalink": "/r/facepalm/comments/1igyrwb/elon_is_angry_at_reddit/",
            "isComment": false
        },
        {
            "title": "Facepalm at what lead to this decision!!",
            "id": "ddd",
            "author": "Silent-Resort-3076",
            "score": 30253,
            "subreddit": "facepalm",
            "icon_img": "https://i.redd.it/snoovatar/avatars/4374ecf7-68cb-40f4-8f5e-d5143cd6dbe5-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/1u1hezcwwxge1.png",
            "video": null,
            "num_comments": 1306,
            "created_utc": "2025-02-03 15:11:37",
            "permalink": "/r/facepalm/comments/1igr8t2/facepalm_at_what_lead_to_this_decision/",
            "isComment": false
        },
        {
            "title": "Trumps rule doesn't benefit a single American",
            "id": "eee",
            "author": "IHavePaidMyTaxes",
            "score": 4932,
            "subreddit": "facepalm",
            "icon_img": "https://styles.redditmedia.com/t5_85dc5s/styles/profileIcon_1pwu35ndcmid1.jpeg",
            "selftext": "",
            "imagem": "https://i.redd.it/vis9aeifezge1.png",
            "video": null,
            "num_comments": 238,
            "created_utc": "2025-02-03 20:10:54",
            "permalink": "/r/facepalm/comments/1igymxs/trumps_rule_doesnt_benefit_a_single_american/",
            "isComment": false
        },
        {
            "title": "Tiny Peen",
            "id": "fff",
            "author": "nanashi775",
            "score": 2518,
            "subreddit": "facepalm",
            "icon_img": "https://styles.redditmedia.com/t5_16obk0/styles/profileIcon_snoocdb9e4aa-f1f9-4706-b656-059e917d4b06-headshot.png",
            "selftext": "🤣🤣🤣 Bud's Pee Pee is smaller than his ego. The guy is that shit talking kid on the block that takes his ball and goes home when things don't go well. You know that kid that thinks taking his ball home is going to change the game rules and someone just brings another ball, so he cries to his mom.",
            "imagem": "https://i.redd.it/mgfznkva40he1.jpeg",
            "video": null,
            "num_comments": 627,
            "created_utc": "2025-02-03 22:35:54",
            "permalink": "/r/facepalm/comments/1ih281y/tiny_peen/",
            "isComment": false
        },
        {
            "title": "Admit it, you got scammed 🤦",
            "id": "ggg",
            "author": "Nice_Substance9123",
            "score": 30888,
            "subreddit": "facepalm",
            "icon_img": "https://styles.redditmedia.com/t5_42p458/styles/profileIcon_snoo844676ff-4438-46b2-a3c2-09931edbe59a-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/n6rxqymiwwge1.jpeg",
            "video": null,
            "num_comments": 1441,
            "created_utc": "2025-02-03 11:46:59",
            "permalink": "/r/facepalm/comments/1ign9ne/admit_it_you_got_scammed/",
            "isComment": false
        },
        {
            "title": "Donnie Dumbfuck loses again - NO TARIFFS LOL",
            "id": "hhh",
            "author": "PairRevolutionary669",
            "score": 1921,
            "subreddit": "facepalm",
            "icon_img": "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png",
            "selftext": "",
            "imagem": "https://i.redd.it/ro6w4j7huzge1.png",
            "video": null,
            "num_comments": 491,
            "created_utc": "2025-02-03 21:41:08",
            "permalink": "/r/facepalm/comments/1ih0vnz/donnie_dumbfuck_loses_again_no_tariffs_lol/",
            "isComment": false
        },
        {
            "title": "I'd love to see this actually happen",
            "id": "iii",
            "author": "IHavePaidMyTaxes",
            "score": 2381,
            "subreddit": "facepalm",
            "icon_img": "https://styles.redditmedia.com/t5_85dc5s/styles/profileIcon_1pwu35ndcmid1.jpeg",
            "selftext": "",
            "imagem": "https://i.redd.it/bi13wox5gzge1.png",
            "video": null,
            "num_comments": 55,
            "created_utc": "2025-02-03 20:20:37",
            "permalink": "/r/facepalm/comments/1igyvmf/id_love_to_see_this_actually_happen/",
            "isComment": false
        },
        {
            "title": "Collateral damage😵",
            "id": "jjj",
            "author": "javelin3000",
            "score": 11149,
            "subreddit": "facepalm",
            "icon_img": "https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfODM0ZTdhMWU0MmViN2Q2NWI0MjI3ZTVhMGUzYWU2MGI5NjE0NTIyN18zNjQ_rare_347b56d5-d3e6-4d53-ab01-1df0de16c131-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/divilkbt7xge1.png",
            "video": null,
            "num_comments": 562,
            "created_utc": "2025-02-03 12:50:16",
            "permalink": "/r/facepalm/comments/1igobu7/collateral_damage/",
            "isComment": false
        },
        {
            "title": "And They’ll Just Keep Clapping",
            "id": "aaa",
            "author": "ParticularAd8919",
            "score": 2870,
            "subreddit": "facepalm",
            "icon_img": "https://styles.redditmedia.com/t5_5c0qka/styles/profileIcon_snoo06b23fb8-068f-4147-8ce5-7cf76f0d02f2-headshot.png",
            "selftext": "",
            "imagem": "https://i.redd.it/vcxt2c2zxyge1.jpeg",
            "video": null,
            "num_comments": 65,
            "created_utc": "2025-02-03 18:38:39",
            "permalink": "/r/facepalm/comments/1igwbcw/and_theyll_just_keep_clapping/",
            "isComment": false
        }
]};

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: postsList
    },
    reducers: {
        addPosts: (state, action) => {
            state.posts = {...state.posts, ...action.payload};
        }
    }
});

export default postSlice.reducer;
export const selectPosts = (post:string) => (state:RootState) => state.posts.posts[post];
export const selectOnePost = (id:string) => (post:string) => (state:RootState) => state.posts.posts[post].filter((post) => post.id === id)[0] || {};
export const {addPosts} =  postSlice.actions;