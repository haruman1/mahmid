<script type="text/javascript">
//<![CDATA[
   var postTitle = new Array();     // array of posttitles
   var postUrl = new Array();       // array of posturls
   var postDate = new Array();      // array of post publish dates
   var postSum = new Array();       // array of post summaries
   var postLabels = new Array();    // array of post labels

//global variables
   var sortBy = "datenewest";         // default value for sorting ToC
   var tocLoaded = false;           // true if feed is read and ToC can be displayed
   var numChars = 250;              // number of characters in post summary
   var postFilter = '';             // default filter value
   var tocdiv = document.getElementById("bp_toc"); //the toc container
   var totalEntires =0; //Entries grabbed till now
   var totalPosts =0; //Total number of posts in the blog.

//main callback function
function loadtoc(t){function e(){if("entry"in t.feed){var e=t.feed.entry.length;if(totalEntires+=e,totalPosts=t.feed.openSearch$totalResults.$t,totalPosts>totalEntires){var s=document.createElement("script");s.type="text/javascript",startindex=totalEntires+1,s.setAttribute("src","/feeds/posts/summary?start-index="+startindex+"&max-results=500&alt=json-in-script&callback=loadtoc"),tocdiv.appendChild(s)}for(var o=0;e>o;o++){for(var a,l=t.feed.entry[o],r=l.title.$t,i=l.published.$t.substring(0,10),n=0;n<l.link.length;n++)if("alternate"==l.link[n].rel){a=l.link[n].href;break}if("content"in l)var p=l.content.$t;else if("summary"in l)var p=l.summary.$t;else var p="";var c=/<\S[^>]*>/g;if(p=p.replace(c,""),p.length>numChars){p=p.substring(0,numChars);var d=p.lastIndexOf(" ");p=p.substring(0,d)+"..."}var f="";if("category"in l){for(var n=0;n<l.category.length;n++)f+="<a href=\"javascript:filterPosts('"+l.category[n].term+"');\" title=\"Click here to select all posts with label '"+l.category[n].term+"'\">"+l.category[n].term+"</a>,  ";var u=f.lastIndexOf(",");-1!=u&&(f=f.substring(0,u))}postTitle.push(r),postDate.push(i),postUrl.push(a),postSum.push(p),postLabels.push(f)}}totalEntires==totalPosts&&(tocLoaded=!0,showToc())}e(),sortPosts(sortBy),tocLoaded=!0}function filterPosts(t){postFilter=t,displayToc(postFilter)}function allPosts(){postFilter="",displayToc(postFilter)}function sortPosts(t){function e(t,e){var s=postTitle[t];postTitle[t]=postTitle[e],postTitle[e]=s;var s=postDate[t];postDate[t]=postDate[e],postDate[e]=s;var s=postUrl[t];postUrl[t]=postUrl[e],postUrl[e]=s;var s=postSum[t];postSum[t]=postSum[e],postSum[e]=s;var s=postLabels[t];postLabels[t]=postLabels[e],postLabels[e]=s}for(var s=0;s<postTitle.length-1;s++)for(var o=s+1;o<postTitle.length;o++)"titleasc"==t&&postTitle[s]>postTitle[o]&&e(s,o),"titledesc"==t&&postTitle[s]<postTitle[o]&&e(s,o),"dateoldest"==t&&postDate[s]>postDate[o]&&e(s,o),"datenewest"==t&&postDate[s]<postDate[o]&&e(s,o)}function displayToc(t){var e=0,s="",o="POST TITLE",a="Click to sort by title",l="DATE",r="Click to sort by date",i="LABELS",n="";"titleasc"==sortBy&&(a+=" (descending)",r+=" (newest first)"),"titledesc"==sortBy&&(a+=" (ascending)",r+=" (newest first)"),"dateoldest"==sortBy&&(a+=" (ascending)",r+=" (newest first)"),"datenewest"==sortBy&&(a+=" (ascending)",r+=" (oldest first)"),""!=postFilter&&(n="Click to show all posts"),s+='<div class="table-responsive">
',s+='<table class="table">',s+="<thead>",s+="
<tr>",s+="<th>",s+='<a href="javascript:toggleTitleSort();" title="'+a+'">'+o+"</a>",s+="</th>",s+="<th>",s+='<a href="javascript:toggleDateSort();" title="'+r+'">'+l+"</a>",s+="</th>",s+="<th>",s+='<a href="javascript:allPosts();" title="'+n+'">'+i+"</a>",s+="</th>",s+="</tr>
",s+="</thead>",s+="<tbody>";for(var p=0;p<postTitle.length;p++)""==t?(s+='
<tr><td><a href="'+postUrl[p]+'" title="'+postSum[p]+'">'+postTitle[p]+"</a></td><td>"+postDate[p]+"</td><td>"+postLabels[p]+"</td></tr>
",e++):(z=postLabels[p].lastIndexOf(t),-1!=z&&(s+='
<tr><td><a href="'+postUrl[p]+'" title="'+postSum[p]+'">'+postTitle[p]+"</a></td><td>"+postDate[p]+"</td><td>"+postLabels[p]+"</td></tr>
",e++));if(s+="</tbody>",s+="</table>
",s+="</div>
",e==postTitle.length)var c='<span class="toc-note">Displaying all '+postTitle.length+" posts<br/></span>";else{var c='<span class="toc-note">Displaying '+e+" posts labeled '";c+=postFilter+"' of "+postTitle.length+" posts total<br/></span>"}tocdiv.innerHTML=c+s}function toggleTitleSort(){sortBy="titleasc"==sortBy?"titledesc":"titleasc",sortPosts(sortBy),displayToc(postFilter)}function toggleDateSort(){sortBy="datenewest"==sortBy?"dateoldest":"datenewest",sortPosts(sortBy),displayToc(postFilter)}function showToc(){if(tocLoaded){displayToc(postFilter);document.getElementById("toclink")}else alert("Just wait... TOC is loading")}function hideToc(){var t=document.getElementById("toc");t.innerHTML="";var e=document.getElementById("toclink");e.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">» Show Table of Contents</a> <span style="font-size:11px;color:red;">Terbaru!</span>'}var postTitle=new Array,postUrl=new Array,postDate=new Array,postSum=new Array,postLabels=new Array,sortBy="datenewest",tocLoaded=!1,numChars=250,postFilter="",tocdiv=document.getElementById("bp_toc"),totalEntires=0,totalPosts=0;
//]]>
</script>
<script src="/feeds/posts/summary?alt=json-in-script&amp;max-results=500&amp;callback=loadtoc" type="text/javascript"></script>
