(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3vVe":function(e,t,a){e.exports=a.p+"static/tyrone-3c169cdf9863bf2b2c77b144e60c1e28.jpg"},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=m(t||a||[]);return i&&i.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=c(e),a=p(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(z,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),z=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,w=e.loading,I=e.draggable,L=g||h;if(!L)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,d.default)({opacity:C?1:0,transition:H?"opacity "+y+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,N={transitionDelay:y+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&N,o,f),q={title:t,alt:this.state.isVisible?"":a,style:k,className:p,itemProp:v},P=this.state.isHydrated?m(L):L[0];if(g)return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&N)}),P.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:L,generateSources:R}),P.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:L,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(L),l.default.createElement(z,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:L}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},T&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&N)}),P.base64&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:q,imageVariants:L,generateSources:R}),P.tracedSVG&&l.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:q,imageVariants:L,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,E(L),l.default.createElement(z,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},P,{imageVariants:L}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),W=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}C.propTypes={resolutions:H,sizes:W,fixed:T(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:T(u.default.oneOfType([W,u.default.arrayOf(W)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=C;t.default=N},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("hlFM"),s=a("Ji2X"),o=a("tRbT"),d=a("9eSz"),l=a.n(d),u=function(e){var t=e.img,a=e.orgName,i=e.position;return r.a.createElement(n.a,{component:"div",className:"affiliation-card",display:"flex",alignItems:"center",flexDirection:"column"},r.a.createElement(l.a,{fluid:t,alt:a,style:{width:"120px"}}),r.a.createElement("h2",null,a),r.a.createElement("h4",{style:{fontWeight:"normal"}},i))},c=a("Wbzz"),f=function(){var e=Object(c.useStaticQuery)("1107024706"),t=[{img:e.chi.childImageSharp.fluid,name:"ACM SigChi Manila Chapter",position:"Member"},{img:e.lscs.childImageSharp.fluid,name:"La Salle Computer Society",position:"Research and Development"},{img:e.uxph.childImageSharp.fluid,name:"User Experience Philippines",position:"Web and Research"}];return r.a.createElement(n.a,{component:"div",py:4,style:{backgroundColor:"#F5F5F5"}},r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement("h1",{style:{paddingBottom:"24px",paddingTop:"24px"}},"Affiliations"),r.a.createElement(o.a,{container:!0,spacing:2},t.map((function(e,t){var a=e.img,i=e.name,n=e.position;return r.a.createElement(o.a,{item:!0,xs:4},r.a.createElement(u,{img:a,orgName:i,position:n}))})))))},p=a("tlie"),m=a("3vVe"),g=a.n(m),h=a("5Wrh"),b=function(){return r.a.createElement(n.a,{component:"div",py:8},r.a.createElement(s.a,{maxWidth:"md",className:"hero"},r.a.createElement(n.a,{component:"div",style:{backgroundImage:"url("+g.a+")"},className:"intro-image",alignSelf:"center"}),r.a.createElement("h1",null,"Introduction"),r.a.createElement("p",null,p.intro),r.a.createElement(h.a,null,"Download Resume")))},y=a("7oih"),S=a("EYWl");t.default=function(){return r.a.createElement(y.a,null,r.a.createElement(S.a,{title:"Home"}),r.a.createElement(b,null),r.a.createElement(f,null))}},tlie:function(e){e.exports=JSON.parse('{"intro":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}')}}]);
//# sourceMappingURL=component---src-pages-index-js-aeaa9c36b7506ec20599.js.map