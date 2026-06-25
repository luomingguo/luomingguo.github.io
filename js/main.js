/* ============================================================
   Resume interactions: i18n toggle, theme, print, year
   No dependencies. Translatable nodes carry data-en / data-zh.
   ============================================================ */
(function () {
	'use strict';

	var html = document.documentElement;
	var body = document.body;

	/* ---------- Language ---------- */
	var savedLang = localStorage.getItem('resume-lang');
	var lang = savedLang || (navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en');

	function applyLang(next) {
		lang = next;
		var nodes = document.querySelectorAll('[data-en]');
		for (var i = 0; i < nodes.length; i++) {
			var el = nodes[i];
			var val = el.getAttribute('data-' + lang);
			if (val !== null) el.innerHTML = val;
		}
		html.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
		document.title = lang === 'zh'
			? '罗明国 — 后端 / 全栈工程师'
			: 'Mingguo Luo — Backend & Full-Stack Engineer';
		localStorage.setItem('resume-lang', lang);
	}

	var langToggle = document.getElementById('langToggle');
	if (langToggle) {
		langToggle.addEventListener('click', function () {
			applyLang(lang === 'en' ? 'zh' : 'en');
		});
	}
	applyLang(lang);

	/* ---------- Theme ---------- */
	var savedTheme = localStorage.getItem('resume-theme');
	var theme = savedTheme || (window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
	body.setAttribute('data-theme', theme);

	var themeToggle = document.getElementById('themeToggle');
	if (themeToggle) {
		themeToggle.addEventListener('click', function () {
			theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			body.setAttribute('data-theme', theme);
			localStorage.setItem('resume-theme', theme);
		});
	}

	/* ---------- Print / Download ----------
	   中文模式：跳到打印优化的中文 A4 简历页（resume.html），在那里导出 PDF。
	   英文模式：暂无英文打印页，沿用浏览器打印当前页面。
	   读取的是闭包里实时的 lang，所以会跟随当前语言。 */
	var printBtn = document.getElementById('printBtn');
	if (printBtn) {
		printBtn.addEventListener('click', function (e) {
			e.preventDefault();
			if (lang === 'zh') {
				window.open('resume.html', '_blank');
			} else {
				window.print();
			}
		});
	}

	/* ---------- Year ---------- */
	var yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
