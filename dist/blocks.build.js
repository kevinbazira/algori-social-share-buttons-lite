!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var a=n(2),l=n.n(a),o=n(3),r=(n.n(o),n(4)),i=(n.n(r),wp.data.withSelect,wp.components),c=(i.IconButton,i.Panel,i.PanelBody),s=(i.TextControl,i.SelectControl),u=(i.CheckboxControl,i.RadioControl),p=i.Placeholder,m=(i.Toolbar,i.withNotices,wp.element.Fragment),d=wp.i18n.__,h=wp.blocks.registerBlockType,f=wp.editor,b=f.BlockControls,w=f.InspectorControls,g=(f.BlockAlignmentToolbar,f.MediaPlaceholder,f.MediaUpload,f.AlignmentToolbar),y=(f.RichText,{title:{type:"array",source:"children",selector:"p"},url:{type:"string"},align:{type:"string"},width:{type:"number"},height:{type:"number"},contentAlign:{type:"string",default:"center"},id:{type:"number"},currentPagePermalink:{type:"string"},selectedSocialMediaChannels:{type:"array",default:[]},selectedButtonType:{type:"string",default:"bttn-simple"},selectedButtonSize:{type:"string",default:"bttn-md"},selectedButtonTextOrIcon:{type:"string",default:"icon-and-text"},showButtonIcon:{type:"bolean",default:!0},showButtonText:{type:"bolean",default:!0},facebook:{type:"bolean",default:!1},twitter:{type:"bolean",default:!1},googleplus:{type:"bolean",default:!1},linkedin:{type:"bolean",default:!1},pinterest:{type:"bolean",default:!1},reddit:{type:"bolean",default:!1},email:{type:"bolean",default:!1},gmail:{type:"bolean",default:!1},yahoo:{type:"bolean",default:!1},print:{type:"bolean",default:!1},blogger:{type:"bolean",default:!1},flipboard:{type:"bolean",default:!1},whatsapp:{type:"bolean",default:!1},telegram:{type:"bolean",default:!1},wechat:{type:"bolean",default:!1},socialMediaChannels:{type:"array",default:[{name:"Facebook",link:"https://www.facebook.com/sharer.php?u=urlToShare",icon:"fab fa-facebook-f"},{name:"Twitter",link:"https://twitter.com/intent/tweet?url=urlToShare",icon:"fab fa-twitter"},{name:"GooglePlus",link:"https://plus.google.com/share?url=urlToShare",icon:"fab fa-google-plus-g"},{name:"Linkedin",link:"https://www.linkedin.com/shareArticle?url=urlToShare",icon:"fab fa-linkedin-in"},{name:"Pinterest",link:"http://pinterest.com/pin/create/button/?url=urlToShare",icon:"fab fa-pinterest-p"},{name:"Reddit",link:"https://reddit.com/submit?url=urlToShare",icon:"fab fa-reddit-alien"},{name:"Email",link:"mailto:body=urlToShare",icon:"fas fa-envelope"},{name:"Gmail",link:"https://mail.google.com/mail/?view=cm&body=urlToShare",icon:"fas fa-envelope-square"},{name:"Yahoo",link:"http://compose.mail.yahoo.com/?body=urlToShare",icon:"fab fa-yahoo"},{name:"Print",link:"window.print()",icon:"fas fa-print"},{name:"Blogger",link:"https://www.blogger.com/blog-this.g?u=urlToShare",icon:"fab fa-blogger-b"},{name:"Flipboard",link:"https://share.flipboard.com/bookmarklet/popout?v=2&url=urlToShare",icon:"fab fa-flipboard"},{name:"WhatsApp",link:"https://web.whatsapp.com/send?text=urlToShare",icon:"fab fa-whatsapp"},{name:"Telegram",link:"https://t.me/share/url?url=urlToShare",icon:"fab fa-telegram"},{name:"WeChat",link:"https://chart.apis.google.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=urlToShare",icon:"fab fa-weixin"}]}});h("cgb/block-algori-social-share-buttons",{title:d("Social Share Buttons"),description:d("Grow your audience. Add a viral element to your site with Social Media Share Buttons."),icon:"share",category:"common",keywords:[d("Algori Social Media Share Buttons"),d("facebook twitter googleplus linkedin pinterest reddit email gmail yahoo print blogger flipboard whatsapp telegram wechatr threema line sms skype messenger"),d("pocket tumblr digg buffer hackernews qzone vk weibo odnoklassniki douban xing renren meneame mailru delicious tumbleupon urfingbird livejournal")],attributes:y,edit:function(e){var t=e.attributes,n=e.setAttributes,a=(e.isSelected,e.className,e.noticeOperations,e.noticeUI,t.url,t.title,t.align,t.width,t.height,t.contentAlign),o=(t.id,t.currentPagePermalink),r=t.selectedSocialMediaChannels,i=t.selectedButtonType,h=t.selectedButtonSize,f=(t.selectedButtonTextOrIcon,t.showButtonIcon),y=t.showButtonText,k=t.socialMediaChannels;!function(){n({currentPagePermalink:wp.data.select("core/editor").getPermalink()})}();var S=function(e){return n({contentAlign:e})},v=function(e){return n({selectedButtonType:e})},C=function(e){var t=e[0],a=r.concat(t),l={};l[t]=!0,l.selectedSocialMediaChannels=a;var o={};o[t]=!1,o.selectedSocialMediaChannels=r,r.includes(t)?(r.splice(r.indexOf(t),1),n(o)):n(l)},T=l()(i,h,"bttn-primary","algori-social-share-buttons-settings"),B=function(e){var n=e.socialMediaChannels;return wp.element.createElement(m,null,n.map(function(e){return wp.element.createElement(m,null,t[e.name.toLowerCase()]&&wp.element.createElement("button",{className:T+" algori-social-share-buttons-"+e.name.toLowerCase(),key:e.name.toLowerCase(),onClick:function(){"Print"===e.name?e.link:window.open(e.link.replace("urlToShare",o),"_blank")}},f&&wp.element.createElement("i",{className:e.icon}),y&&d("\xa0 \xa0"+e.name)))}))},x=wp.element.createElement(m,null,wp.element.createElement(b,null,wp.element.createElement(g,{value:a,onChange:S})),wp.element.createElement(w,null,wp.element.createElement(c,{title:d("Social Share Channels")},wp.element.createElement(s,{multiple:!0,label:d("Select Social Media Channels"),value:r,onChange:C,options:k.map(function(e){return{label:d(k.indexOf(e)+1+". "+e.name),value:e.name.toLowerCase()}})})),wp.element.createElement(c,{title:d("Social Share Button Types"),initialOpen:!1},wp.element.createElement(u,{label:d("Choose a Button Type below"),selected:i,onChange:v,options:[{label:d("Simple"),value:"bttn-simple"},{label:d("Stretch"),value:"bttn-stretch"},{label:d("Minimal"),value:"bttn-minimal"},{label:d("Material Flat"),value:"bttn-material-flat"},{label:d("Pill"),value:"bttn-pill"}]}))));return r.length?wp.element.createElement(m,null,x,wp.element.createElement("div",{style:{"text-align":a}},wp.element.createElement(B,{socialMediaChannels:k}))):wp.element.createElement(m,null,x,wp.element.createElement(p,{icon:"share",label:"Use the Block Inspector section to Select the Share Buttons you want to add here."}))},save:function(e){var t=e.attributes,n=(e.className,t.url,t.title,t.align,t.width,t.height,t.contentAlign),a=(t.id,t.currentPagePermalink),o=(t.selectedSocialMediaChannels,t.selectedButtonType),r=t.selectedButtonSize,i=(t.selectedButtonTextOrIcon,t.showButtonIcon),c=t.showButtonText,s=t.socialMediaChannels,u=l()(o,r,"bttn-primary","algori-social-share-buttons-settings"),p=function(e){var n=e.socialMediaChannels;return wp.element.createElement(m,null,n.map(function(e){return wp.element.createElement(m,null,t[e.name.toLowerCase()]&&wp.element.createElement("button",{className:u+" algori-social-share-buttons-"+e.name.toLowerCase(),key:e.name.toLowerCase(),onClick:"Print"===e.name?e.link:"window.open('"+e.link.replace("urlToShare",a)+"', '_blank')"},i&&wp.element.createElement("i",{className:e.icon}),c&&d("\xa0 \xa0"+e.name)))}))};return wp.element.createElement("div",{style:{"text-align":n}},wp.element.createElement(p,{socialMediaChannels:s}))}})},function(e,t,n){var a,l;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var r=n.apply(null,a);r&&e.push(r)}else if("object"===l)for(var i in a)o.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(a=[],void 0!==(l=function(){return n}.apply(t,a))&&(e.exports=l))}()},function(e,t){},function(e,t){}]);