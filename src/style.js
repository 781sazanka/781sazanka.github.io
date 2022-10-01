const root=document.querySelector('script[src$="src/style.js"]').outerHTML.match(/"(.*)src\/style.js"/)[1];
document.body.insertAdjacentHTML('beforeend',`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" media="print" onload="this.media='all';"><style>
	:root{background-color:#401;color:#fff;font-family:'Zen Maru Gothic',sans-serif;--items:240px;}*{font-family:inherit;}
	:root::before{content:"";display:block;width:80vmin;height:80vmin;position:fixed;top:10%;right:0;transform:translateX(25%);background:url(${root}img/icon_.svg) no-repeat 0 0/100%;filter:drop-shadow(0 0 16px #fff)blur(4px)opacity(.2);}
	:link{color:#aef;}:link:hover{color:#8af;}:link:active{color:#48f;}:visited{color:#eaf;}:visited:hover{color:#a8f;}:visited:active{color:#84f;}
	img:not(header *){max-width:512px;width:100%;border-radius:16px;height:auto;}

	header{position:-webkit-sticky;position:sticky;display:flex;justify-content:space-between;flex-wrap:wrap;padding-bottom:8px;top:8px;z-index:10;}
	hr,.box,header>*{box-sizing:border-box;border:0;background-color:#5558;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border-radius:16px;padding:2px;}
	.box,header>*{padding:8px;}header>*{flex:0 0 auto;height:64px;}.box{margin:8px 0;}
	header>a{text-decoration:none;}header>a>img{display:inline-block;height:100%;width:auto;}
	header>button{-webkit-appearance:none;appearance:none;margin:0;border:0;font-size:x-large;color:#fffc;}header>button:focus,.box:target{box-shadow:0 0 0 4px inset #f84;}
	nav{transform:scale(.5);opacity:0;visibility:hidden;transition:.2s;position:absolute;top:100%;right:0;width:min(calc(100% - 64px),480px);height:auto;max-height:calc(100vh - 88px);overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(160px,100%),1fr));}
	button:focus~nav,nav:focus-within,button:hover~nav,nav:hover{transform:scale(1);opacity:1;visibility:visible;}

	.items{display:grid;max-width:100%;width:100vw;grid-template-columns:repeat(auto-fill,minmax(min(var(--items),100%),1fr));grid-gap:8px;}.items>*{margin:0;}
	.title{padding:16vmin 0;text-align:center;font-size:16vmin;}
</style>
<header>
	<a href="${root}index.html"><img src="${root}img/icon.svg" alt="LOGO" width="1" height="1"><img src="${root}img/txt.svg" alt="SAZANKA Robotics" width="9" height="4"></a>
	<button>MENU ☰</button>
	<nav>
		<div>
			<h2><a href="${root}about.html">About Us</a></h2>
			<ul>
				<li><a href="${root}about.html#us">私たちについて</a></li>
				<li><a href="${root}about.html#frc">FRCについて</a></li>
				<li><a href="${root}about.html#activities">活動内容</a></li>
				<li><a href="${root}about.html#sponsors">スポンサー</a></li>
				<li><a href="${root}about.html#data">チームデータ</a></li>
			</ul>
		</div>
		<div>
			<h2><a href="${root}join.html">Join Us</a></h2>
			<ul>
				<li><a href="${root}join.html#eligibility">応募資格</a></li>
				<li><a href="${root}join.html#">WIP</a></li>
			</ul>
		</div>
		<div>
			<h2><a href="${root}support.html">Support Us</a></h2>
			<ul>
				<li><a href="${root}support.html#gold">Gold sponser</a></li>
				<li><a href="${root}support.html#silver">Silver sponser</a></li>
				<li><a href="${root}support.html#bronze">Bronze sponser</a></li>
			</ul>
		</div>
		<div>
			<h2>Contact Us</h2>
			<ul>
				<li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe83hDsR-ABGXzZxZ_cfQE-UIQSprTK8KLmTkedYauMUNK6aw/viewform?usp=sf_link" target="_blank">Google Forms</a></li>
				<li><a href="https://www.instagram.com/teamsazanka/" target="_blank">Instagram</a></li>
				<li><a href="https://twitter.com/Sazanka_FRC" target="_blank">Twitter</a></li>
				<li><a href="https://www.facebook.com/Sazanka-RoboticsFRC8615-107049188759627" target="_blank">Facebook</a></li>
			</ul>
		</div>
		<div>
			<h2>Blog</h2>
			<ul>
				<li><a href="${root}blog/index.html">Blog</a></li>
			</ul>
		</div>
	</div>

	</nav>
</header>`);
addEventListener('DOMContentLoaded',async e=>{
	document.body.insertAdjacentHTML('beforeend',`<div class="box">
		<h2>お問い合わせ</h2>
		<hr>
		<h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSe83hDsR-ABGXzZxZ_cfQE-UIQSprTK8KLmTkedYauMUNK6aw/viewform?usp=sf_link">Google Forms</a></h2>
	</div>
	<hr><footer>
		2020~ by SAZANKA Robotics.｡:+*<br>
		<span id="acccnt">Loading...</span><br>
		MIT License
	</footer>`);
	const counter=await(await fetch(`https://script.google.com/macros/s/AKfycbxKSdzU1_sla17m48kpEG8MYJ4HaTYF9JtqDRIqTukMsrBtSgzmyHGzWbUVaZEQcKGv/exec${(sessionStorage.visited||!location.protocol.includes('http'))?'':'?add=1'}`)).json();
	sessionStorage.visited=true;
	acccnt.textContent=`today:${counter.today} total:${counter.total}`;
});
document.documentElement.ontouchstart=_=>_;
