(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){},37:function(e,a,t){e.exports=t(51)},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),i=(t(32),t(3)),s=t(6),o=t(4),m=t(10),d=t(11),u=t(5),p=t.n(u),h=t(21),v=t(19),E=t.n(v),g=t(2),f={effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0,type:"none"},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},b=function(e){var a=e.topAnime;return r.a.createElement("section",{id:"trending-anime"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{id:"top-anime",className:"row"},r.a.createElement(E.a,Object.assign({},f,{shouldSwiperUpdate:!0}),a&&a.map(function(e){return r.a.createElement("div",{style:{width:"40%"},className:"card"},r.a.createElement(g.b,{className:"nav-link",to:"/anime/".concat(e.mal_id,"_").concat(e.type)},r.a.createElement("img",{src:e.image_url,alt:"",className:"anime-card-img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center font-weight-bold"},e.title),r.a.createElement("p",{className:"card-text text-right font-weight-bold"},"Rating:"," ",r.a.createElement("span",{className:"font-weight-normal text-success"},e.score))))})),r.a.createElement("div",{className:"top-anime-title"},r.a.createElement("h2",{className:"trending-header"},"Top Anime")))))))},w={effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0,type:"none"},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},N=function(e){var a=e.topManga;return r.a.createElement("section",{id:"trending-manga"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement(E.a,Object.assign({},w,{shouldSwiperUpdate:!0}),a&&a.map(function(e){return r.a.createElement("div",{style:{width:"40%"},className:"card"},r.a.createElement(g.b,{className:"nav-link",to:"/anime/".concat(e.mal_id,"_").concat(e.type)},r.a.createElement("img",{src:e.image_url,alt:"",className:"anime-card-img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center font-weight-bold"},e.title),r.a.createElement("p",{className:"card-text text-right font-weight-bold"},"Rating:"," ",r.a.createElement("span",{className:"font-weight-normal text-success"},e.score))))})),r.a.createElement("div",{className:"top-anime-title"},r.a.createElement("h2",{className:"trending-header"},"Manga")))))))},y=t(16),A=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{padding:"100px 0"},className:"m-auto"},r.a.createElement("img",{style:{height:"200px",width:"200px"},src:"https://www.knog.com.au/media/vss_spinandwin/Loader.gif",alt:"Loading"}))))},S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.getTopAnime,t=e.getTopManga;a(),t()}},{key:"render",value:function(){var e=this.props,a=e.topAnime,t=e.topManga;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"banner"},r.a.createElement("div",{id:"overlay"})),a?r.a.createElement(b,{topAnime:a}):r.a.createElement(A,null),t?r.a.createElement(N,{topManga:t}):r.a.createElement(A,null))}}]),a}(n.Component),j={getTopAnime:function(){return function(){var e=Object(h.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api.jikan.moe/v3/top/anime/").then(function(e){return e.json()}).then(function(e){return e.top}).catch(function(e){return console.log(e)});case 3:t=e.sent,a({type:"GET_TOP_ANIME",payload:t});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},getTopManga:function(){return function(){var e=Object(h.a)(p.a.mark(function e(a){var t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("https://api.jikan.moe/v3/top/manga/").then(function(e){return e.json()}).then(function(e){return e.top}).catch(function(e){return console.log(e)});case 3:t=e.sent,a({type:"GET_TOP_MANGA",payload:t});case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}},O=Object(y.b)(function(e){return{topAnime:e.getTop.topAnime,topManga:e.getTop.topManga}},j)(S),x=function(e){var a=e.currentAnime;return r.a.createElement("div",{id:"anime-left-display",className:"col-lg-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"anime-view-card",src:a.image_url,alt:a.title_english}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title text-center font-weight-bold"},a.title_english||a.title),r.a.createElement("p",{className:"text-center text-success"},a.rating),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{class:"font-weight-bold"},"Type:")," ",a.type),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"font-weight-bold"},"Airing:")," ",a.status),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"font-weight-bold"},"Episodes:")," ",a.episodes||"NA"),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"font-weight-bold"},"Rating:")," ",a.score))))},_=function(e){var a=e.currentAnime;return r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("div",{id:"trailer"},a.trailer_url?r.a.createElement("iFrame",{src:a.trailer_url+"?autoplay=0&rel=0",height:"400",width:"100%"}):r.a.createElement("div",null,"No Trailer to show")),r.a.createElement("section",{id:"genres"},a.genres&&a.genres.map(function(e){return r.a.createElement("span",{className:"badge badge-info mr-3 mb-3 py-3 px-4"},e.name)})))},M=function(e){var a=e.currentAnime;return r.a.createElement("section",{id:"anime-synopsis"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"text-center"},"Synopsis"),r.a.createElement("div",{className:"bottom-border"}),r.a.createElement("p",null,a.synopsis)))))},k=t(15),T=(t(50),0),C=function(e){var a=e.reviews,t=e.openModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.c,{className:"review-carousel-width d-block d-lg-none",naturalSlideWidth:500,naturalSlideHeight:1500,totalSlides:a&&a.length,visibleSlides:3,step:3},r.a.createElement("div",{className:"outer-slide"},r.a.createElement(k.e,null,a&&a.map(function(e){return r.a.createElement(k.d,{key:e.mal_id,index:T++},r.a.createElement("div",{className:"card review-card"},r.a.createElement("div",{className:"card-head text-center"},r.a.createElement("img",{className:"review-img",src:e.reviewer.image_url,alt:"reviewer"}),r.a.createElement("div",{className:"reviewer-name"},e.reviewer.username)),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("p",null,"Overall: ",e.reviewer.scores.overall),r.a.createElement("p",null,"Story: ",e.reviewer.scores.story),r.a.createElement("p",null,"Animation: ",e.reviewer.scores.animation),r.a.createElement("p",null,"Sound: ",e.reviewer.scores.sound),r.a.createElement("p",null,"Character: ",e.reviewer.scores.character),r.a.createElement("p",null,"Enjoyment: ",e.reviewer.scores.enjoyment)),r.a.createElement("div",{onClick:function(){return t(e.content,e.reviewer.image_url,e.reviewer.username,e.reviewer.scores.overall)},style:{cursor:"pointer"},"data-target":"#reviewModal","data-toggle":"modal",className:"card-footer"},r.a.createElement("span",null,"Read Review"))))})),r.a.createElement(k.a,{className:"back-btn"},r.a.createElement("i",{className:"fas fa-chevron-circle-left icon"})),r.a.createElement(k.b,{className:"next-btn"},r.a.createElement("i",{className:"fas fa-chevron-circle-right icon"})))),r.a.createElement(k.c,{className:"review-carousel-width d-none d-lg-block",naturalSlideWidth:500,naturalSlideHeight:1300,totalSlides:a&&a.length,visibleSlides:5,step:5},r.a.createElement("div",{className:"outer-slide"},r.a.createElement(k.e,null,a&&a.map(function(e){return r.a.createElement(k.d,{key:e.mal_id,index:T++},r.a.createElement("div",{className:"card review-card"},r.a.createElement("div",{className:"card-head text-center"},r.a.createElement("img",{className:"review-img",src:e.reviewer.image_url,alt:"reviewer"}),r.a.createElement("div",{className:"reviewer-name"},e.reviewer.username)),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("p",null,"Overall: ",e.reviewer.scores.overall),r.a.createElement("p",null,"Story: ",e.reviewer.scores.story),r.a.createElement("p",null,"Animation: ",e.reviewer.scores.animation),r.a.createElement("p",null,"Sound: ",e.reviewer.scores.sound),r.a.createElement("p",null,"Character: ",e.reviewer.scores.character),r.a.createElement("p",null,"Enjoyment: ",e.reviewer.scores.enjoyment)),r.a.createElement("div",{onClick:function(){return t(e.content,e.reviewer.image_url,e.reviewer.username,e.reviewer.scores.overall)},style:{cursor:"pointer"},"data-target":"#reviewModal","data-toggle":"modal",className:"card-footer"},r.a.createElement("span",null,"Read Review"))))})),r.a.createElement(k.a,{className:"back-btn"},r.a.createElement("i",{className:"fas fa-chevron-circle-left icon"})),r.a.createElement(k.b,{className:"next-btn"},r.a.createElement("i",{className:"fas fa-chevron-circle-right icon"})))))},R=function(e){var a=e.reviews,t=e.openModal;return r.a.createElement("section",{id:"reviews"},r.a.createElement("div",{className:"container mb-5"},r.a.createElement("h1",null,"Reviews"),r.a.createElement("div",{className:"row"},a?r.a.createElement(C,{reviews:a,openModal:t}):r.a.createElement("div",null,r.a.createElement("p",null,"No reviews")))))},I=function(e){return function(a){a({type:"LOADING",payload:e})}},L=function(e){var a=e.username,t=e.modalContent,n=e.userImg,c=e.userScore,l=e.resetModal;return r.a.createElement("div",{class:"modal fade",id:"reviewModal",tabindex:"-1",role:"dialog","aria-labelledby":"reviewModal","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog modal-lg",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("img",{style:{height:"70px",width:"70px",borderRadius:"50%"},src:n,alt:"user image"}),r.a.createElement("div",{className:"modal-username"},a),r.a.createElement("div",{className:"modal-userscore"},"Rating: ",c),r.a.createElement("button",{onClick:function(){return l()},type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},t?r.a.createElement("div",{className:"display-linebreak",dangerouslySetInnerHTML:{__html:t}}):r.a.createElement("div",{className:"text-danger"},"Oops, something went wrong, please try again.")))))},V={effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0,type:"none"},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},D=function(e){var a=e.animeRelated;return r.a.createElement("section",{id:"related-anime"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"mb-5"},"Adaptations"),r.a.createElement(E.a,Object.assign({},V,{shouldSwiperUpdate:!0}),a.map(function(e){return r.a.createElement("div",{style:{width:"40%"},className:"card"},r.a.createElement(g.b,{className:"nav-link",to:"/anime/".concat(e.mal_id,"_").concat(e.type)},r.a.createElement("img",{src:e.image_url,alt:"",className:"anime-card-img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center font-weight-bold"},e.title),r.a.createElement("div",{style:{fontWeight:"bold"}},e.type)))}))))))},G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={modalContent:null,userImg:null,username:null,userScore:null},t.openModal=function(e,a,n,r){var c=e.replace(/\\n/gi,"<br>");t.setState({modalContent:c,userImg:a,username:n,userScore:r})},t.resetModal=function(){t.setState({modalContent:null,userImg:null,username:null,userScore:null})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.getAnimeDetails,t=e.getAnimeReview,n=this.props.match.params.id.split("_")[0],r=this.props.match.params.id.split("_")[1];a(n,r="Manga"===r||"Novel"===r||"One-shot"===r?"manga":"anime"),t(n,r)}},{key:"componentDidUpdate",value:function(e){var a=this.props,t=a.currentAnime,n=a.relatedAnime,r=a.loading,c=[];t&&t.related&&0===this.props.animeRelated.length&&(Object.values(t.related).forEach(function(e){return e.forEach(function(e){return c.push({id:e.mal_id,type:e.type})})}),n(c),r(!0)),this.props.match.params.id!==e.match.params.id&&window.location.reload()}},{key:"componentWillUnmount",value:function(){(0,this.props.resetAnimeProps)()}},{key:"render",value:function(){var e=this.props,a=e.currentAnime,t=e.reviews,n=e.animeRelated,c=e.isLoading,l=this.state,i=l.modalContent,s=l.userImg,o=l.username,m=l.userScore;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"anime-view-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(x,{currentAnime:a}),r.a.createElement(_,{currentAnime:a})))),r.a.createElement(M,{currentAnime:a}),r.a.createElement(R,{reviews:t,openModal:this.openModal}),r.a.createElement(L,{modalContent:i,userImg:s,username:o,userScore:m,resetModal:this.resetModal}),c?r.a.createElement(A,null):r.a.createElement(D,{animeRelated:n}))}}]),a}(n.Component),P={getAnimeDetails:function(e,a){return function(){var t=Object(h.a)(p.a.mark(function t(n){var r,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.jikan.moe/v3/".concat(a,"/").concat(e),t.next=3,fetch(r).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.log(e)});case 3:c=t.sent,n({type:"GET_ANIME_DETAILS",payload:c});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getAnimeReview:function(e,a){return function(){var t=Object(h.a)(p.a.mark(function t(n){var r,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.jikan.moe/v3/".concat(a,"/").concat(e,"/reviews"),t.next=3,fetch(r).then(function(e){return e.json()}).then(function(e){return e.reviews}).catch(function(e){return console.log(e)});case 3:c=t.sent,n({type:"GET_ANIME_REVIEWS",payload:c});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},relatedAnime:function(e){return function(){var a=Object(h.a)(p.a.mark(function a(t){var n,r,c;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:n=[],r=0;case 2:if(!(r<e.length)){a.next=10;break}return a.next=5,fetch("https://api.jikan.moe/v3/".concat(e[r].type,"/").concat(e[r].id)).then(function(e){return e.json()}).then(function(e){return e});case 5:c=a.sent,n.push(c);case 7:r++,a.next=2;break;case 10:t({type:"RELATED_ANIME",payload:n}),t({type:"LOADING",payload:!1});case 12:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},resetAnimeProps:function(){return function(e){e({type:"RESET_ANIME_PROPS",payload:[]})}},loading:I},W=Object(y.b)(function(e){return{currentAnime:e.getTop.currentAnime,reviews:e.getTop.reviews,animeRelated:e.getTop.relatedAnime,isLoading:e.isLoading.loading}},P)(G),F=t(17),H=t(35),U=t(36),q=t(14),B={topAnime:[],topManga:[],currentAnime:[],reviews:[],animeSearch:[],mangaSearch:[],relatedAnime:[]},J={loading:!1},$=Object(F.combineReducers)({getTop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_TOP_ANIME":return Object(q.a)({},e,{topAnime:a.payload});case"GET_TOP_MANGA":return Object(q.a)({},e,{topManga:a.payload});case"GET_ANIME_DETAILS":return Object(q.a)({},e,{currentAnime:a.payload});case"GET_ANIME_REVIEWS":return Object(q.a)({},e,{reviews:a.payload});case"SEARCH_ANIME":return Object(q.a)({},e,{animeSearch:a.payload});case"SEARCH_MANGA":return Object(q.a)({},e,{mangaSearch:a.payload});case"RESET_ANIME_PROPS":return Object(q.a)({},e,{currentAnime:a.payload,reviews:a.payload,relatedAnime:a.payload});case"RELATED_ANIME":return Object(q.a)({},e,{relatedAnime:a.payload});default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOADING":return Object(q.a)({},e,{loading:a.payload});default:return e}}}),z=[U.a],K=Object(F.createStore)($,[],Object(F.compose)(Object(H.composeWithDevTools)(F.applyMiddleware.apply(void 0,z)))),Q=t(20),X=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),Y=Object(Q.f)(X),Z=function(){return r.a.createElement("nav",{id:"mobile-nav",className:"navbar navbar-expand-lg navbar-dark bg-dark py-4 sticky-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#",className:"navbar-brand"},r.a.createElement("h3",null,"Anime Search")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNav",className:"nav-item"},r.a.createElement(g.b,{to:"/",id:"top-anime-menu"},"Top Anime")),r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNav",className:"nav-item"},r.a.createElement(g.b,{to:"/search-anime",id:"search-anime-menu"},"Anime Search")),r.a.createElement("li",{"data-toggle":"collapse","data-target":"#navbarNav",className:"nav-item"},r.a.createElement(g.b,{to:"/search-manga",id:"search-manga-menu"},"Manga Search"))))))},ee=function(){return r.a.createElement("nav",{id:"side-navigation"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("h3",null,"Anime Search")),r.a.createElement("ul",{className:"list-unstyled components"},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/",id:"top-anime-menu"},"Top Anime")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/search-anime",id:"search-anime-menu"},"Anime Search")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/search-manga",id:"search-manga-menu"},"Manga Search"))))},ae=function(e){var a=e.searchValue,t=e.handleSearchChange,n=e.searchAnime;return r.a.createElement("section",{id:"anime-search"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{autoFocus:!0,value:a,onChange:t,type:"text",className:"form-control",placeholder:"Search Anime"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit",onClick:n},"Search"))))))},te={effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0,type:"none"},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},ne=function(e){var a=e.searchedAnime;e.isLoading;return r.a.createElement("section",{id:0!==a.length?"search-display":""},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E.a,Object.assign({},te,{shouldSwiperUpdate:!0}),a.map(function(e){return r.a.createElement("div",{style:{width:"40%"},className:"card"},r.a.createElement(g.b,{className:"nav-link",to:"/anime/".concat(e.mal_id,"_").concat(e.type)},r.a.createElement("img",{src:e.image_url,alt:"",className:"anime-card-img"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title text-center font-weight-bold"},e.title),r.a.createElement("div",{style:{fontWeight:"bold"}},e.type)))})))))},re=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={searchValue:""},t.handleSearchChange=function(e){t.setState({searchValue:e.target.value})},t.searchAnime=function(e){e.preventDefault();var a=t.props,n=a.animeSearch,r=a.loading,c=t.state.searchValue;r(!0),n(c),t.setState({searchValue:""})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.searchedAnime,t=e.isLoading,n=this.state.searchValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"banner"},r.a.createElement("div",{id:"overlay"})),t?r.a.createElement(A,null):r.a.createElement(ne,{searchedAnime:a,isLoading:t}),r.a.createElement(ae,{searchValue:n,handleSearchChange:this.handleSearchChange,searchAnime:this.searchAnime}))}}]),a}(n.Component),ce={animeSearch:function(e){return function(){var a=Object(h.a)(p.a.mark(function a(t){var n,r,c;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.replace(/\s/gi,"%20"),r="https://api.jikan.moe/v3/search/anime/?q=".concat(n,"&limit=30"),a.next=4,fetch(r).then(function(e){return e.json()}).then(function(e){return e.results}).catch(function(e){return console.log(e)});case 4:c=a.sent,t({type:"SEARCH_ANIME",payload:c}),t({type:"LOADING",payload:!1});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},loading:I},le=Object(y.b)(function(e){return{searchedAnime:e.getTop.animeSearch,isLoading:e.isLoading.loading}},ce)(re),ie=function(e){var a=e.searchValue,t=e.handleSearchChange,n=e.searchManga;return r.a.createElement("section",{id:"anime-search"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{autoFocus:!0,value:a,onChange:t,type:"text",className:"form-control",placeholder:"Search Manga"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit",onClick:n},"Search"))))))},se=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={searchValue:""},t.handleSearchChange=function(e){t.setState({searchValue:e.target.value})},t.searchManga=function(e){e.preventDefault();var a=t.props,n=a.mangaSearch,r=a.loading,c=t.state.searchValue;r(!0),n(c),t.setState({searchValue:""})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.searchedManga,t=e.isLoading,n=this.state.searchValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"banner"},r.a.createElement("div",{id:"overlay"})),t?r.a.createElement(A,null):r.a.createElement(ne,{searchedAnime:a,isLoading:t}),r.a.createElement(ie,{searchValue:n,handleSearchChange:this.handleSearchChange,searchManga:this.searchManga}))}}]),a}(n.Component),oe={mangaSearch:function(e){return function(){var a=Object(h.a)(p.a.mark(function a(t){var n,r,c;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.replace(/\s/gi,"%20"),r="https://api.jikan.moe/v3/search/manga/?q=".concat(n,"&limit=30"),a.next=4,fetch(r).then(function(e){return e.json()}).then(function(e){return e.results}).catch(function(e){return console.log(e)});case 4:c=a.sent,t({type:"SEARCH_MANGA",payload:c}),t({type:"LOADING",payload:!1});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()},loading:I},me=Object(y.b)(function(e){return{searchedManga:e.getTop.mangaSearch,isLoading:e.isLoading.loading}},oe)(se),de=function(){return r.a.createElement("div",null,r.a.createElement("section",{id:"footer"},r.a.createElement("span",null,"\xa9 2019")))};var ue=function(){return r.a.createElement(y.a,{store:K},r.a.createElement(g.a,{basename:"/animesearch"},r.a.createElement(Y,null,r.a.createElement("div",{className:"App page-content"},r.a.createElement("div",{className:"d-none d-md-block"},r.a.createElement(ee,null)),r.a.createElement("div",{className:"d-md-none d-block"},r.a.createElement(Z,null)),r.a.createElement("div",{className:"wrapper"},r.a.createElement(Q.a,{exact:!0,path:"/",component:O}),r.a.createElement(Q.c,null,r.a.createElement(Q.a,{exact:!0,path:"/anime/:id",component:W}),r.a.createElement(Q.a,{exact:!0,path:"/search-anime",component:le}),r.a.createElement(Q.a,{exact:!0,path:"/search-manga",component:me})))),r.a.createElement(de,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.62fb10b6.chunk.js.map