---
layout: post
title:  "Twitter, Google Play PC, DALL-E, WhatsApp Communities & divers."
image: assets/images/posts/november22/whatsapp-communities.png
author: bienvenuelisis

categories: [ Newsletter, Actualités ]
tags: [twitter, google play, whatsapp]
description: ""
featured: false
premium: false
hidden: false
comments: false
---
## Actus Techs & Apps

1. **La pastille bleue de Twitter pourrait désormais vous coûter 8 dollars.** Musk dans son désir de rentabiliser au plus vite, son investissement consenti dans Twitter, a annoncé que dans un futur proche, les comptes souhaitant disposer de la pastille indiquant que ce compte est certifié pourrait payer 8 dollars US par mois. Entre autres ces comptes bénéficieraient :

   * D'une priorité d'affichage dans les réponses, les mention, et les recherches.
   * De la possibilité de poster des longues vidéos, ou audios.
   * D'une réduction du nombre de publicités qui leurs sont affichées.
Le désir du patron de Tesla, est de réduire la dépendance de Twitter envers les revenus publicitaires qui constituent actuellement 90% de son chiffre d'affaire.

2. **[Google Play débarque sur Windows *en bêta*.](https://play.google.com/googleplaygames)**
La mobilité de Windows augmente de jour en jour, au travers des mises à jour. Après les applications Android, ce sont maintenant les jeux mobiles Android qui débarquent sur Windows. [Google a annonce la disponibilité en beta, de Google Play Android sur PC](https://android-developers.googleblog.com/2022/10/google-play-games-beta-on-pc-continues-global-expansion.html). Cette beta donne accès à environ 85 jeux auxquelles les utilisateurs de Windows pourront jouer directement depuis leur ordinateur sans avoir à lancé un émulateur.
Quelques conditions minimales à remplir :

   * Un disque SSD, et 10 GB de stockage disponible.
   * Minimum Windows 10 (v2004).
   * 8 Gb de RAM et 4 cœurs de CPU.
   * La virtualisation de la machine doit être activée.
Cette beta n'est à l'heure actuelle disponible que dans 8 pays dans le monde dont les Etats-Unis, le Canada, le Brésil, le Mexique et 4 autres pays d'Asie.

3. **Twitter a commencé les licenciements : objectif, réduire l'effectif des employés de 50%.** Après avoir acquis Twitter pour 44 milliards de dollars, Elon Musk a commencé les manœuvres pour augmenter la productivité et les gains du réseau social. Une semaine après, près de la moitié des employés de Twitter, ont reçu un email, leur indiquant leur licenciement avec leurs accès aux messageries internes bloqués.

   * Musk chercherait également à réduire les coûts de l'entreprise, dont les frais de serveurs.
   * Toutes les divisions de l'entreprise ont été touchées par les licenciements.
Plus globalement, toute l'industrie Tech est entrain, soit de geler les embauches (Google, Apple, Amazon, Meta, ...) ou de procéder à des licenciements massifs (Lyft, Stripe...).

4. **Les développeurs peuvent commencer par intégrer DALL-E.**
[DALL-E](https://openai.com/dall-e-2/) est une intelligence artificielle capable de créer des images au travers d'instructions reçues en langage naturelle (en anglais). Actuellement il est utilisé par 3 millions d'utilisateurs, et génère 4 millions d'images chaque jour.
[Une API en beta](https://beta.openai.com/docs/guides/images), vient d'être rendu disponible pour les développeurs. Ce qui indique que les développeurs pourront désormais intégrer cet outil dans leur application web, mobile ou de bureau.

5. **WhatsApp annonce une nouvelle fonctionnalité : les communautés.** Différents des simples groupes, l[es communautés](https://www.androidauthority.com/whatsapp-communities-new-features-3153950/) permettront à des groupes ou communautés de personnes de s'organiser en différents groupes liés.

   * Les administrateurs pourront envoyer des messages à tous les membres de la communauté (donc à travers tous les groupes).
   * Les administrateurs pourront également créer des sondages, faire des appels vidéos d'au plus 32 personnes, et des groupes avec au plus 1024 participants.
   * Les participants pourront partager des fichiers dont la taille peut aller jusqu'à 2 Go, et les administrateurs pourront supprimer des messages qu'ils estiment hors propos ou inconvenants.
[La mise à jour](https://blog.whatsapp.com/communities-now-available) sera déployée progressivement à tous les utilisateurs durant les prochains mois.

## React

Pas de grosses nouveautés dans l'écosystème React cette semaine. Partons donc à la découverte de quelques articles et librairies.

1. **Une librairie de composants UI natives pour le Web : [Radix UI](https://www.radix-ui.com/).**
C'est une alternative à MUI & Ant Design, qui se veut plus *accessible* et met l'accent sur l'accessibilités des composants.

2. **[Comment intégrer Paypal dans votre application web React ?](https://dev.to/paypaldeveloper/how-to-add-paypal-checkout-payments-to-your-react-app-53aa)**
Si vous souhaitez monétiser vos contenus, ou ajouter un moyen de paiement sur votre site, Paypal est une solution intéressante. Cet article vous explique comment intégrer Paypal dans votre application React.

3. **[Quelques astuces pour optimiser son code Javascript.](https://dev.to/ruppysuppy/7-shorthand-optimization-tricks-every-javascript-developer-should-know-4fj5)**
Il est possible que vous n'utilisez pas encore les nouvelles syntaxes de Javascript qui rende votre code moins verbeux et plus efficace. Cet article vous explique comment optimiser votre code Javascript.

4. **[Comment migrer aisément de Javascript vers TypeScript ?](https://www.freecodecamp.org/news/typescript-for-react-developers/)**
TypeScript est depuis peu, selon GitHub, le langage le plus utilisé au monde, devant Javascript. Et ce n'est pas anodin. Son typage statique, combiné à son interopérabilité avec tout l'écosystème de Javascript apporte un réel gain dans la maintenabilité des gros projets en équipe. Donc si vous souhaitez migrer en douceur vers TypeScript, cet article aborde les fondamentaux de TypeScript, ses bénéfices et pourquoi vous devriez migrer ou non vers le langage de Microsoft.

## Flutter

1. **[Comment créer une extension de navigateur avec Flutter ?](https://blog.codemagic.io/how-to-build-a-chrome-extension-with-flutter-web/)**
Le support stable de Flutter pour le Web, [a été annoncé](https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65) depuis la version 2 du Framework, en Mars 2021. Même si le support du Web n'est pas encore assez mature pour rivaliser avec des frameworks comme React ou Angular, son utilisation peut s'avérer efficace pour des développeurs Flutter qui souhaitent rapidement développer une SPA (Single Page Application).
Autre cas d'usage, développer une extension pour navigateur. Alors si vous souhaitez développer un outil ou un SAAS en extension, [cet article](https://blog.codemagic.io/how-to-build-a-chrome-extension-with-flutter-web/) passe en revus les différentes étapes pour y arriver efficacement avec Flutter.

2. **Flutter InAppWebView, le plugin qui permet d'ouvrir un WebView dans votre application Flutter passe en version 6.**
[Flutter InAppWebView](https://inappwebview.dev/), c'est la solution pour intégrer aisément une WebView paramétrable à souhait et sophistiqué dans votre application. [La dernière version sortie, le 2 novembre 2022](https://pub.dev/packages/flutter_inappwebview/versions/6.0.0-beta.12) apporte quelques nouvelles fonctionnalités.

   * Au support d'Android et iOS, s'ajoute le support du Web (à travers l'élément iframe) et de MacOS.
   * Désormais dans la WebView vous pouvez lancer et configurer l'impression de la page actuelle.

3. **Découverte de la semaine : [*local_auth*](https://pub.dev/packages/local_auth).** Ce package vous permet sur Android, iOS et Windows d'utiliser l'authentification biométrique pour sécuriser les contenus de votre application. Lorsque c'est disponible, vous pouvez également faire appel à la reconnaissance faciale. Bien entendu des méthodes vous permettent de détecter quelles méthodes d'authentification est supporté par l'appareil de l'utilisateur et d'agir en conséquence.

4. **Comment développer une application mobile de Banking avec Flutter ?** Ce n'est plus une surprise, Flutter s'est largement imposé dans l'écosystème du développement des applications mobiles multi-plateformes, avec des acteurs majeurs comme IBM, Alibaba, ByteDance (créateur de TikTok), eBay, Tencent, Toyota qui ont migré rapidement plusieurs de leurs applications métiers vers le framework de Google. Dernière entreprise et non des moindres à rejoindre ces acteurs, Crédit Agricole. Cette dernière dont la fiche Wikipédia la décrit sobrement comme *le plus grand réseau de banque coopérative et mutualiste au monde* a récemment migré son application cliente principale vers Flutter. Cette expérience de l'utilisation de Flutter à  grande échelle, dans un domaine aussi exigeant que la finance a été [relatée dans une vidéo](https://flutter.dev/showcase/credit-agricole) disponible sur [flutter.dev](https://flutter.dev).

5. **[Un template](https://verygood.ventures/blog/generate-a-game-with-our-new-template?utm_source=newsletter.theresilient.dev&utm_medium=newsletter&utm_campaign=game_template) pour les développeurs souhaitant créer des applications mobiles avec Flutter.**
*[Very Good Ventures*](https://verygood.ventures/), la structure spécialisée dans le développement d'applications mobiles Flutter, vient de mettre à disposition des développeurs, au travers de [son outil en ligne de commande](https://pub.dev/packages/very_good_cli), un template pour rapidement développer des applications mobile avec Flutter et [Flame](https://flame-engine.org/) (le moteur de rendu 2D de Flutter). Il inclut :

   * Des composants : unités et objets visible du jeu vidéos.
   * Des entités et leurs comportements : les entités gèrent le fonctionnement des objets, et les comportements définisse les logiques et interactions de ses objets.
   * Entres autres, de l'audio, une architecture de code et une couverture de test à 100%.

## Découvertes

1. **Améliorer ses compétences de développement en s'amusant ?** Comment monter en compétences de manière ludique. Un site web, [Exercism](https://exercism.org/), relève le défi entre challenges, défis; exercices interactifs dans une interface très épuré et conviviale. Plus de 61 langages dont bien entendu les plus populaires sont supportés.

2. **Une application mobile qui vous permet de télécharger des vidéos, des audios de plus de 1226 sites dont Youtube, Twitter, Apple Podcasts, Spotify** [Seal](https://f-droid.org/en/packages/com.junkfood.seal/) vous permet de télécharger des vidéos, des audios et les sons des vidéos directement et simplement depuis votre smartphone Android. Plus [d&#39;un millier de sites](https://github.com/ytdl-org/youtube-dl/blob/master/docs/supportedsites.md) sont supportés, Pas de publicité, une interface simple et intuitive, et le projet est également disponible en [open source](https://github.com/JunkFood02/Seal). Vous pouvez donc rapporter des bugs ou participer à l'amélioration.

C'est tout pour cette semaine. Rendez vous la semaine prochaine.
