(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/me.65e8c83f.jpeg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/name-basic.9cde45a6.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABJCAYAAAAkEuiCAAAACXBIWXMAACxKAAAsSgF3enRNAAAElElEQVR4Ae2dgXHaMBSGlS5ANiAblE4AGzSdIGSAWnSCJBM08gKhE5RMELJBmKBhgzBBeuJ+3YmHZFm2jI39vjuuKZyJe989vSfpyb34/PwUTLe4+JllEyHEI+7qSggxjrjDV+vnDyHEG35+N69cqXd2HoeWMhNCvDT8e7aQtLZkrRv+nWeLlqKj419L/4ANoksLesuVMpE2aPY5JZOyK4llB0Er/edQhz4jZWbeKDusZFJeCiEm1ltXeGnM901r3t8GkpZDiqKTVF+QbqTNIHMU+TVbRFDvBbVWEmdSXkHOBKJiomqDinGVK/XR4G22QqfmKYioa0j6WuKSHaLnvk/5p7OTR0SSEfS9xCXPOnr6UGqfxYweRcUcr1AEvSJyzlbO2S2zZFJOLEFFxYKOnMU5Dmtnu/aF6NHD231gaUghcs6mIOjFgmQm5TwgRxcE81yp1YlvrRK9WiUuIecZcjodNb1cus+kXECOK+d0Pmq+dOAekpMr9YjVgz+O79ai/mZSPjZ8G5Xp/SYXJqRLz5CmVwZmXRvOehkpNpivTFCFUfSc5x1ldmcY1HZwJuU1oobmmh3mNMuWbu2Awe3RY/lm5VkZuO2CmN4PXxTM8GeeIuAJZXWrDLqbBRWYdHzUasQMvsUIkfHk+Kg1MYOXIorF/GhjkslSgEfMDvOYk24/sxQLjxjdGzA55QRzcNVXEcghdJI5Rgl9MlgKIVdqgdVkm2km5f2p7oGluJljXczmzu6PaxLOKR6wHrYmSzInyS8cKR5QcS3Ip2Ps0zQKR0qATMqVo8XpW5NlMkdKmDnmKzaNbpCxlADIH3QYmza5cMnDV0kyKdek37mxpM+RUh5X0qfvJYEjJYJMSj3jv7Gu0LnmKnW0cKTEQcvhEQqBpLCUCLBrSXcskw9hLCUeGi3j1JUYS4nEEy0spQPQbeIpumSSwFIqgAa/LbkyWW5hKdWhSy3Xqb6YpVSHDmHjVO2vLKUimDDSHcokCZ+l1IPu3ScZwlhKPaiUcYoqjKXUAEMY3cuvHS0spT40Wmo3V7CU+tCHKERJ0UfPaZcMS6mJ48kWo8jSWJfWLzg8u4eleIjs8Xolfy8lBQ1+pinjt96v0ZHDUhxgM+sloisyegjDUb878rbeQJuxFAIOEpndxTsICkHbjQrLYgxvru990EcvWIoFhix6suumhBj6UB7vA+XwTBnXYdjnXKl9ZLIUCyRt11nIGzPee647aswrmEQuHYdgN/YSDUsh5ErNfWJ07vCJcST7IykksRt29HkxLMUBxPgehuATQztaDpK9J7ELCDmINJbiAedUbh2fGjE0Ery9xaHETt9kKQXgZJdPzBuZJNJkv4+UMomdwlICWGJok/cIEWPE+B6LGEzsFO6QLInnEJEwJ4iFEJfkP3LYQgjNI8ETxywlggIxAtHkOotPCZ7NZymRBMSEePDlERuWUgEk73XJp4wbdGIvtQHGib4CmOjNHLuOPgoTO4WlVCRCzNGMPQRLqYElxrUsYziasYfgnJIIx4EiUTaxU1hKQoiY0omdwsNXQrCQ+Ss2sR8ghPgPAJMCuXW5t8EAAAAASUVORK5CYII="},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),r=(a(15),a(1)),c=a(2),l=a(4),m=a(3),p=a(5),u=(a(6),a(16),a(17),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={bgState:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"resetBgState",value:function(){this.setState({bgState:0})}},{key:"closeBg",value:function(){var e=this;this.setState({bgState:1}),setTimeout(function(){e.setState({bgState:2})},1e3)}},{key:"render",value:function(){var e="About-bg ";return 0==this.props.aboutIndex?e+="destroy":1==this.state.bgState?e+="close":2==this.state.bgState&&(this.props.closeAbout(),this.resetBgState()),s.a.createElement("div",{className:e},s.a.createElement("div",{className:"About-basicLine1"}),s.a.createElement("div",{className:"About-basicLine2"}),s.a.createElement("div",{className:"About-basicLine3"}),s.a.createElement("div",{className:"About-basicLine4"}),1==this.props.aboutIndex?s.a.createElement("h1",{className:"About-title"},"Who am I?"):s.a.createElement("div",null),2==this.props.aboutIndex?s.a.createElement("h1",{className:"About-title"},"Let's get in touch!"):s.a.createElement("div",null),1==this.props.aboutIndex?s.a.createElement("p",{className:"About-p"},"I am a second year student at UCLA passionate about front-end development, design, and entrepreneurship. Since my start my Freshman year in high school, I've realized I wanted to make an impact on others' lives; having this trio of skills will assist me in doing just that.",s.a.createElement("br",null),s.a.createElement("br",null),"As I improved my code ability, I spent more time developing other essential skills, from speaking to business and marketing to art and design. Using every one of these skills, I've put together various different projects, each of which represent my ability in each relevant area. Please do not hesitate to click around and view the many projects I have laying around this website.",s.a.createElement("br",null),s.a.createElement("br",null),"Thank you, and I hope we can connect in the future.",s.a.createElement("br",null),"-Andrew Zhou"):s.a.createElement("div",null),2==this.props.aboutIndex?s.a.createElement("p",{className:"About-p contact"},s.a.createElement("b",null,"Email me"),": ",s.a.createElement("a",{target:"_blank",className:"About-link",href:"mailto:andrewzhou@g.ucla.edu"},s.a.createElement("u",null,"andrewzhou@g.ucla.edu")),s.a.createElement("br",null),s.a.createElement("b",null,"LinkedIn"),": ",s.a.createElement("a",{target:"_blank",className:"About-link",href:"https://linkedin.com/in/andrew-zh"},s.a.createElement("u",null,"https://linkedin.com/in/andrew-zh"))):s.a.createElement("div",null),1==this.props.aboutIndex?s.a.createElement("img",{src:a(18),className:"About-img"}):s.a.createElement("div",null),s.a.createElement("p",{className:"About-x",onClick:this.closeBg.bind(this)},"X"))}}]),t}(s.a.Component)),d=(a(19),function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t="Hover-bg";return 1==this.props.index?t+="1 a":2==this.props.index?t+="2 a":3==this.props.index?t+="3 a":1==this.props.secondIndex?t+="1":2==this.props.secondIndex?t+="2":3==this.props.secondIndex&&(t+="3"),1==this.props.index?e="Code":2==this.props.index?e="Design":3==this.props.index&&(e="Product"),s.a.createElement("div",{className:t},s.a.createElement("h1",{className:"Hover-backText"},e))}}]),t}(s.a.Component)),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={hoverIndex:0,secondIndex:0,aboutIndex:0},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"setHoverIndex",value:function(e){this.setState({secondIndex:this.state.hoverIndex,hoverIndex:e})}},{key:"closeAbout",value:function(){this.setState({aboutIndex:0})}},{key:"openAbout",value:function(){this.setState({aboutIndex:1})}},{key:"openContact",value:function(){this.setState({aboutIndex:2})}},{key:"render",value:function(){var e="App-hoverLink first",t="App-hoverLink mid",n="App-hoverLink last",i="App-hoverLinkOverlay first",o="App-hoverLinkOverlay mid",r="App-hoverLinkOverlay last",c="App-link first",l="App-link mid",m="App-link last";return 1==this.state.hoverIndex?(e+=" hover1",t+=" passive1",n+=" passive1",i+=" hover1",o+=" passive1",r+=" passive1",c+=" top1",l+=" top1",m+=" top1"):2==this.state.hoverIndex?(e+=" passive2",t+=" hover2",n+=" passive2",i+=" passive2",o+=" hover2",r+=" passive2",c+=" top2",l+=" top2",m+=" top2"):3==this.state.hoverIndex&&(e+=" passive3",t+=" passive3",n+=" hover3",i+=" passive3",o+=" passive3",r+=" hover3",c+=" top3",l+=" top3",m+=" top3"),s.a.createElement("div",{className:"App"},s.a.createElement(u,{aboutIndex:this.state.aboutIndex,closeAbout:this.closeAbout.bind(this)}),0==this.state.secondIndex?s.a.createElement("div",null):s.a.createElement(d,{secondIndex:this.state.secondIndex}),0==this.state.hoverIndex?s.a.createElement("div",null):s.a.createElement(d,{index:this.state.hoverIndex}),s.a.createElement("div",{className:"App-basicLine1"}),s.a.createElement("div",{className:"App-basicLine2"}),s.a.createElement("div",{className:"App-basicLine3"}),s.a.createElement("div",{className:"App-basicLine4"}),s.a.createElement("div",{className:"App-basicLine5"}),s.a.createElement("div",{className:"App-basicLine6"}),s.a.createElement("div",{className:"App-basicLine7"}),s.a.createElement("div",{className:"App-basicLine8"}),s.a.createElement("div",{className:"App-basicLine9"}),s.a.createElement("div",{className:"App-topLinks"},s.a.createElement("u",null,s.a.createElement("a",{className:c,onClick:this.openAbout.bind(this)},"About"),s.a.createElement("a",{className:l,href:"resume.pdf"},"Resume"),s.a.createElement("a",{className:m,onClick:this.openContact.bind(this)},"Contact"))),s.a.createElement("div",{className:"App-basicBackground"},s.a.createElement("img",{src:a(20),alt:"ERROR: Please reload.",className:"App-basicLogo"})),s.a.createElement("p",{className:0==this.state.hoverIndex?"App-hoverHere":"App-hoverHere none"},"Hover over me!",s.a.createElement("img",{src:a(21),className:"App-hoverHereImg"})),s.a.createElement("div",{className:"App-bottomLinks"},s.a.createElement("a",{className:e,onMouseEnter:this.setHoverIndex.bind(this,1)},"Programming"),s.a.createElement("a",{className:t,onMouseEnter:this.setHoverIndex.bind(this,2)},"Design"),s.a.createElement("a",{className:n,onMouseEnter:this.setHoverIndex.bind(this,3)},"Entrepreneurship")),s.a.createElement("div",{className:"App-bottomLinksOverlay"},s.a.createElement("a",{className:i},"Programming"),s.a.createElement("a",{className:o},"Design"),s.a.createElement("a",{className:r},"Entrepreneurship")))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.b54e1f13.chunk.js.map