const root=document.querySelector('script[src$="src/style.js"]').outerHTML.match(/"(.*)src\/style.js"/)[1];
document.body.insertAdjacentHTML('beforeend',`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" media="print" onload="this.media='all';"><style>
	:root{background-color:#401;color:#fff;font-family:'Zen Maru Gothic',sans-serif;}*{font-family:inherit;}
	:root::before{content:"";display:block;width:80vmin;height:80vmin;position:fixed;top:10%;right:0;transform:translateX(25%);background:url(${root}img/icon_.svg) no-repeat 0 0/100%;filter:drop-shadow(0 0 16px #fff)blur(4px)opacity(.2);}
	:link{color:#aef;}:link:hover{color:#8af;}:link:active{color:#48f;}:visited{color:#eaf;}:visited:hover{color:#a8f;}:visited:active{color:#84f;}
	header{position:-webkit-sticky;position:sticky;display:flex;justify-content:space-between;flex-wrap:wrap;padding-bottom:8px;top:8px;z-index:10;}
	.title{padding:16vmin 0;text-align:center;font-size:16vmin;}
	hr,.box,header>*{box-sizing:border-box;border:0;background-color:#6668;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);border-radius:16px;padding:2px;}
	.box,header>*{padding:8px;}header>*{flex:0 0 auto;height:64px;}.box{margin:8px 0;}
	header>a{text-decoration:none;}header>a>img{display:inline-block;height:100%;width:auto;}
	header>button{-webkit-appearance:none;appearance:none;margin:0;border:0;width:64px;font-size:32px;color:#fffc;}header>button:focus{box-shadow:0 0 0 4px inset #f84;}
	nav{transform:scale(.5);opacity:0;visibility:hidden;transition:.2s;position:absolute;top:100%;right:0;width:min(calc(100% - 64px),480px);height:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(160px,100%),1fr));}
	button:focus~nav,nav:focus-within,button:hover~nav,nav:hover{transform:scale(1);opacity:1;visibility:visible;}
</style>
<header>
	<a href="${root}index.html">
		<img src="${root}img/icon.svg" alt="LOGO" width="1" height="1">
		<img src="${root}img/txt.svg" alt="SAZANKA Robotics" width="9" height="4">
	</a>
	<button>三</button>
	<nav>
		<div>
			<h2><a href="${root}about.html">About</a></h2>
			<ul>
				<li><a href="${root}about.html#us">私たちについて</a></li>
				<li><a href="${root}about.html#frc">FRCについて</a></li>
				<li><a href="${root}about.html#data">チームデータ</a></li>
				<li><a href="${root}about.html#activities">活動内容</a></li>
				<li><a href="${root}about.html#eligibility">応募資格</a></li>
			</ul>
		</div>
		<div>
			<h2>SNS</h2>
			<ul>
				<li><a href="https://www.instagram.com/teamsazanka/" target="_blank">Instagram</a></li>
				<li><a href="https://twitter.com/Sazanka_FRC" target="_blank">Twitter</a></li>
				<li><a href="https://www.facebook.com/Sazanka-RoboticsFRC8615-107049188759627" target="_blank">Facebook</a></li>
			</ul>
		</div>		
	</nav>
</header>`);
