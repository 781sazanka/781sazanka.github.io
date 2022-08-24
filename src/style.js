const root=document.querySelector('script[src$="src/style.js"]').outerHTML.match(/"(.*)src\/style.js"/)[1];
document.body.insertAdjacentHTML('beforeend',`<style>
	:root{background-color:#a65;color:#fff;font-family:sans-serif;}
	:link{color:#aef;}:link:hover{color:#8af;}:link:active{color:#48f;}:visited{color:#eaf;}:visited:hover{color:#a8f;}:visited:active{color:#84f;}
	header{position:-webkit-sticky;position:sticky;display:flex;justify-content:space-between;flex-wrap:wrap;padding-bottom:8px;top:8px;}
	.title{padding:10vmin 0;text-align:center;font-size:16vmin;}
	hr,.box,header>*{box-sizing:border-box;border:0;background-color:#2228;backdrop-filter:blur(4px);border-radius:16px;padding:2px;}
	.box,header>*{padding:8px;}
	header>*{flex:0 0 auto;height:64px;}
	header>a{text-decoration:none;}header>a>img{display:inline-block;height:100%;width:auto;}
	header>button{-webkit-appearance:none;appearance:none;margin:0;border:0;width:64px;font-size:32px;color:#fff8;}header>button:focus{box-shadow:0 0 0 4px inset #48f;}
	nav{transform:scale(.5);opacity:0;visibility:hidden;transition:.2s;position:absolute;top:100%;right:0;width:min(calc(100% - 64px),480px);height:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(160px,100%),1fr));}
	button:focus~nav,nav:focus-within,button:hover~nav,nav:hover{transform:scale(1);opacity:1;visibility:visible;}
</style>
<header>
	<a href="${root}">
		<img src="${root}img/icon.svg" alt="LOGO" width="1" height="1">
		<img src="${root}img/txt.svg" alt="SAZANKA Robotics" width="9" height="4">
	</a>
	<button>三</button>
	<nav>
		<div>
			<h2><a href="${root}about/sazanka.html#us">About</a></h2>
			<ul>
				<li><a href="${root}about/sazanka.html#us">SAZANKAとは</a></li>
				<li><a href="${root}about/sazanka.html#frc">FRC FIRSTとは</a></li>
				<li><a href="${root}about/sazanka.html#achevements">チーム実績</a></li>
				<li><a href="${root}about/sazanka.html#management">収支報告</a></li>
				<li><a href="${root}about/sazanka.html#sponsers">スポンサー</a></li>
			</ul>
		</div>
		<div>
			<h2>Blog</h2>
			<ul>
				<li><a href="${root}blog/">WIP</a></li>
				<li><a href="${root}blog/">WIP</a></li>
				<li><a href="${root}blog/">WIP</a></li>
				<li><a href="${root}blog/">WIP</a></li>
				<li><a href="${root}blog/">WIP</a></li>
			</ul>
		</div>
	</nav>
</header>`);