(this["webpackJsonpreact-app-nomad"]=this["webpackJsonpreact-app-nomad"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),i=a(2),o=a.n(i),m=a(13),l=a(14),u=a(15),v=a(18),p=a(16),d=a(19),y=a(17),g=a.n(y);a(43);var _=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{className:"genres__genre",key:t},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},f=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"movies"},e.map((function(e){return console.log(e),r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));c.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e35e5438.chunk.js.map