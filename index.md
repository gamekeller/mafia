---
layout: default
title: Home
include-social-icons: true
base_url: "../"
---

<h1 class="banner">Mafia</h1>

Hallo und herzlich willkommen auf der Gamekeller Teamspeak Mafia Seite!

### Was ist Mafia?

Mafia ist ein Gesellschaftsspiel, bei dem jeder Spieler eine Rolle bekommt, die jeweils verschiedene Fähigkeiten hat.
Diese Rollen sind grob in zwei Fraktionen eingeteilt: Die Guten (oft auf "Town" genannt) und die Bösen (oft auf "Mafiosi" genannt).

### Was ist der Zweck dieser Seite?

Der Zweck dieser Seite ist ein nachschlagbares Regelwerk für alle Spieler zu bieten, da es eine gewisse Komplexität hat.

### Wie kann ich mitspielen?

Wir probieren jeden Samstag zu spielen. (Stand: 16.07.15) Du kannst einfach [ins Teamspeak kommen](ts3server://gamekeller.net?port=9987) und mitspielen oder auch erst einmal zuhören. Wir eröffnen auch Events bei [Steam](http://steamcommunity.com/groups/gamekeller#events) und [Facebook](https://www.facebook.com/groups/178919188822122/events/).

### Kann ich helfen, das Regelwerk auszubauen?

Sehr gerne, wir freuen uns immer, wenn jemand Fehler findet, die wir beheben können oder Leute sogar komplett neue Rollen (er)finden. Entweder du eröffnest ein Ticket in unserem [GitHub Bug Tracker](https://github.com/gamekeller/mafia), schreibst Yeti eine [E-Mail](mailto:yeti@gamekeller.net) oder postest deine Idee in unserem [Subreddit](https://www.reddit.com/r/gamekeller).

Gamekeller Teamspeak Mafia ist–wie man sich denken kann–ein Gamekeller Projekt. Ihr seid also eingeladen unseren ganzen Kram auszuchecken:

<div>
  <a class="icon" href="https://www.facebook.com/gamekeller.de">{% include icon.html icon="facebook" %}</a>
  <a class="icon" href="https://www.reddit.com/r/gamekeller">{% include icon.html icon="reddit" %}</a>
  <a class="icon" href="https://twitter.com/gamekeller">{% include icon.html icon="twitter" %}</a>
  <a class="icon" href="https://gamekeller.net/">{% include icon.html icon="gamekeller" %}</a>
</div>

---

## Changelogs
{: #changelogs}

<ul class="posts">
  {% for post in site.posts %}
    <li class="post">
      <h3 class="post-heading">{{post.title}} {{post.version}}<span class="post-date">vom {{post.datum}}</span></h3>

      {{ post.content }}

      {% if post.reddit %}
        <a class="post-reddit icon" href="{{post.reddit}}">
          {% include icon.html icon="reddit" %}
          <span>Auf Reddit diskutieren</span>
        </a>
      {% endif %}
    </li>
  {% endfor %}
</ul>