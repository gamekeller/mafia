---
layout: default
title: home
base_url: "../"
---

Hallo und Willkommen auf der Gamekeller Teamspeak Mafia Seite!

###Was ist Mafia?

Mafia ist ein Gesellschaftsspiel, bei dem jeder Spieler eine Rolle bekommt, die jeweils verschiedene Fähigkeiten hat.
Diese Rollen sind grob in zwei Fraktionen eingeteilt: Die Guten (oft auf "Town" genannt) und die Bösen (oft auf "Mafiosi" genannt).

###Was ist der Zweck dieser Seite?

Der Zweck dieser Seite ist ein nachschlagbares Regelwerk für alle Spieler zu bieten, da es eine gewisse Komplexität hat.

###Wie kann ich mitspielen?

Wir probieren jeden Samstag zu spielen. (Stand: 16.07.15) Du kannst einfach ins Teamspeak kommen und mitspielen oder auch erst einmal zuhören. Wir eröffnen auch Events bei [Steam](http://steamcommunity.com/groups/gamekeller#events) und [Facebook](https://www.facebook.com/groups/178919188822122/events/). 

###Kann ich helfen, das Regelwerk auszubauen?

Sehr gerne, wir freuen uns immer, wenn jemand Fehler findet, die wir beheben können oder Leute sogar komplett neue Rollen (er)finden. Entwerder eröffne ein "issue" in unserem [GitHub Projekt](https://github.com/gamekeller/mafia), schreib Yeti eine [Email](mailto:yeti@gamekeller.net) oder poste deine Idee in unserem [Subreddit](https://www.reddit.com/r/gamekeller).

Gamekeller Teamspeak Mafia ist, wie man sich denken kann, ein Gamekeller Projekt. Ihr seid also eingeladen unseren ganzen Kram auszuchecken:

<div>
<a href="https://www.facebook.com/gamekeller.de" class="embed"> {% include facebook-logo.html %} </a>
<a href="https://www.reddit.com/r/gamekeller" class="embed"> {% include reddit-svg.html %} </a>
<a href="https://twitter.com/gamekeller" class="embed"> {% include twitter-logo.html %} </a>
<a href="https://gamekeller.net/" class="embed"> {% include gk-logo.html %} </a>
</div>

---
<a class="anchor" href="#changelogs" name="changelogs"></a>
<h2> Changelogs </h2>



<div>
	<ul>
	  {% for post in site.posts %}
	  <li class="post-container">
		<h3 class="post-h">{{ post.title }} {{post.version}}</h3> 
		<span class="post-date">vom {{post.datum}} </span>
		
		{{ post.content }}
		Post auf Reddit: <a href="{{ post.reddit }}">{% include reddit-svg.html %}</a>
	  </li>
	  {% endfor %}
	</ul>
</div>
