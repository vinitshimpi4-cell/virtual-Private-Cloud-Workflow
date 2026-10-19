var G="#ffc24a",V="#8b7bff",C="#38e1d0",R="#ff5d73",B="#5aa9ff",GR="#5ee38a";
function zn(x,y,w,h,c,d,l,l2,lx){return '<rect class="zn" style="--c:'+c+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="16"'+(d?' stroke-dasharray="'+d+'"':'')+'/>'+(l?'<text class="zl" x="'+(x+(lx||12))+'" y="'+(y+19)+'">'+l+(l2?' <tspan class="zl2">'+l2+'</tspan>':'')+'</text>':'')}
function bx(x,y,w,h,ic,lb,c){return '<g class="bx" style="--c:'+c+'"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="12"/><text class="ic" x="'+(x+w/2)+'" y="'+(y+28)+'">'+ic+'</text><text class="lb" x="'+(x+w/2)+'" y="'+(y+h-9)+'">'+lb+'</text></g>'}
function tag(x,y,t,w){w=w||40;return '<g class="tag"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="16" rx="8"/><text x="'+(x+w/2)+'" y="'+(y+11.5)+'">'+t+'</text></g>'}
var pid=0;
function flow(d,c,em,dur,begin){var id='p'+(pid++);return '<path id="'+id+'" class="wire" style="--c:'+c+'" d="'+d+'"/>'}
function pk(id,em,dur,begin){return '<text class="pk"><animateMotion dur="'+dur+'s" begin="'+begin+'s" repeatCount="indefinite"><mpath href="#'+id+'"/></animateMotion>'+em+'</text>'}
function fp(d,c,em,dur,begin){var id='p'+(pid++);return '<path id="'+id+'" class="wire" style="--c:'+c+'" d="'+d+'"/>'}
function wp(items){var w='',p='';items.forEach(function(i){var id='p'+(pid++);w+='<path id="'+id+'" class="wire" style="--c:'+i[1]+'" d="'+i[0]+'"/>';p+=pk(id,i[2],i[3],i[4])});return [w,p]}

var S=[];
/* 1 VPC */
S.push({s:1,u:99,h:zn(175,12,715,596,'#5aa9ff','8 6','☁️ AWS Cloud · one Region')+zn(190,42,685,553,C,'',"Your VPC",'10.0.0.0/16 · your private fenced plot',14)});
/* 2 AZ */
S.push({s:2,u:99,h:zn(210,72,320,448,B,'4 5','Availability Zone A','Building 1')+zn(540,72,320,448,B,'4 5','Availability Zone B','Building 2')});
/* 3 subnets */
S.push({s:3,u:99,h:zn(220,102,300,175,G,'','Public subnet','10.0.1.0/24 · visitors welcome')+zn(550,102,300,175,G,'','Public subnet','10.0.3.0/24')+zn(220,298,300,205,V,'','Private subnet','10.0.2.0/24')+zn(550,298,300,205,V,'','Private subnet','10.0.4.0/24',95)});
/* 4 gate */
var w4=wp([['M80,225 L80,260 L150,262 L190,200 L250,160',C,'✉️',4,0]]);
S.push({s:4,u:5,h:'<path class="wire" style="--c:'+C+'" id="u4" d="M150,182 L190,182 L320,200"/>'+pk('u4','✉️',3.5,0)});
S.push({s:4,u:99,h:'<rect x="168" y="150" width="44" height="60" rx="10" fill="#16213f" stroke="'+R+'" stroke-width="2"/><text class="ic" x="190" y="178">🚪</text><text class="sm" x="190" y="226">Internet</text><text class="sm" x="190" y="238">Gateway</text>'+'<rect x="215" y="540" width="300" height="30" rx="8" fill="#16213f" stroke="'+C+'"/><text class="sm" x="365" y="559" style="font-size:11.5px">Route table: outside traffic → Internet Gateway</text>'});
S[S.length-1].h=bx(10,30,140,70,'👥','Visitors',B)+bx(10,135,140,90,'🌐','The Internet',B)+'<path class="wire" style="--c:#5aa9ff" d="M80,100 L80,135"/>'+S[S.length-1].h;
/* 5 ALB + web */
var w5=wp([['M150,182 L200,182 L400,146 L440,146 L465,205',C,'',4,0],['M150,182 L200,182 L400,146 L440,146 L440,170 L610,170 L610,205',C,'',4,1.6]]);
S.push({s:5,u:99,h:w5[0]+'<rect x="400" y="130" width="260" height="30" rx="15" fill="#16213f" stroke="'+GR+'" stroke-width="1.8"/><text class="lb" x="530" y="150">⚖️ Load Balancer</text>'+bx(420,180,90,60,'🖥️','Web server',G)+bx(565,180,90,60,'🖥️','Web server',G)+pk('p'+(pid-2),'✉️',4,0)+pk('p'+(pid-1),'✉️',4,2)});
/* 6 app + db */
var w6=wp([['M465,222 L465,375 L325,375',V,'💾',3.5,0],['M590,240 L590,375',V,'💾',3,1],['M300,405 L300,482 L795,482 L795,405',V,'🔁',5,0.5]]);
S.push({s:6,u:99,h:w6[0]+bx(420,345,90,60,'⚙️','App server',V)+bx(565,345,90,60,'⚙️','App server',V)+bx(235,345,90,60,'🗄️','Database',V)+bx(750,345,90,60,'🗄️','DB live copy',V)+'<text class="zl2" x="410" y="474" text-anchor="middle">live copy kept in Building 2</text>'+w6[1]});
/* 7 NAT */
var w7=wp([['M432,352 L300,244 L262,214 L190,196 L150,182',G,'📦',4.5,0]]);
S.push({s:7,u:99,h:w7[0]+bx(235,180,90,60,'📮','NAT counter',G)+w7[1]});
/* 8 security */
var sg=[[420,180],[565,180],[420,345],[565,345],[235,345],[750,345],[235,180]].map(function(p){return tag(p[0],p[1]+64,'SG guard',56)}).join('');
var hk=wp([['M150,182 L200,168 L372,168 L372,288 L372,168 L200,168 L150,182',R,'😈',5,0]]);
S.push({s:8,u:99,h:hk[0]+sg+tag(445,95,'NACL',64)+tag(775,95,'NACL',64)+tag(340,290,'NACL',64)+tag(670,290,'NACL',64)+'<text class="x" x="372" y="276">✖</text><text class="x" x="395" y="270" style="font-size:12px;text-anchor:start">Blocked!</text>'+hk[1]});
/* 9 office + peering */
var w9=wp([['M150,440 L200,440 L225,380 L235,375',GR,'🔐',4,0],['M630,345 L630,330 L915,330',B,'🤝',4,1]]);
S.push({s:9,u:99,h:w9[0]+bx(10,410,140,80,'🏢','Your office',GR)+'<rect x="168" y="425" width="44" height="52" rx="10" fill="#16213f" stroke="'+GR+'" stroke-width="2"/><text class="ic" x="190" y="453">🔐</text><text class="sm" x="190" y="492">VPN</text><text class="sm" x="190" y="504">Gateway</text>'+zn(915,285,175,120,G,'6 5','Partner VPC','',12)+'<text class="ic" x="1002" y="352">🏘️</text><text class="sm" x="1002" y="392">Their own network</text><text class="sm" x="890" y="322" style="font-size:10px">peering</text>'+w9[1]});

var svg=document.getElementById('svg');
svg.innerHTML=S.map(function(g){return '<g class="grp" data-s="'+g.s+'" data-u="'+g.u+'">'+g.h+'</g>'}).join('');
var D=[
["Your private plot in the cloud","A cloud provider such as AWS is like a giant city. Before building anything, you fence off your own plot. Nobody from outside can walk in unless you allow it.","VPC (Virtual Private Cloud) with an address range such as 10.0.0.0/16, roughly 65,000 addresses.","Nothing moves yet. First we need land."],
["Two buildings in two places","You build in two separate parts of the city. If one has a power cut or a flood, the other keeps running.","Availability Zones: separate data centres inside the same region.","Still quiet. We are marking out the buildings."],
["A public lobby and private flats","Each building gets a lobby where visitors may come, and private flats where only residents live. Websites go in the lobby. Secrets go in the flats.","Public and private subnets: smaller address ranges inside the VPC.","The gold areas are open to visitors. The purple areas are hidden."],
["Open the main gate","Visitors come from the internet. The main gate lets them reach the lobby, and signboards tell every car which road to take.","Internet Gateway plus a route table that sends outside traffic through it.","The ✉️ is a visitor’s request travelling through the gate into the public area."],
["Hire a receptionist","Many visitors arrive at once. The receptionist greets each one and sends them to whichever website server is free. If one server is sick, it is skipped.","Application Load Balancer and web servers (EC2) in the public subnets.","✉️ requests are shared between Building 1 and Building 2."],
["Keep the vault inside","The web server asks the app server to do the real work, and the app server reads records from the database. None of these can be reached from outside. A live copy of the data sits in the other building.","App servers and a database (for example RDS Multi-AZ) in private subnets, with replication.","💾 data goes web → app → database, and 🔁 copies itself to Building 2."],
["A delivery counter for residents","Private servers still need parcels, such as security updates. They hand a request to the delivery counter, which fetches it from outside. Strangers cannot use the counter to get in.","NAT Gateway in a public subnet: private servers can go out, but nothing can come in uninvited.","📦 leaves the app server, passes the counter and the main gate, and reaches the internet."],
["Hire the guards","Every server has its own door guard and every area has a gate guard. An intruder who slips past one still has to get past the next.","Security Groups (per server, remember who they let in) and Network ACLs (per subnet, check traffic both ways).","😈 tries to enter the private area and is stopped at the gate with a ✖."],
["Link your office and your neighbours","Your office staff use a secret tunnel into the society, and a private road joins you to a partner’s society. Neither travels over the open internet.","Site-to-Site VPN (or Direct Connect) and VPC Peering. This is the full, production-style design.","🔐 office traffic and 🤝 partner traffic move on private links."]
];
var N=["Your VPC","Availability Zones","Subnets","Internet Gateway","Load Balancer & web","App & database","NAT Gateway","Security guards","VPN & peering"];
var T=["private fenced plot","two buildings","public & private","the main gate","the receptionist","the vault","delivery counter","SG & NACL","office & partner"];
var st=document.getElementById('steps'),cur=0,timer=null;
N.forEach(function(n,i){var b=document.createElement('button');b.innerHTML='<span class="n">'+(i+1)+'</span><span><b>'+n+'</b><small>'+T[i]+'</small></span>';b.onclick=function(){stop();go(i+1)};st.appendChild(b)});
function go(n){
  var prev=cur;cur=n;
  svg.querySelectorAll('.grp').forEach(function(g){
    var s=+g.dataset.s,u=+g.dataset.u,on=n>=s&&n<u;
    g.classList.remove('fresh');
    if(on&&s===n&&n>prev){void g.getBoundingClientRect();g.classList.add('fresh')}
    g.classList.toggle('on',on);
  });
  Array.prototype.forEach.call(st.children,function(b,i){b.classList.toggle('done',i<n);b.classList.toggle('cur',i===n-1)});
  var d=D[n-1];document.getElementById('t').textContent='Step '+n+': '+d[0];
  document.getElementById('pl').textContent=d[1];document.getElementById('te').textContent=d[2];document.getElementById('wa').textContent=d[3];
}
function stop(){if(timer){clearInterval(timer);timer=null;document.getElementById('play').textContent='▶ Auto-play'}}
document.getElementById('play').onclick=function(){
  if(timer){stop();return}
  if(cur>=9)go(1);
  this.textContent='⏸ Pause';
  timer=setInterval(function(){if(cur>=9){stop();return}go(cur+1)},5000);
};
document.getElementById('reset').onclick=function(){stop();go(1)};
go(1);
