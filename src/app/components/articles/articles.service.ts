import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  
  getAll() { return [...this.articles]; }
  getLatest() {
    return [...this.articles].sort((a, b) => +b.createdAt - +a.createdAt)[0];
  }
  getById(id: string) {
    return this.articles.find(a => a.id === id) || null;
  }
  
  // Mock simple pour démarrer (je brancherai une API plus tard)
  // Les articles :
  private articles = [
    {
      id: 'a1',
      title: 'Quand j’ai compris que j’étais dépendante affective (et comment je m’en suis sortie)',
      description: 'Je ne suis ni psychologue, ni médecin, ni thérapeuthe. Cet article est donc à unique but informatif, dans un esprit de partage et de témoignage personnel. Rien de ce qui est dit ici n\'est considéré comme une vérité absolue, comme une solution miracle ou thérapeuthique. Pour tous problèmes, quel qu\'en soit le sujet et la cause, n\'hésitez pas à consulter un professionnel. Il n\'y a pas de honte à demander de l\'aide.',
      tags: ['dépendance affective', 'relations', 'confiance en soi'],
      readTime: '10 min',
      createdAt: new Date('2025-08-22'),
      author: 'Elijah',
      cover: 'assets/images/articles/dependance.webp',
      links: [
        { label: 'L\'autonomie affective - site web', url: 'https://quentinlions.podia.com/' },
        { label: 'Guérir de la dependance affective - par Quentin Lions', url: 'https://fr.scribd.com/document/684720866/Guerir-du-mal-damour-de-la-dependance-a-lautonomie-affective-QLions' },
        { label: 'MindDay - application d\'auto-thérapie', url: 'https://www.mindday.com/' },
        { label: 'La vie en rose - podcast de développement personnel', url: 'https://open.spotify.com/show/1ntzhcuJSKtL0Ra0HWTsLr' }
      ],
      blocks: [
        { type: 'h2', text: 'Introduction' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'On a tous déjà entendu ce mot barbare : “dépendance affective”. ' },
            { type: 'br' },
            { type: 'text', text: 'Ça sonne presque comme une maladie mystérieuse, alors qu’en vrai, ça peut être juste… toi, moi, ton pote ou ta cousine. Des gens qui ont du mal à vivre seuls, au point que ça impacte leur confort de vie et/ou leur autonomie.' },
            { type: 'br' },
            { type: 'text', text: 'Tout le monde peut être touché par une forme de dépendance. Et souvent, ça cache quelque chose de plus profond, de plus ancien.' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Longtemps, j’ai pensé que ce n’était pas mon cas. J’étais juste “très amoureuse”. ' },
            { type: 'br' },
            { type: 'text', text: 'La vie doit ressembler aux romans qui parlent de couples tellement passionnés qu’ils ne peuvent vivre l’un sans l’autre, non ? ' },
            { type: 'br' },
            { type: 'text', text: 'Eh bien non. Avec du recul, j’étais l’archétype même de la dépendante affective, supplément maladive et handicapante. ' },
            { type: 'br' },
            { type: 'text', text: 'Et si tu te reconnais dans ce que je vais raconter… c’est peut-être aussi ton cas.' },
          ],
        },
        { type: 'h2', text: 'Petite précision' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Je ne suis pas très fan du terme “dépendance affective”, à la base. Je trouve qu’il est un peu utilisé à tort et à travers récemment. Au détour de n’importe quelle discussion, on l’entend pour qualifier tout comportement jugé “anormal” dans un couple. Personnellement, je n’aime pas coller des étiquettes sans comprendre un minimum de quoi on parle, simplement car c’est devenu un mot à la mode dans le développement personnel.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Mon petit conseil (totalement personnel et hors avis professionnel) : Prenez le temps de faire la différence entre amour, sentiments, attachement, complicité, et dépendance maladive et privative. ' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Faire le choix d’annuler sa soirée entre amis car on décide de la passer en amoureux, ou avec sa maman, ou en tête à tête avec son / sa meilleure ami(e), c’est une chose. Se priver de la moindre activité ou du moindre confort car l’autre n’est pas là (et de surcroît lui en vouloir pour son absence), c’en est une autre.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Bref, revenons à nos moutons. ' },
          ],
        },


        { type: 'h2', text: 'Quand je croyais que “collée H24” = amour absolu' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Je vous plante le décor. Moi, 16 ans, incapable de dormir seule. Même si mon conjoint était juste dans la pièce d’à côté, impossible de fermer l’œil. ' },
            { type: 'br' },
            { type: 'text', text: 'J’avais la boule au ventre, l’estomac en vrac et la gorge serrée. Alors imaginez mon choc le jour où ma mère me sort, hilare :' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'em', text: '“Tu sais, mes meilleures nuits, c’est quand ton père bosse le soir. Je peux m’étaler en étoile de mer dans le lit tranquille.”' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Moi ? Choquée. Comment on peut apprécier dormir sans son partenaire ?! Pour moi, c’était une hérésie.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Mon ex-mari et moi, on s’est mis ensemble très jeunes (16 ans). Autant vous dire qu’on a grandi dans cette fusion totale. C’était même une fierté : ' },
            { type: 'em', text: '“nous, on ne peut pas vivre l’un sans l’autre.”' },
            { type: 'br' },
            { type: 'text', text: 'On se le déclarait même dans nos lettres d’amour : je ne peux pas vivre sans toi, je ne suis bien qu’en ta présence.' },
            { type: 'br' },
            { type: 'text', text: 'Qu’est-ce que ça avait l’air beau, sur le papier.' },
            { type: 'br' },
            { type: 'text', text: 'À tel point qu’il a refusé un poste en Suisse, hyper bien payé, juste parce que ça impliquait de travailler de nuit et donc… de dormir séparés. Voilà le niveau.' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'À l’époque, je trouvais ça romantique et normal. On ne pouvait pas être bien sans l’autre, pourquoi est-ce censé être mal ou toxique ? Et puis, personne ne m’a jamais appris ou montré le contraire !' },
            { type: 'br' },
            { type: 'text', text: 'Aujourd’hui, je trouve ça flippant. Parce que ce que je prenais pour du grand amour, cette impression d’être la Mina de son Dracula, la Bella de son Edouard, c’était en réalité juste de la dépendance pure et dure.' },
          ],
        },

        { type: 'h2', text: 'Les racines de tout ça : apprendre à ne jamais être seule' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'En thérapie, j’ai dû remonter loin. Très loin.' },
            { type: 'br' },
            { type: 'text', text: 'Enfance : 7 à la maison (comme la série, oui, sauf sans la baraque immense ni les fringues coordonnées).' },
            { type: 'br' },
            { type: 'text', text: 'Chambre ? Jamais seule. Toujours à la partager avec ma sœur, puis avec ma grand-mère.' },
            { type: 'br' },
            { type: 'text', text: 'Résultat ? Je n’ai littéralement jamais appris à rester seule.' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Alors certes, c’était sympa de passer mes soirées avec ma grand-mère à discuter de son incroyable vie pendant qu’elle cousait à la lueur (oui, ambiance film d’époque 🕯️✨).' },
            { type: 'br' },
            { type: 'text', text: 'Mais le revers, c’est que je n’ai pas appris à gérer mes propres pensées, mon propre silence. Et ça, ça marque.' },
            { type: 'br' },
            { type: 'text', text: 'Je jouais avec mon frère et ma soeur, je discutais avec ma famille, je dormais dans une chambre occupée, bref. Dans chaque pièce se trouvait quelqu’un, et chaque instant était partagé.' },
          ],
        },

        { type: 'h2', text: 'La claque de ma nouvelle relation' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Après mon divorce, je rencontre mon conjoint actuel. Et là… choc culturel.' },
            { type: 'br' },
            { type: 'text', text: 'Le mec me sort, du haut de ses 19 ans à l’époque, des phrases comme :' },
          ],
        },
        { type: 'ul', items: [
          '“Chacun doit avoir sa propre vie, aussi.”',
          '“J’ai besoin de moments à moi.”',
          '“Tu vas faire quoi les fois où je ne serai pas là ?”',
        ]},
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Et moi, dans ma tête :' },
          ],
        },
        { type: 'ul', items: [
          '“Ta vie, ce n’est pas censé être la mienne ?”',
          '“Des moments à toi ? Donc tu m’aimes moins ?”',
          '“Comment ça ne pas être là ?”',
        ]},
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Bref, j’étais en panique totale.' },
            { type: 'br' },
            { type: 'text', text: 'Je venais de passer dix ans collée à quelqu’un comme Voldemort greffé derrière la tête du professeur Quirrell. Et là, j’avais face à moi un mec qui me disait : “Spoiler alert : tu dois apprendre à vivre sans moi.”' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Je me questionnais : c’est si nul que ça de passer du temps en ma présence pour qu’il préfère sortir sans moi ?' },
            { type: 'br' },
            { type: 'text', text: 'Ce genre de pensées était du pain béni pour mon auto-dénigrement. Je n’étais jamais “assez” : si je l’avais été, il voudrait passer tout son temps avec moi. Et même là, je me serais sans doute dit que ce n’était pas suffisant.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Rien que de repenser à ces phrases, j’en ai encore des frissons.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Mais ce que je ne comprenais pas à l’époque, c’est qu’il ne “préférait” rien. Ce n’était même pas une question de préférence. Il avait simplement grandi en ayant le temps de se connaître, lui, en dehors des autres. Il aimait être avec moi, oui, mais il aimait aussi être avec ses amis, ou faire ses trucs en solo.' },
            { type: 'br' },
            { type: 'text', text: 'Moi, à l’inverse, je voulais toujours être avec mon conjoint : avec lui quand j’étais avec mes amis, avec lui en famille, avec lui partout, tout le temps.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'En fait, chez lui, sa vie se déclinait en plusieurs additions :' },
            { type: 'br' },
            { type: 'text', text: '- Vie + couple + amis + famille' },
            { type: 'br' },
            { type: 'text', text: 'Chez moi, c’était une équation unique :' },
            { type: 'br' },
            { type: 'text', text: '- Couple + amis + famille = vie' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Vous voyez la différence ? Dramatique.' },
          ],
        },

        { type: 'h2', text: 'La prise de conscience (à coups de disputes et d’insomnies)' },
        {
          type: 'p',
          text: 'Au début, c’était invivable. Disputes, incompréhensions, crises d’angoisse. Je ne supportais pas l’idée de passer une soirée seule, de dormir dans mon studio vide, de me réveiller sans lui. Et lui ne supportait pas de voir l’état dans lequel je me mettais car pour lui, il ne comprenait pas en quoi il y avait un problème.'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Il prenait mes états d\'âme et mes émotions pour des caprices et de la jalousie.' },
            { type: 'br' },
            { type: 'text', text: 'Moi, je prenais ses envies de solitude comme du rejet et un manque d’amour, ses soirées entre amis sans moi comme de l’abandon. J’avais l’impression de l’aimer plus qu’il ne m’aimait, de n’avoir aucune forme d’importance dans sa vie. J’avais cette phrase qui me tournait en boucle dans l’esprit : “Que je sois là ou pas ne fait aucune différence pour lui, il passera quand même un bon moment.”' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Je ne voulais pas venir à une soirée ? Aucun problème, je pouvais rester chez moi profiter de ma petite soirée pendant que lui irait s’amuser et puis, on se retrouverait le lendemain.' },
            { type: 'br' },
            { type: 'em', text: '“Ce n’est pas grave”' },
            { type: 'text', text: ',' },
            { type: 'br' },
            { type: 'em', text: '“Profites-en pour prendre du temps pour toi et faire tout ce que tu n’as pas le temps de faire quand je suis là”' },
            { type: 'br' },
            { type: 'text', text: 'Sauf que prendre du temps pour moi, à ce moment-là, c’était être avec lui.' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Et puis un soir, entre deux larmes, je me suis posée une vraie question :' },
            { type: 'br' },
            { type: 'em', text: '“Pourquoi je souffre autant quand je suis seule ?”' },
            { type: 'br' },
            { type: 'text', text: 'Car je voyais bien que pour lui, être seul n’était pas un problème. Alors, comment cela pouvait être aussi facile de son côté, et aussi traumatisant du mien ?' },
          ],
        },
        {
          type: 'p',
          text: 'La réponse m’a fait mal : parce que je n’existais qu’à travers l’autre.'
        },

        { type: 'h2', text: 'Ce que disent les pros (et ce que j’ai testé)' },
        {
          type: 'p',
          text: 'Un psychologue m’a expliqué un truc tout bête mais qui m’a frappée :'
        },
        { type: 'quote', text: 'La dépendance affective, ce n’est pas l’amour de l’autre. C’est la peur panique de ne pas exister sans lui.' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Et effectivement, ça collait parfaitement. J’avais, à ce moment-là, la nette impression de n’être importante, belle, intéressante, intelligente, qu’à travers les yeux de mon partenaire. ' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Mes 10 ans de relation avec mon ex avaient été tellement dévastateurs sur le plan personnel, je m’étais tellement perdue, que si on m’avait demandé à l’époque : “Qu’est-ce qu’il y a de bien chez toi ? Quelles sont tes qualités ?” … Je n’aurais même pas su quoi répondre. Pire encore, j’aurais sans doute tourné la tête vers lui pour qu’il réponde à ma place. Car dans le fond, qui étais-je vraiment, en dehors de mon rôle de conjointe ?' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Et me retrouver seule m’obligeait à affronter ces questions. Et franchement ? Ça me terrifiait.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Car si j’avais dit à la version de moi de 10 ans que je deviendrais comme ça en grandissant, cette gamine sûre d’elle avec son caractère bien trempé, ses convictions et son franc-parler, cette fillette qui préférait jouer seule qu’avec d’autres enfants stupides… elle m’aurait littéralement giflé.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Bon, il fallait que je fasse quelque chose. Alors, j’ai testé plein de trucs pour m’en sortir :' },
          ],
        },
        { type: 'ul', items: [
          'des séances avec un psychologue,',
          'des lectures (Guérir du mal d’amour de Quentin Lions a été une petite claque),',
          'des podcasts et des vidéos,',
          'et surtout : des exercices pour réapprendre la solitude positive',
        ]},

        { type: 'h2', text: 'La mise en action' },
        {
          type: 'p',
          text: 'J’ai alors commencé à pratiquer, un peu bêtement, un peu bancal, en copiant ce qu’il faisait et en essayant de comprendre comment y trouver du plaisir, seule. Parfois, c’était vraiment de ma propre initiative. Je voulais vraiment le faire et guérir. Et parfois, c’était pour cacher une envie de vengeance. Comme pour lui dire silencieusement : “Tu vois, moi aussi je peux le faire. Moi aussi je peux vivre sans toi, tu ne m’es pas indispensable !”'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Donc j’ai commencé des petites actions. Des choses qui sont censées être simples mais qui, à l’époque, étaient un pas immensément grand vers une indépendance que je n’assumais encore pas du tout.' },
            { type: 'br' },
            { type: 'text', text: 'J’ai testé : ' },
          ],
        },
        { type: 'ul', items: [
          'aller au cinéma toute seule, souvent pour aller voir un film que lui ne voulait pas et dont je me serais privée d’aller voir sans sa présence.',
          'aller me promener et faire les boutiques en ville seule, et en profiter pour faire celles qu’il ne voulait pas trop faire ou démonter un gros gâteau en solo car il n’est pas très sucré (le bougre).',
          'regarder mes propres séries et mes propres films alors qu’il passait sa soirée dans la chambre en train de jouer.',
          'faire mes premières soirées entre amis sans lui.',
        ]},
        {
          type: 'p',
          text: 'Et bien sûr, le plus important et la plus grosse part du travail : passer des nuits sans lui.'
        },
        {
          type: 'p',
          text: 'La première fois, 1 nuit seule : blanche, évidemment. Nausées, estomac noué, pleurs et angoisses. Je n’ai pas fermé l\'œil une seule seconde. J’étais terrifié à un point que je ne sois pas sorti du lit de toute la nuit.'
        },
        {
          type: 'p',
          text: 'La deuxième fois, 2 nuits : j’ai réussi à dormir quelques heures d’épuisement, et les symptômes ont perdu 10% d’intensité.'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Et ce travail a duré comme ça pendant environ 1 an. ' },
            { type: 'br' },
            { type: 'text', text: 'Au début, j’avais l’impression de m’infliger une torture. Puis j’ai compris que c’était un entraînement. Comme apprendre à courir quand on déteste le sport : chiant au début, salvateur après.' },
          ],
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Heureusement, à force de discussions, d’échanges et d’explications posés et calmes, mon compagnon a fini par comprendre et a adopté un comportement exemplaire. Nous nous sommes mis en mode “Coop”, comme de vrais collègues d’armée, et on y est allé petit à petit pour m’aider à surpasser tout ça. Une nuit par-ci, deux ou trois par-là… ' },
            { type: 'br' },
            { type: 'text', text: 'A force, j’ai commencé à prendre mes marques, mes repères, mes habitudes. J’ai recommencé à vivre, à prendre ma vie en main, et au bout de plusieurs années, je peux enfin dire qu’aujourd’hui, contre toute attente, ' },
            { type: 'strong', text: 'j’y suis arrivé.' },
          ],
        },

        { type: 'h2', text: 'Ce que j’ai appris (et que j’aurais aimé savoir avant)' },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Être collée 24h/24 à quelqu’un, ce n’est pas de l’amour, c’est de l’angoisse maquillée.' },
            { type: 'br' },
            { type: 'br' },
            { type: 'text', text: 'Avoir une vie perso, des passions, des moments à soi, ce n’est pas un manque d’amour, c’est une respiration.' },
            { type: 'br' },
            { type: 'br' },
          ],
        },
        {
          type: 'quote',
          text: 'La solitude, ce n’est pas un vide. C’est un espace où tu te retrouves vraiment toi.'
        },
        {
          type: 'p',
          text: 'Aujourd’hui, j’ai encore des moments de rechute parfois. Des vieux démons qui me chuchotent à l’oreille “regarde, il part sans toi.” Mais maintenant, je sais les faire taire. Parce que j’ai appris que mon couple ne définit pas toute ma vie.'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Non pas que je sois à 100% guérie. Car son départ au Dakar pour 1 mois entier l’hiver dernier n’a pas été une partie de plaisir quotidienne.' },
            { type: 'br' },
            { type: 'text', text: 'Mais quand je vois de là où je pars, je peux dire que je suis fière d’en être là aujourd’hui.' },
          ],
        },
        {
          type: 'p',
          text: 'Sortir seule, faire des soirées sans lui, dormir seule chez moi, n’est plus un problème fondamental. J’ai même réussi à y ressentir une forme de plaisir, de paix dans ma solitude, voire même d’envie d’être vraiment seule parfois.'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'em', text: '“Je sors avec les potes demain soir”' },
            { type: 'text', text: ', et m’entendre dire dans ma tête ' },
            { type: 'em', text: '“Yes ! Pizza et Orgueil et préjugés en tête à tête avec mon verre de vin”' },
            { type: 'text', text: ', est et restera le plus grand cheminement que j’aurais fait de toute ma vie.' },
          ],
        },

        { type: 'h2', text: 'Conclusion' },
        {
          type: 'p',
          text: 'La dépendance affective, c’est vicieux : on croit que c’est une preuve d’amour, alors que c’est souvent une manière de fuir son propre vide intérieur.'
        },
        {
          type: 'p',
          text: 'Alors si tu te reconnais là-dedans, sache une chose : ça se travaille. Avec soi-même, avec un professionnel, via des blogs, des podcasts ou des vidéos youtube, les supports sont infinis pour reprendre en main sa vie à soi. A toi de choisir la tienne et de mener tes propres recherches.'
        },
        {
          type: 'p',
          text: 'Parles-en à ton/ta partenaire. Explique lui, avec tes mots. “Je crois que j\'ai vraiment du mal à être seul(e), je suis peut-être dépendant(e), on peut en parler ?” '
        },
        {
          type: 'p',
          text: 'Ce n’est pas une fatalité. On peut apprendre à aimer sans se perdre, à être deux sans s’oublier, à apprécier la solitude sans la craindre.'
        },
        {
          type: 'rich-p',
          segments: [
            { type: 'text', text: 'Parce qu’au fond, la plus belle preuve d’amour, ce n’est pas de s’accrocher désespérément à l’autre.' },
            { type: 'br' },
            { type: 'text', text: 'C’est de pouvoir dire :' },
            { type: 'br' },
            { type: 'strong', text: '“Je t’aime, mais je m’aime aussi.”' },
          ],
        },
      ],
    },


    {
      id: 'a2',
      title: 'Divorcer et se reconstruire : mon histoire',
      description: 'Cet article parle de mon expérience, de mon ressenti, de mon vécu, de ma manière d’avoir fait face à la séparation. A aucun moment, je sous-entends que c’est la chose à faire, ni que c’est facile, ni que c’est la solution miracle, et encore moins qu’il "faut" se séparer ou divorcer. Chacun prend son temps, à son rythme, et surtout chacun fait comme il peut. Si cet article vous inspire, fait écho, vous motive ou vous donne de la réflexion, c’est principalement à cela qu’il sert :)',
      tags: ['divorce', 'reconstruction', 'liberté'],
      readTime: '8 min',
      createdAt: new Date('2025-08-28'),
      author: 'Elijah',
      cover: 'assets/images/articles/divorce.webp',
      links: [
        { label: 'Procédure de divorce - service-public.fr', url: 'https://www.service-public.fr/particuliers/vosdroits/F35837' },
        { label: 'France Victime', url: 'https://www.france-victimes.fr/' },
        { label: 'Association france Pères - pour le droit de garde du père', url: 'https://www.france-associations-peres.fr/' },
        { label: 'MindDay - application d\'auto-thérapie', url: 'https://www.mindday.com/' },
        { label: 'La vie en rose - podcast de développement personnel', url: 'https://open.spotify.com/show/1ntzhcuJSKtL0Ra0HWTsLr' }
      ],
      blocks: [
        { type: 'h2', text: 'Introduction' },
        { type: 'p', text: 'Ahhh… Ce moment.' },
        { type: 'p', text: 'Celui où tu réalises que ton/ta partenaire n’est plus du tout l’idéal(e) d’antan. Quand tu vois son vrai visage, autrefois masqué par la routine, par la peur de la solitude ou par des habitudes confortables. Un visage parfois agressif, sournois, écœurant. Et cet instant complètement dingue où tu te dis : ' },
        { type: 'quote', text: 'Mais… c’est avec quelqu’un comme ça que je vis depuis tout ce temps ?' },
        { type: 'p', text: 'Parfois, ce déclic arrive en pleine relation. On se leurre encore, on s’accroche, on essaye d’arranger les choses pour éviter d’être seul(e). Mais souvent, il explose vraiment au moment où le couple prend fin. Et là, en une seconde, la personne qu’on croyait connaître change de regard, de posture, comme si on avait en face de soi un étranger.' },

        { type: 'h2', text: 'Le “gant de cuisine” de Kyan Kojandi' },
        { type: 'p', text: 'L’humoriste Kyan Kojandi a une image que j’adore dans Bref. Il explique qu’on sait qu’on n’est plus attiré par quelqu’un quand sa main posée sur notre jambe nous fait l’effet… d’un gant de cuisine.' },
        { type: 'p', text: 'Ça m’a beaucoup fait rire, parce que c’est exactement ça.' },
        { type: 'p', text: 'Il y a ce petit moment, presque semblable au dégoût, où le contact de l’autre devient carrément malaisant. Pas juste un instant où “tout nous saoule” (même sa respiration), non. Un vrai déclic, définitif, irréversible.' },
        { type: 'p', text: 'Alors évidemment, on essaye parfois d’arranger les choses. Certains couples se lancent dans des pratiques sexuelles inédites, testent l’échangisme, ouvrent leur couple… Dans l’idée de mettre du piment. Et pour certains, ça marche — tant mieux pour eux ! Mais pour beaucoup, ça ne fait que précipiter la fin.' },
        { type: 'p', text: 'D’autres choisissent des solutions plus radicales : se marier, avoir un enfant “pour relancer l’histoire”. Mais quand un couple va mal, prendre de tels engagements ne guérit rien. C’est comme coller un pansement Mickey sur une plaie ouverte. Ça cache, ça soulage un peu, mais tôt ou tard, il faut suturer. Et ça fait mal, oui. Mais sinon, l’infection s’étend. Jusqu’à contaminer le mental, le cœur, la confiance.' },

        { type: 'h2', text: 'Mon mariage : une belle histoire qui s’est brisée' },
        { type: 'p', text: 'Je me suis mariée jeune. Très jeune même : à 21 ans. Mais après cinq ans d’amour adolescent, on avait envie de franchir le pas. Et franchement ? Je ne regrette rien. Ce fut une journée magique, pleine d’amour et d’insouciance. À ce moment-là, je n’imaginais pas une seconde que cette histoire puisse un jour se briser.' },
        { type: 'p', text: 'Avec mon ex, on s’était connus adolescents : 16 ans et 15 ans. On a grandi ensemble, on a découvert la vie côte à côte, on s’est forgé avec nos bonnes et nos mauvaises habitudes. Pendant dix ans, il a été mon quotidien, mon repère.' },
        { type: 'p', text: 'Mais en arrivant à Toulouse pour changer de vie, mon ex-mari s’est lancé à corps perdu dans son boulot. 80 % de son temps passait dans son entreprise. Pas de vacances, pas de congés, même ses repos finissaient derrière son ordinateur.' },
        { type: 'p', text: 'Moi, j’essayais de me réinventer, de trouver ma voie. J’ai entrepris de reprendre mes études, j’étais en pleine préparation d’examen d’entrée.' },
        { type: 'p', text: 'Petit à petit, j’ai vu notre couple passer au second plan. Lui avait ses ambitions, j’avais les miennes, et elles n’étaient pas du tout compatibles. On s’éloignait doucement, presque sans s’en rendre compte. On avançait, mais pas dans la même direction. Et cette fissure a commencé à tout engloutir.' },
        { type: 'p', text: 'Cette distance a ouvert la porte à d’autres remises en question, bien plus intimes. Le genre de réflexions qui minent un couple sans qu’on en parle vraiment. On n’était plus un couple, on était dépendant affectivement, on était habitué à être ensemble.' },
        { type: 'p', text: 'Pendant presque un an, ça a couvé, jusqu’à ce fameux soir.' },

        { type: 'h2', text: 'Le déclic : un bar, une pinte, et un silence lourd' },
        { type: 'p', text: 'Je m’en souviens comme si c’était hier. On était au bar, deux mois s’étaient écoulés sans aucune sortie ensemble. Devant nous, une pinte de bière et une assiette de tapas. Il me parlait — encore — de son travail. Et moi ? Je décroche. Je regarde les lumières de la ville, les passants, les terrasses animées.' },
        { type: 'p', text: 'Puis il y a eu cette phrase, ce moment suspendu. Je me rappelle exactement de ce qu’il a dit et de la teneur de ses propos, lourd de sens. On s’est regardés. Longtemps. Avec ce silence aussi lourd qu’un carton de déménagement rempli de bouquins.' },
        { type: 'p', text: 'On sortait d’un énième break de deux semaines, soi-disant pour “voir si l’on se manquait”. La vérité ? Lui avait bossé encore plus. Et moi, j’avais commencé à me rapprocher de quelqu’un d’autre.' },
        { type: 'p', text: 'Et c’est tombé, sans violence, sans cris : ' },
        { type: 'quote', text: 'Je crois qu’on est d’accord tous les deux pour dire qu’on va divorcer ?' },

        { type: 'h2', text: 'Le premier souffle de liberté (et la gifle de l’après)' },
        { type: 'p', text: 'Cette nuit-là, je n’ai pas dormi chez nous. Impossible. L’idée de rentrer dans cet appartement partagé me semblait insupportable et déplacée. Je suis allée dormir ailleurs — enfin, “dormir” est un grand mot. Disons plutôt : fumer des clopes et boire des bières, incapable de fermer l’œil de la nuit, en repassant la scène encore et encore.' },
        { type: 'p', text: 'Et là, j’ai ressenti quelque chose de fou. ' },
        { type: 'quote', text: 'Je viens vraiment de le faire ?' },
        { type: 'p', text: 'Un poids est tombé de mes épaules. Une sensation de liberté pure. Comme si j’avais enfin ouvert une cage dont je détenais moi-même la clé depuis longtemps et dont j’avais moi-même forgé les barreaux. J’ai pleuré, mais pas de tristesse. De soulagement.' },
        { type: 'p', text: 'Sauf qu’après cette respiration, la réalité m’a rattrapée, et une question glaçante a suivi : ' },
        { type: 'quote', text: 'Et maintenant… je fais quoi ?' },
        { type: 'p', text: 'Parce que bon, spoiler alert : quand on est mariée, qu’on a tout laissé au nom de son conjoint, qu’on n’a pas de boulot ni d’économies, que l’on n’a pas passé 1 nuit seule depuis des années… L’après n’est pas joli-joli.' },

        { type: 'h2', text: 'Quand tout s’écroule (et qu’il faut tout reconstruire)' },
        { type: 'p', text: 'J’avais 25 ans, mariée, sans travail, sans économies. Et surtout : naïve au point d’avoir tout laissé au nom de mon ex tout au long de ces années. L’appart, la voiture, les comptes. Résultat ? Plus rien.' },
        { type: 'p', text: 'Je me suis retrouvée sans domicile, sans travail, sans bagnole, avec 800 € de chômage pour tenir et la moitié des meubles de l’appart (régime de la communauté t’y as vu).' },
        { type: 'p', text: 'Ma “maison” ? Un sac à dos avec quelques affaires. Tout mon monde réduit à un sac de survie que je trimballais partout.' },
        { type: 'p', text: 'Je pourrais faire une liste des galères, mais elle est longue :' },
        { type: 'ul', items: [
          'les soirs où je me couchais avec la faim au ventre par manque de moyens,',
          'les semaines à alterner entre des canapés d’amis et le week-end chez ma mère,',
          'les kilomètres à marcher chaque jour faute d’argent pour les transports,',
          'les heures passées au McDo pour profiter du wifi avec un expresso à 1€,',
          'les appels menaçants de mon ex, qui montrait son vrai visage,',
          'les enchaînements des rendez-vous chez l’avocate.'
        ]},
        { type: 'p', text: 'À côté de ça, j’avais connu les hôtels de luxe, les restos, le confort matériel… Mais là, avec rien, je me sentais étrangement plus libre. Parce que pour la première fois, je faisais des choix pour moi.' },

        { type: 'h2', text: 'Le quotidien de la survie' },
        { type: 'p', text: 'Et pourtant, malgré la fatigue, malgré la peur, j’avais le sourire. Parce que cette liberté-là, personne ne pouvait me la reprendre.' },
        { type: 'p', text: 'Petit à petit, j’ai trouvé des solutions.' },
        { type: 'p', text: 'La procédure de divorce était lancée. J’allais enfin briser cette chaîne et j’avais une super avocate, humaine et disponible. Maintenant, il fallait que je me batte et que je mette les bouchées doubles.' },
        { type: 'p', text: 'Après deux mois de recherches intensives et de nombreux refus, un propriétaire bienveillant a accepté de me louer un studio alors que j’étais au chômage (je le remercierai toute ma vie). Les aides sociales m’ont permis de tenir un peu la tête hors de l’eau. J’avais un toit, ouf. Bon, j’avais 2 meubles et 3 sacs de linge. Ok, on va chiner, on va troquer, on va faire les poubelles pour trouver des pépites.' },
        { type: 'quote', text: 'Le logement ? Check !' },
        { type: 'p', text: 'J’ai envoyé 150 candidatures. Toutes refusées à cause d’un “trou dans le CV” dû à la tentative de reprise d’études et au divorce. Il me restait 20 jours de droits à Pôle emploi, le stress commençait à monter violemment. Mais j’ai fini par décrocher un job en mise en rayon. C’était sous payé, pas dingue, pas épanouissant et assez ingrat. Mais je le faisais pour moi.' },
        { type: 'quote', text: 'Le travail ? Check !' },
        { type: 'p', text: 'Sauf que cet emploi, il était loin ! Il me fallait une voiture… J’ai rassemblé mes premiers sous, demandé une avance à la famille, et pour 1000€ j’ai eu ma première voiture à mon nom. Une Twingo de première génération, couleur jaune caca d’oie qui fuyait du plafond quand il pleuvait. Mais ça y est, j’étais autonome.' },
        { type: 'quote', text: 'La voiture ? Check !' },
        { type: 'p', text: 'Je poussais des palettes de 100 kilos, je bossais dans la poussière et faisais pleins d’heures supplémentaires pour me refaire comme je pouvais, 6 jours sur 7. Je rentrais brisée, dans mon tout petit studio avec mon voisin qui tapait au mur dès que j’allumais la télé. Mais chaque euro gagné était une victoire. Une preuve que je pouvais m’en sortir seule. J’ai économisé, et au bout d’un an de galère, j’ai signé officiellement mon divorce, et j’ai emménagé dans un joli appartement avec mon conjoint.' },
        { type: 'p', text: 'J’ai appris à réorganiser ma vie comme moi je voulais, et non plus en fonction de ce qui était bon pour mon ex-mari. Désormais, c’est moi qui décide. C’est moi qui choisis. Et ça, ça n’a pas de prix.' },

        { type: 'h2', text: 'Le deuil de l’ancienne vie' },
        { type: 'p', text: 'Entre la survie au quotidien et la reconstruction, il y a un passage que l’on oublie souvent : celui du deuil.' },
        { type: 'p', text: 'Pas seulement le deuil d’un mariage ou d’un partenaire. Mais le deuil d’une vie entière.' },
        { type: 'p', text: 'La vie où l’on avait l’habitude de dire : ' },
        { type: 'ul', items: [
          '"Mon conjoint s’en chargera."' ,
          '"Il va m’aider."' ,
          '"Il paiera."' ,
          '"On. Nous."'
        ]},
        { type: 'p', text: 'Quand tout ça disparaît, on se retrouve face à une version de soi qu’on ne connaît pas encore.' },
        { type: 'p', text: 'Une version qui doit se débrouiller, qui se bat pour chaque petit pas, qui change malgré elle. Et ce changement est paradoxal : il nous renforce tout en nous faisant douter.' },
        { type: 'p', text: 'Je n’ai personnellement jamais connu ce moment où j’ai eu des doutes sur ma décision de divorcer. Ça a toujours été clair et définitif de mon côté. Mais je sais que de nombreuses personnes traversent ces réflexions, pensent encore à leur ex, rêvent de lui / elle, se demandent comment il / elle va, ce qu’ils font de leur vie. Je ne pense pas que ce soit foncièrement malsain, simplement humain. On ne peut pas tout contrôler, et il faut se laisser le temps de passer par toutes les phases pour que ces souvenirs se dissipent, sans jamais disparaître complètement.' },
        { type: 'p', text: 'On traverse alors les mêmes étapes qu’un deuil classique : le choc, le déni, la colère, la tristesse, l’acceptation. Sauf qu’ici, on ne pleure pas seulement une personne. On pleure aussi une version de soi-même qui n’existe plus.' },
        { type: 'p', text: 'Et c’est en acceptant cette mort symbolique que l’on commence vraiment à renaître.' },

        { type: 'h2', text: 'Ce que j’ai appris en tombant (et en me relevant)' },
        { type: 'p', text: 'En fait, cette période m’a appris quelque chose de fondamental : on croit qu’on est seul quand on se sépare, quand on divorce. Mais c’est faux.' },
        { type: 'p', text: 'Dans un couple qui bat de l’aile, on est déjà seul.' },
        { type: 'p', text: 'Et une fois qu’on ose partir, on découvre qu’on n’est jamais totalement isolé. Il y a toujours des ressources, des amis, de la famille, des collègues, des services sociaux, parfois même des inconnus bienveillants. Mais aussi et surtout, il y a soi.' },
        { type: 'p', text: 'La seule vraie prison, c’est la peur. La peur de l’après, de l’inconnu, de tout perdre. La peur de la solitude, de ne pas savoir s’en sortir sans quelqu’un. La peur de ne pas savoir gérer, de ne pas savoir se relever. La peur de sortir de sa zone de confort, et préférer choisir la routine quitte à être malheureux(se), que voir sa vie éclater et sauter sans filet.' },
        { type: 'p', text: 'Mais la peur, c’est une construction du cerveau. Et ce même cerveau peut apprendre à l’apaiser, avec du courage et un pas après l’autre.' },

        { type: 'h2', text: 'Conclusion' },
        { type: 'p', text: 'J’ai divorcé. J’ai tout perdu sur le plan matériel : foyer, confort, argent, sécurité. Mais j’ai gagné bien plus : ma liberté, mon indépendance, ma dignité.' },
        { type: 'p', text: 'Oui, ça fait mal. Oui, c’est effrayant. Mais laisser pourrir une relation qui nous détruit fait bien plus de dégâts que la douleur d’une rupture.' },
        { type: 'p', text: 'Faire un choix, CE choix, ce n’est pas la fin. C’est le début d’un nouveau chapitre dans le livre incroyable de sa vie. Moi, je n’avais plus envie de laisser quelqu’un d’autre me prendre le stylo des mains et écrire dans mon livre à ma place. Ecrire soi-même, c’est pas simple. Au début, on fait des ratures, c’est brouillon et on manque d\'inspiration. Mais avec un peu d\'entraînement et de patience, on devient enfin l’écrivain qu’on mérite.' },
        { type: 'p', text: 'Parce que si moi je m’en suis sortie, n’importe qui le peut aussi.' },
      ],
    },

    {
      id: 'a3',
      title: 'Mon choix de ne pas avoir d’enfant. Ma ligature des trompes.',
      description: 'Le choix de faire une ligature n’est pas à prendre à la légère. Se faire ligaturer est un acte sérieux et irréversible. C’est une décision qui doit être mûrement réfléchie, discutée avec des professionnels, et prise en toute conscience. Cet article n’est pas un manifeste “anti-enfants”, il n’a pas pour but de faire la morale, de dénigrer la parentalité. Être parent est un choix tout aussi respectable que de ne pas l’être. Chacun fait ce qu’il veut. Cet article n’est qu’un récit personnel.',
      readTime: '8 min',
      author: 'Elijah',
      tags: ['choix de vie', 'ligature', 'non-parentalité'],
      cover: 'assets/images/articles/enfant.webp',
      createdAt: new Date('2025-09-01'),
      links: [
        { label: 'Childfree - stérilisation, infos, témoignages', url: 'https://childfree.fr/' },
        { label: 'Planning familial - site officiel', url: 'https://www.planning-familial.org/' },
        { label: 'MindDay - application d\'auto-thérapie', url: 'https://www.mindday.com/' },
        { label: 'La vie en rose - podcast de développement personnel', url: 'https://open.spotify.com/show/1ntzhcuJSKtL0Ra0HWTsLr' }
      ],
      blocks: [
        { type: 'h2', text: 'Introduction' },
        { type: 'p', text: 'Du plus loin que je me souvienne, je n’ai jamais voulu avoir d’enfant. La simple idée de m’imaginer enceinte m’a toujours donné la nausée. Je ne me voyais pas enfanter, ni être mère, ni m’occuper d’un enfant. Dans mes cauchemars les plus sombres, j’avais un enfant dans le ventre que je voyais comme un alien, qui me déchirait pour sortir de là, et dont j’allais devoir m’occuper toute ma vie.' },
        { type: 'p', text: 'Je me voyais déjà avec des cernes jusqu’aux genoux, des kilos en trop, privée de voyages et des cheveux blancs à 25 ans à cause du stress. Et quand je dis que ces pensées remontent à bien avant mes 10 ans, les gens grincent des dents.' },
        { type: 'p', text: 'Pourtant, toute petite déjà, je disais à qui voulait bien l’entendre que non, je ne voulais pas d’enfant, et que je n’en aurais jamais. J’étais très bien toute seule, je voulais profiter de ma vie, faire mes propre choix pour moi-même.' },
        { type: 'p', text: 'Bien sûr, j’ai entendu les phrases classiques :' },
        { type: 'quote', text: 'Tu es encore jeune, ça va changer.' },
        { type: 'quote', text: 'Tu verras quand ton horloge biologique va se mettre en route.' },
        { type: 'p', text: 'Spoiler alert : j’ai 32 ans, et toujours rien.' },

        { type: 'h2', text: 'Pourquoi je ne veux pas d’enfant' },
        { type: 'p', text: 'Je pourrais faire simple : “Parce que je n’ai pas envie, point.” Mais on vit dans une société où dire ça ne suffit pas. Alors je précise.' },
        { type: 'p', text: 'Longtemps, j’ai eu du mal à comprendre ceux qui voulaient devenir parents. Je n’avais pas encore tout à fait le recul et la maturité (c’est un bien grand mot, mais vous avez capté l’idée) pour me pencher sur le sujet. Mais aujourd’hui, du haut de mes petits 32 ans, je peux concevoir pourquoi l’on en veut. J’ai recueilli des commentaires, des témoignages, des discussions et des débats, et je me suis fait ma propre idée.' },
        { type: 'p', text: 'Dans ses plus belles raisons, mon avis est que la parentalité représente un but. Pour soi, et / ou pour son couple. Une concrétisation magnifique de ce que l’on est capable de créer, femme ou homme évidemment - et peut-être même la raison ultime de son passage sur terre. Pour beaucoup, c’est une évidence indiscutable. On veut être parent, et on le devient. Parce que donner la vie est merveilleux. Parce que l’être humain en est capable. Parce que fonder une famille est un rêve absolu et que comme tout rêve, il est important de le concrétiser.' },
        { type: 'p', text: 'Dans un couple, plus particulièrement - qu’il soit hétéro ou homo -  je peux concevoir parfaitement aussi cette idée de mélange parfait. De voir un bébé comme la dernière pièce du puzzle de sa vie de couple. Un voyage incroyable que l’on vivra à deux.' },
        { type: 'p', text: 'Mais chez moi, cette envie n’est jamais née. Jamais.' },

        { type: 'h2', text: 'La remise en question forcée' },
        { type: 'p', text: 'Pendant longtemps, je me suis demandé si c’était moi qui avais un problème. Toutes les petites filles de primaire autour de moi jouaient à la maman et aux poupées, toutes les adolescentes du collège parlaient déjà de leur futur rôle de maman, et beaucoup de jeunes filles du lycée échangeaient sur leurs désirs de devenir mère.' },
        { type: 'p', text: 'Et moi ? Je me demandais sur quelle époque de l’histoire allait se focus le prochain Assassin’s Creed, et si je serais capable de battre mon record d’assiette la prochaine fois au buffet chinois à volonté.' },
        { type: 'p', text: 'Arrivée à l’adolescence, je me suis fixée une règle simple : “Si à 30 ans je ne veux toujours pas d’enfant, j’agirai.” Mes 30 ans sont arrivés. Et l’envie ? Toujours absente. Pire encore : plus le temps passait, plus j’étais certaine de ne pas en vouloir.' },
        { type: 'p', text: 'Les années ont filé, et toujours rien. Pire, non seulement je n’en voulais pas, mais je n’en voulais pas DU TOUT. Rien n’allait dans le sens de me faire changer d’avis.' },
        { type: 'ul', items: [
          'La situation du monde, politique et sociale ?',
          'La manière dont la planète est en train de souffrir ?',
          'Le coût que représente la charge d’un enfant ?',
          'La détresse dans les yeux de certains jeunes parents ?',
        ]},
        { type: 'p', text: 'Nop.' },
        { type: 'p', text: 'Intérieurement, toujours rien.' },
        { type: 'p', text: 'Extérieurement, encore pire.' },
        { type: 'p', text: 'Il est temps de faire quelque chose.' },

        { type: 'h2', text: 'Le parcours vers la ligature' },
        { type: 'p', segments: [ { type: 'strong', text: 'Les contraceptions, un malaise permanent' } ] },
        { type: 'p', text: 'J’ai testé plusieurs formes de contraception, mais rien ne me convenait. Je savais au fond de moi que je faisais quelque chose qui allait à l’encontre de mes convictions personnelles, donc je n’ai jamais été à l’aise à l’idée - et ce n\'est pas faute d’avoir essayé. Sans compter le budget et l’inconfort du préservatif.' },
        { type: 'p', text: 'Je savais qu’était arrivé le moment où j\'allais devoir prendre une décision définitive.' },
        { type: 'p', text: 'Alors, c’est parti pour le voyage merveilleux de la ligature ✨.' },

        { type: 'p', segments: [ { type: 'strong', text: 'Les témoignages glaçants' } ] },
        { type: 'p', text: 'J’ai d’abord entrepris la lecture d’articles, pour me renseigner sur les effets, sur le corps, sur le procédé… En gardant constamment en tête l’idée de me laisser le choix de changer d’avis à tout moment si je ressentais un quelconque changement.' },
        { type: 'p', text: 'J’ai ensuite commencé à écouter des témoignages de personnes qui ont choisi la ligature. Là, je ne vous le cache pas, je suis un peu tombé de haut. Les récits étaient tous plus hallucinants les uns que les autres.' },
        { type: 'p', text: 'Dénigrements, refus, moqueries, jugements… Autant de rendez-vous gynécologiques choquants et râtés qu’il y a de médecins sur terre. J’ai eu la nausée, en me demandant comment il était possible d’être si méchant, si arrogant, si condescendant envers les personnes qui - pour la plupart - trottent cette idée en tête depuis longtemps et sont là car elles ont eu le courage de sauter le pas.' },
        { type: 'p', text: 'Bon, j’ai décidé de ne pas rester trop concentré sur tout cela. Déjà car c’était en train de me foutre une panique bleue du cheminement jusqu’à la ligature, mais aussi car chacun vit son expérience à sa manière. J’allais tracer ma propre voie, qu’il y ait des embûches ou non. Ma décision était prise et irrévocable. Et s’il fallait affronter un nombre incalculable de gynécologues vieillots aux idées arriérées et aux commentaires border, ils allaient me recevoir ! Je n’allais pas me faire arrêter par du personnel médical blasé, non renseigné, non bienveillant, qui te pointe du doigt comme si tu étais une erreur de la nature. Et pourtant, j’ai entendu sortir de la bouche de ces femmes (cis genre) des histoires qui donnent des sueurs froides (petite pensée à Jennyfer) :' },
        { type: 'ul', items: [
          '"Une femme, ça enfante. A quoi vous allez servir du coup ?"',
          '"Vous me demandez ça et vous allez changer d’avis dans quelques mois."',
          '"Qui va s’occuper de vous quand vous serez âgée ?"',
          '"Vous vous rendez compte de ce que vous faites ? Si toutes les femmes pensaient comme vous, la race humaine s’éteindrait !"',
          '"Et votre partenaire, il est d’accord avec votre décision ?"',
          '"Vous avez déjà deux enfants ? Et alors, qui vous dit que vous n’en voudrez pas un autre bientôt ?"'
        ]},
        { type: 'p', text: 'A ma propre mère, maman de 3 enfants et avec soucis gynécologiques, lorsqu’elle a mentionné vouloir se faire ligaturer à l’époque il y a 30 ans de cela :' },
        { type: 'quote', text: 'Et si l’un de vos 3 enfants meurt ? Et si vous divorcez et que votre nouveau partenaire veut des enfants, vous allez faire comment, hein ?' },
        { type: 'p', text: 'Vomito général ! 🤢' },

        { type: 'h2', text: 'Petit rappel' },
        { type: 'p', text: 'Alors bien évidemment, pour ceux et celles qui ne l’ont pas encore compris et qui tomberait par pur hasard sur cet article, un petit résumé (personnel, certes, mais j’assume) :' },
        { type: 'ul', items: [
          'On évite de faire un enfant pour combler un vide dans sa vie',
          'On évite de faire un enfant pour faire plaisir à son / sa partenaire ou sa famille',
          'On évite de faire un enfant pour retenir son / sa partenaire',
          'On évite de faire un enfant parce que sociétalement c’est “normal”',
          'On évite de faire un enfant si on se sent pas devenir parent, ou pas prêt',
          'On évite de rajouter un enfant à la fratrie parce qu’on s’ennuie',
          'On évite de faire un enfant pour qu’ils s’occupent de nous et nous changent les couches quand on sera vieux et gâteux (à part leur gâcher la vie, ça ne leur apportera rien. Fort heureusement, du personnel médical est payé pour s’occuper de ça).'
        ]},
        { type: 'p', text: 'Un enfant, ce n’est pas une béquille. Ni une assurance-vie. C’est une personne.' },

        { type: 'h2', text: 'Comment ça s’est passé pour moi' },
        { type: 'p', segments: [ { type: 'strong', text: 'Etape 1 - La prise de rendez-vous' } ] },
        { type: 'p', text: 'Grâce à mon beau-frère chirurgien, j’ai eu la chance d’avoir affaire à un (et un seul) gynécologue. Très certainement dû à ce lien amical, ce médecin a été gentil. Et vu le genre de témoignages que j’ai reçus plus haut, vous vous doutez bien que j’ai été très, très chanceuse.' },
        { type: 'p', text: 'Je n’ai pas eu de commentaires foncièrement déplacés ou méchants. Juste des questions, privées et personnelles mais qui font partie du protocole. J’étais au courant, et je n’ai rien à cacher.' },
        { type: 'p', text: 'Il m’a mis en garde sur l’évidente irréversibilité de cet acte :' },
        { type: 'ul', items: [
          'Oui, cette intervention rend stérile.',
          'Non, il n’est logiquement pas possible de revenir en arrière.',
          'Oui, l’intervention, comme n’importe quelle autre, comporte des risques.'
        ]},
        { type: 'p', text: 'Ensuite, il m’a expliqué le procédé. Dans sa manière de faire (c’est peut-être différent pour d’autres chirurgiens) : en ambulatoire, anesthésie générale, une petite incision sur le côté du pubis et une autre au niveau du nombril pour la coelioscopie, 2 clips sur chacune des trompes. 15 minutes maximum. Emballé c’est pesé.' },
        { type: 'p', text: 'Il m’a aussi informé du temps de réflexion imposé par la loi, de 3 mois (si mes souvenirs sont bons. C’était il y a 3 ans, à revérifier). Ce temps est nécessaire si jamais on décide de se rétracter, de changer d’avis, ou tout simplement de bien réfléchir.' },
        { type: 'p', text: 'Franchement ? Ça me semble normal. Trois mois de réflexion pour une décision irréversible, c’est loin d’être choquant.' },
        { type: 'p', text: 'Je signe, je prends rendez-vous pour dans 3 mois. La machine est lancée.' },

        { type: 'p', segments: [ { type: 'strong', text: 'Etape 2 - L’intervention.' } ] },
        { type: 'p', text: 'Rien de bien fou, en soi. J’arrive à la clinique à jeun, petite blouse sexy avec aérations arrières, salle d’intervention digne d’un congélateur géant. On m’injecte l’anesthésie, j’ai l’impression d’avoir tiré sur un giga pétard pendant 10 secondes et hop !' },
        { type: 'p', text: 'Je me réveille, je mets du temps à émerger et à ouvrir les yeux. Mon beau-frère vient me rendre visite en salle de réveil (deux trois privilèges t’y as vu). Je lui fais un ✌️, shootée, dans le coltar, mais suffisamment consciente pour me répéter en boucle :' },
        { type: 'quote', text: 'Ça y est, je l’ai fait.' },
        { type: 'p', text: 'Au bout d’une heure environ, le brancardier vient me chercher pour me remonter dans la chambre. J’émerge. On m’apporte un succulent petit raffraîchissement à base de biscotte, de confiture, d’un yaourt et d’un café. A ce moment-là, c’est digne d’un 4 étoiles.' },
        { type: 'p', text: 'Aller, on rentre à la maison.' },

        { type: 'p', segments: [ { type: 'strong', text: 'Etape 3 - L’après' } ] },
        { type: 'p', text: 'Comme toute intervention, l’après n’est jamais très rigolo. J’ai fait du lit au canapé, du canapé au lit pendant 1 semaine. Les douleurs n’étaient pas insurmontables, pas très faciles à vivre non plus. Je dirais : 6/10.' },
        { type: 'p', text: 'J’étais fière - je suis fière. De ne pas avoir eu peur, d’avoir suivi mes convictions jusqu’au bout. D’avoir sauté le pas. D’être enfin libérée de cette angoisse permanente, cette phobie du déni de grossesse, cette paralysie à chaque retard de règles. Tout cela, c’est derrière moi maintenant.' },

        { type: 'h2', text: 'La discussion avec mon partenaire' },
        { type: 'p', text: 'Évidemment, cette décision, je ne l’ai pas prise sans en parler à mon conjoint actuel. Pas pour “lui demander la permission”, ni son accord et encore moins son avis, mais parce qu’on construit une vie à deux depuis des années, et que ça mérite d’être discuté.' },
        { type: 'p', text: 'On en a parlé pendant des mois, de nombreux soirs. Pour l’instant, il ne veut pas d’enfant non plus. Mais il ne peut pas jurer que ça ne changera jamais. Et moi, je ne changerais jamais d’avis et ne reviendrais jamais sur ma décision (trop tard, de toute manière ^^).' },
        { type: 'p', text: 'Nous sommes tombés tous les deux sur le même constat :' },
        { type: 'p', text: 'Est-ce qu’il va m’empêcher de suivre mon cheminement ? Bien sûr que non.' },
        { type: 'p', text: 'Est-ce que je vais le forcer à ne pas avoir d’enfant car je ne peux plus en faire ? Bien sûr que non.' },
        { type: 'p', text: 'Alors ?' },
        { type: 'p', text: 'Eh bien, on verra sur le moment !' },
        { type: 'p', text: 'Peut-être qu’un jour nos chemins se sépareront si son désir d’enfant devient trop fort. Bien sûr que c’est étrange, bien sûr que c’est bizarre de penser ainsi. Mais jamais je ne l’empêcherai de devenir père si c’est son souhait, comme jamais je ne me serais forcé à devenir mère pour lui faire plaisir.' },
        { type: 'p', text: 'Oui, une séparation sera douloureuse. Mais au moins, ce sera honnête. Je préfère mille fois une séparation sincère qu’une vie de mensonge ou de frustration.' },

        { type: 'h2', text: 'Conclusion' },
        { type: 'p', text: 'La société attend encore beaucoup des femmes qu’elles soient mères. C’est toujours vu comme une norme, une évidence.' },
        { type: 'p', text: 'Mais moi, comme beaucoup d’autres aujourd’hui, j’ai choisi autrement. J’ai choisi de rester fidèle à ce que je ressens depuis toujours : je ne veux pas d’enfant.' },
        { type: 'p', text: 'La ligature n’est pas une décision prise à la légère. C’est une opération irréversible. Mais pour moi, c’était une libération.' },
        { type: 'p', text: 'Et si un jour, quelqu’un me demande encore :' },
        { type: 'quote', text: 'Tu ne regrettes pas ?' },
        { type: 'p', text: 'Je répondrai simplement :' },
        { type: 'quote', text: 'Non. Parce que la seule vie que je veux élever, c’est la mienne.' }
      ]
    },

    {
      id: 'a4',
      title: 'La pression de devoir trouver un but dans sa vie, ou une passion',
      description: 'A la différence des autres articles, qui étaient principalement des témoignages perso de mon propre vécu, celui-là est un peu plus basé sur des idées, des interrogations et des pistes de réflexion. Comme un gros sujet actuel et important que j’ai secoué comme un barman avec un shaker. Le but de cet article est de vous aider à penser, à vous questionner sur ces idées en les transposant à votre vie personnelle, à pratiquer l’introspection et la prise de recul.',
      tags: ['réflexion', 'but', 'passion', 'société'],
      author: 'Elijah',
      readTime: '12 min',
      cover: 'assets/images/articles/but.webp',
      createdAt: new Date('2025-09-20'),
      links: [
        { label: 'MindDay - application d\'auto-thérapie', url: 'https://www.mindday.com/' },
        { label: 'EuroNews - Article sur "l\'angoisse du sens de la vie"', url: 'https://fr.euronews.com/sante/2025/08/07/les-experts-expliquent-langoisse-du-sens-de-la-vie-et-comment-la-soulager' },
        { label: 'Podcast "Métamorphose" - Le philosophe Bertrand Vergely sur le sens de la vie', url: 'https://www.metamorphosepodcast.com/podcast/notre-vie-a-un-sens-avec-le-philosophe-bertrand-vergely-535?utm_source=chatgpt.com' },
        { label: 'L’art subtil de s’en foutre - Mark Manson', url: 'https://www.librairiesindependantes.com/product/9782212567595/' }
      ],
      blocks: [
        
        { type: 'h2', text: 'La pression de devoir trouver un but dans sa vie, ou une passion' },

        { type: 'p', text: 'On ne s’en fout pas un peu, dans le fond ?' },
        { type: 'p', text: 'Ah merde, je crois que c’était la phrase de fin ça.' },
        { type: 'p', text: 'Reprenons.' },

        { type: 'p', text: 'J’ai l’impression que, depuis toujours, j’entends les gens parler de passion, de but dans la vie. Comme si c’était la grande obligation de notre passage sur terre, ce culte de la "réussite" et de la "passion" qu’on voit partout.' },
        { type: 'p', text: 'Comme si le fait de simplement exister n’était pas suffisant. Que c’était un gâchis de ne pas user de son temps pour s’adonner à une discipline passionnante.' },

        { type: 'p', text: 'La pression sociale que ça engendre, comme si le fait de ne pas avoir de passion, de but dans la vie (ou de juste ne pas encore l’avoir trouvé, ou d’avoir changé d’avis en cours de route), était un échec total.' },

        { type: 'p', text: 'J’ai beaucoup réfléchi à la question, aussi parce qu’elle m’obsède depuis que je suis toute petite. Et je vais essayer, au fil de cet article, d’apporter des pistes de réflexion pour, pourquoi pas, réussir à se détacher de cette image qu’être dans le flou, ne pas avoir de but précis, ne fait pas de nous des gens bizarres ou paumés.' },

        { type: 'h2', text: 'Mêler but et passion' },

        { type: 'p', text: 'J’ai décidé de faire corréler but et passion dans cet article. Car chaque réflexion faite sur un sujet m’amenait directement à l’autre, et inversement.' },
        { type: 'p', text: 'Est-ce que le but d’une vie est de vivre de sa passion ? Ou est-ce simplement de vivre heureux ? Mais avoir une passion nous rend heureux…' },
        { type: 'p', text: 'Bref, un méli mélo de pensées, que j’ai essayé de détailler au mieux.' },

        { type: 'h3', text: 'Cultivez votre bizarrerie' },

        { type: 'p', text: 'A ma dernière séance chez le psychologue, je lui expliquais avoir le sentiment que plusieurs de mes actions me rendaient hautaine. Que beaucoup de mes remarques et de mes réflexions allaient à contre-courant des attentes sociétales de réussites absolues et que le fait d’en parler ou de juste l’assumer me mettait souvent à l’écart, ou provoquait des regards de travers et des haussements de sourcils.' },

        { type: 'p', text: 'Ce n’est pas rare que l’on se questionne tout au long de sa vie :' },

        { type: 'ul', items: [
          '"Je ne crois pas avoir envie de trouver un travail tout de suite, je vais peut-être rester un peu au chômage et me concentrer sur moi."',
          '“Je n’ai plus envie de continuer mes études. Je vais peut-être regretter plus tard, mais je ne me sens plus aligné avec ce choix.”',
          '“Je vais quitter mon CDI. Non, je n’ai pas vraiment de plan derrière mais on verra bien. J’en ai marre d’être dans cette entreprise.”',
          '“Je n’arrive pas à savoir qui je suis, et je passe plusieurs heures par jour à essayer de me connaître.”'
        ]},

        { type: 'p', text: 'Mais ces phrases sont souvent suivies de jugements, même dissimulés.' },

        { type: 'ul', items: [
          '“Tu vas quitter ton CDI ? Mais comment tu vas faire ?”',
          '“Tu arrêtes tes études maintenant ? Mais tu vas galérer hein, tu veux finir au McDo ?”',
          '“Ça va, la vie, tranquille ? Tu passes la journée à bidouiller des petits trucs mais tu ne fais rien de ta vie en fait ?”'
        ]},

        { type: 'p', text: 'Quand j’ai expliqué tout cela, mon psy m’a répondu :' },

        { type: 'quote', text: 'Votre façon de penser c’est ce qui vous différencie des autres. En vous jugeant, c’est leurs propres peurs et leurs propres insécurités qu’ils mettent en avant car, dans le fond, peut-être qu’ils sont jaloux ? Qui sait ? Peut-être qu’eux aussi aimeraient avoir le courage de quitter leur CDI, de rester quelque temps au chômage pour penser à rien, de fuir des études qu’ils n’aiment plus. Si ça se trouve, penser comme vous, et vous laisser autant de possibilités sans but précis, c’est peut-être vous la chanceuse dans tout ça ? Cultivez votre bizarrerie, votre manière de penser si différente de la norme, car c’est elle qui vous rend lucide.' },

        { type: 'h2', text: 'Pour moi personnellement' },

        { type: 'p', text: 'Je sais que pour mon conjoint, son but dans la vie c’est d’acheter une maison isolée au fin fond de la forêt, avec un énorme terrain, quelques animaux, et surtout un immense garage pour faire tous ses trucs. Il a ce but depuis tout petit, et il met tout en place dans sa vie pour qu’il se réalise, et quand on lui demande : “Tu te vois où dans 10 ans ?” ou bien “C’est quoi ta vie de rêve ?”, il répond sans hésiter qu’il serait dans cette maison.' },

        { type: 'p', text: 'J’avoue que son but a raisonné chez moi, et j’ai commencé à le partager un peu. Dans ses paroles, je me suis imaginée avec mon plaid, mon livre, les pieds sur une souche et un café chaud dans les mains en train de regarder les feuilles tomber et mon homme couper du bois.' },
        { type: 'p', text: 'Non mais, je signe où ?' },

        { type: 'p', text: 'Mais avant lui ? Aucune idée.' },
        { type: 'p', text: 'Est-ce que j’avais un but précis de vie avant de partager celui de mon conjoint ?' },
        { type: 'p', text: 'Non.' },
        { type: 'p', text: 'Est-ce que j’en ai quelque chose à faire ?' },
        { type: 'p', text: 'Non plus.' },

        { type: 'p', text: 'Je m’en fous de ce que les gens pensent, de ce qu’ils disent, ou de leur manière de venir donner leur avis (que je n’ai pas demandé d’ailleurs) :' },

        { type: 'quote', text: 'Tu dis que c’est ton but mais ce n’est pas vrai en fait, ce n’est pas le tien. Tu t’es juste fait influencer par lui.' },

        { type: 'p', text: 'Ok, Karen. Si pour toi, se faire inspirer par une personne inspirante c’est de l’influence, et bah tant mieux pour toi.' },
        { type: 'p', text: 'D’accord, peut-être que si on se sépare mon conjoint et moi, je n’aurai plus le même but que maintenant. Et après ? Est-ce que ça fait de moi une ratée, parce que je ne sais pas clairement ce que je veux faire de ma vie ?' },

        { type: 'h2', text: 'Buts et mini-buts' },

        { type: 'p', text: 'On associe souvent passion et but, comme si l’un devait découler de l’autre. Par exemple : je suis super doué dans mes cours de théâtre et j’adore ça, donc je dois devenir acteur !' },
        { type: 'p', text: 'Ou encore : je suis grave bon en musique, il faut absolument que je monte un groupe et fasse de grands concerts.' },
        { type: 'p', text: 'Pourtant, les buts peuvent être infiniment plus simples que ce qu’on imagine.' },

        { 
          type: 'quote', 
          text: `Me lever tous les matins.”
          “Être heureux.”
          “Voyager et voir le monde.”
          “Bien vieillir.”
          “M’occuper des autres.` 
        },

        { type: 'p', text: 'Ça paraît basique ? Peut-être. Mais ce sont des buts en soi. Et parfois, ça suffit largement.' },
        { type: 'p', text: 'Pourquoi a-t-on fini par penser que ne pas avoir de but clair et important dans la vie n’était pas une bonne chose ? Et puis, dans le fond, ce qui est important pour les autres n’a peut-être pas la même valeur à nos yeux. Et c’est tant mieux.' },

        { type: 'h2', text: 'Je n’ai pas trop de passion' },

        { type: 'p', text: 'On dit que pour connaître sa passion, il faut se demander : “Qu’est ce que je serais capable de faire tous les jours avec envie et plaisir, et ce, même sans être payé ?”' },

        { type: 'p', text: 'Cuisiner ? Lire ? Se promener ? Faire du sport ? Peindre ? Réparer des ordinateurs ? Regarder des documentaires sur la reproduction des écrevisses ?' },

        { type: 'p', text: 'Et si, honnêtement, ta passion c’était de passer des heures à flâner dans les allées d’un supermarché, à observer les rayons, les packagings, les nouveaux produits, à t’inspirer de tout ça pour inventer des recettes ? Ça compte ou pas ?' },

        { type: 'h3', text: 'Passion => Inspiration ?' },

        { type: 'p', text: 'L’idée reçue, c’est qu’une passion doit être noble, productive, ou socialement valorisée.' },
        { type: 'p', text: 'En vrai ? Non.' },
        { type: 'p', text: 'Mais c\'est à cause de cette notion qu\'on doute, qu\'on peut ressentir cette pression. Avoir une passion, ce n\'est pas forcément savoir faire d’un instrument de musique comme un dieu. Et avoir un but dans la vie, ce n\'est pas obligatoirement faire un doctorat dans une matière prisée.' },
        
        {
          type: 'p',
          text: 'Allons plus loin encore.',
          underline: true
        },

        { type: 'p', text: 'L’idée que sa passion est quelque chose, un domaine, une discipline, dans laquelle nous sommes doués est fausse.' },
        { type: 'p', text: 'Avoir une passion, ce n’est pas avoir du talent. On peut être passionné par la peinture, s’essayer sur une toile, se rendre compte que l’on a peu de talent*. Est-ce une raison pour arrêter ? Pour se dire :' },

        { type: 'quote', text: 'Non, ce n’est pas ma passion, je ne suis pas assez doué dans cette discipline pour que ça le soit.' },
        { type: 'p', text: 'Ou encore :' },
        { type: 'quote', text: 'Je n’ai pas de but dans la vie, car je n’ai du talent dans rien.' },

        { type: 'h3', text: '*Qu’est ce que le talent ?' },
        { type: 'p', text: 'Le talent, c’est relatif. Et se demander si l’on en a ou pas, c’est souvent une histoire de comparaison entre ce que l’on fait, et ce que les autres font. Et se comparer, c’est le meilleur moyen de se convaincre qu’on n’est “pas assez”. Alors qu’une passion, par définition, c’est intime. Elle n’a pas besoin d’être validée par les autres. A partir du moment où ça résonne, c’est une passion.' },
        { type: 'p', text: 'Tu peux être passionné·e par la peinture et avoir zéro coup de pinceau. Tu peux adorer écrire des poèmes sur une marguerite qui ferait lever les yeux au ciel à Victor Hugo, et pourtant… si ça te fait vibrer, c’est une passion.' },

        { type: 'h2', text: 'Moi, ma passion, c’est d’écrire (et de lire, aussi)' },

        { type: 'p', text: 'C’est la seule et unique chose que je pourrais faire pendant des heures, avec plaisir, et sans être payé 1€ pour le faire.' },
        { type: 'p', text: 'En créant ce blog (après des années de réflexion), j’ai fait le choix de passer du temps sur cette passion. Ça me nourrit, ça me stimule, j’adore ça. Pourtant, je n’ai aucun but !' },
        { type: 'p', text: 'Si j’ai 1 lecteur qui lit mes articles, c’est gagné pour moi ! Et si je n’ai personne, c’est bien aussi.' },
        { type: 'p', text: 'Est-ce qu’il y a des ratures dans mes textes ? Bien sûr. Est-ce que c’est bien écrit, est-ce que ça parle aux gens ? Peut-être, peut-être pas. Est-ce que je vais arrêter pour autant ? Non, parce que je le fais pour moi. Et honnêtement ? Le fait de ne pas y avoir posé de but précis m’aide à être plus légère, et simplement kiffer d’écrire mes articles sans pression !' },

        {
          type: 'p',
          text: 'Piste de réflexion :',
          underline: true
        },
        { type: 'p', text: 'Est-ce qu’avoir un but trop précis dans sa vie nous met une forme de pression ?' },

        { type: 'h2', text: 'Les phrases toutes faites à la con' },

        { type: 'p', text: 'Ah, les fameuses citations Pinterest :' },
        { 
          type: 'quote', 
          text: `Trouve ta passion et tu ne travailleras jamais de ta vie.”
          “Poursuis ton but, et ta vie sera comblée.`
        },

        { type: 'p', text: 'Ça sonne bien, hein ? Sauf que si tu es encore dans le flou, tu as juste envie de gifler la personne qui te sort ça. Pas parce qu’ils ont tort, mais parce que c’est facile à dire pour ceux qui ont déjà trouvé leur “truc”.' },

        { type: 'p', text: 'Et puis, c’est quoi ce fatalisme à deux balles ? Ça veut dire que pour toucher une forme de bonheur, il faut travailler de sa passion ?' },
        { type: 'p', text: 'Et si ma passion c’est de passer des heures dehors à ramasser des cailloux rigolos ? Si le but de ma vie c\'est de faire rire les gens dans la rue ?' },
        { type: 'p', text: 'J’explique comment à mon banquier que oui, je suis encore dans le rouge mais, vous comprenez, je vis de ma passion.' },
        { type: 'p', text: 'Phrase absurde = réponse absurde.' },

        { type: 'h2', text: 'La pression sociale 2.0' },

        { type: 'p', text: 'Avant, c’était la famille, l’école, les proches qui mettaient la pression : “Tu veux faire quoi plus tard ?”' },
        { type: 'p', text: 'Aujourd’hui, s’ajoutent les réseaux sociaux et les success stories.' },
        { type: 'p', text: 'Tu ouvres Instagram, et tu tombes sur des influenceurs qui te vendent du storytelling et du “purpose” en veux-tu en voilà. Histoire de bien te faire culpabiliser car toi, tu es nul(le) ty as vu, t’as pas encore compris comment “vivre de ta passion au bord de la mer et te faire 3000€ par mois en bossant 1h par jour en répondant à des mails”.' },

        { type: 'p', text: 'Chacun raconte comment il a trouvé sa mission de vie et en vit pleinement. Résultat ? Tu crois que tu es le seul à ne pas avoir trouvé ta voie, à ne pas avoir compris comment vivre heureux comme eux, alors qu’en vrai (et pour éviter de dire que c’est 100% du flan) la majorité des gens tâtonnent, explorent ou changent de cap. Ce qui te passionne aujourd’hui va peut-être passer dans 1 an, dans 10 ans, et c’est complètement ok. On a tous le droit de changer d’avis, de changer de passion et de changer de but.' },
        { type: 'p', text: 'Et encore heureux, ça s’appelle la liberté.' },

        { type: 'h2', text: 'Le quaterback qui avait un rêve secret' },

        { type: 'p', text: 'On a tous vu cette scène cliché dans les films : dans un lycée un quaterback super populaire, bourré de talent - le meilleur de son équipe - et qui fait du foot américain depuis des années.' },
        { type: 'p', text: 'Puis, au fil de l’histoire, on apprend qu’en réalité il est totalement blasé de ce sport et que ça ne le nourrit plus du tout depuis longtemps, sauf qu’il s’oblige pour les autres, leurs regards, leurs moqueries, pour l’équipe ou pour les parents. Alors qu’au fond, lui ce qu’il rêve de faire sans en parler à personne, c’est faire des petits gâteaux.' },
        { type: 'p', text: 'Comme Vladimir qui collectionne les petites licornes (si t’as cette ref, je te paye une bière).' },

        { type: 'p', text: 'Devant ce type de scène, tout le monde voudrait lui hurler d’arrêter la mascarade : “Mais fonce, mec, fais tes cupcakes !”' },

        { type: 'p', text: 'C’est pareil pour tout le monde. Si on a une passion dans la vie, ou un but, mais que nos idées ont changé en cours de route, à quel moment c’est censé être grave ?' },

        { type: 'h2', text: 'L’idée de multiplicité' },

        { type: 'p', text: 'Certaines personnes n’ont pas une passion unique, mais dix. Elles aiment écrire, dessiner, cuisiner, voyager, bricoler, jardiner, apprendre des langues… Elles s’éparpillent, elles explorent. On les appelle “multipotentielles”.' },
        { type: 'p', text: 'J’ai l’impression que même encore aujourd’hui, beaucoup de personnes continuent de voir ça comme un défaut : “Tu ne sais pas ce que tu veux, tu n’arrives pas à choisir.”' },
        { type: 'p', text: 'Ou bien on s’auto-inflige des phrases comme “je commence plein de trucs mais je n’ai pas de passion unique”. Du coup, encore une fois, on se sent parfois nul(le) de n’être soi-disant doué dans rien, ou de ne rien réussir à accomplir jusqu’à la fin.' },
        { type: 'p', text: 'Alors qu’en réalité, c’est une richesse, non ?' },

        {
          type: 'p',
          text: 'Piste de réflexion :',
          underline: true
        },
        { type: 'p', text: 'Qui a dit qu’il fallait absolument choisir une seule passion pour toute une vie ? Est-ce que ce n’est pas une manière de se mettre dans des cases ?' },

        { type: 'h2', text: 'La vie comme un chemin et pas une destination' },

        { type: 'p', text: 'On croit souvent que le but de la vie, c’est d’atteindre une forme d’accomplissement ultime : trouver sa vocation, sa passion, son objectif final. Comme une course infernale qu’on doit à tout prix terminer pour enfin trouver le bonheur ou l’accomplissement.' },
        { type: 'p', text: 'Bonjour l’anxiété.' },
        { type: 'p', text: 'Mais peut-être que le but, ce n’est pas d’arriver quelque part.' },
        { type: 'p', text: 'Peut-être que le but, c’est le chemin.' },
        { type: 'p', text: 'Apprendre, aimer, se planter, recommencer, créer des souvenirs. Changer d’avis. Changer de vie. Explorer.' },
        { type: 'p', text: 'Et si le vrai but de la vie n’était pas de “trouver sa passion”, mais juste vivre pleinement ?' },

        {
          type: 'p',
          text: 'Piste de réflexion :',
          underline: true
        },
        { type: 'p', text: 'Est-ce que le fait d’avoir un but flou ne serait pas plus sain que d’être trop ancré dans son idée ?' },

        { type: 'p', text: 'Par exemple, se dire : moi, un des buts dans ma vie, c’est d’être autonome financièrement.' },
        { type: 'p', text: 'Ça ouvre tellement de champs de possibilités, tellement de chemins. A 20 ans, ton idée pour atteindre ton but serait peut-être de monter ta société pour être ton propre patron et te faire un max de thune. Puis, à 30 ans, tu reviendrais sur ton plan et te dirais que non, être salarié dans une grande entreprise est une meilleure idée. Et puis, peut-être qu’à 50 ans tu vas finir par te dire qu’en réalité, avoir un jardin en permaculture et des récupérateurs d’eau, ça correspond plus à ton idée d’autonomie financière.' },
        { type: 'p', text: 'A l’inverse, se dire : mon but c’est de bosser dans la finance pour devenir riche.' },
        { type: 'p', text: 'Ça te laisse combien de portes de sortie ?' },
        { type: 'p', text: 'Je me questionne encore sur ça.' },

        { type: 'h2', text: 'Hey Jude' },

        { type: 'p', text: 'John Lennon l’a assez bien résumé :' },
        { type: 'quote', text: 'Quand j\'avais 5 ans, ma mère m\'a toujours dit que le bonheur était la clé de la vie. Quand je suis allé à l\'école, on m\'a demandé ce que je voulais faire quand je serais grand. J\'ai écrit \'heureux\'. On m\'a dit que je n\'avais pas compris la consigne, et je leur ai dit qu\'ils n\'avaient pas compris la vie.' },

        { type: 'p', text: 'Alors oui, vouloir être heureux peut sembler vague, flou, impalpable. Parce que le bonheur, c’est subjectif. D’ailleurs, qu’est-ce que le bonheur ?' },
        { type: 'p', text: 'Et attention, il ne faut pas non plus tomber dans une addiction au bonheur. Vouloir être heureux en permanence est illusoire. Parce que sans malheur, il n’y a pas de bonheur. Les deux se définissent ensemble.' },

        { type: 'p', text: 'Mais l’idée de cet encart est de poser une question : est-ce que vouloir être heureux n’est pas un but dans la vie ?' },
        { type: 'p', text: 'Et si c’est le cas, est-ce que nous ne sommes pas tous atteints du même but ?' },
        { type: 'p', text: 'Mais si notre but à tous est bien de vivre heureux, ne devrions-nous pas prendre toutes les différences et toutes les complexités qu’on retrouve dans chaque individu ?' },

        { type: 'h2', text: 'Le grand, le sage' },

        { type: 'p', text: 'Albert Einstein a dit :' },
        { type: 'quote', text: 'Tout le monde est un génie. Mais si vous jugez un poisson sur ses capacités à grimper à un arbre, il passera toute sa vie à croire qu\'il est stupide.' },

        {
          type: 'p',
          text: 'Piste de réflexion :',
          underline: true
        },
        { type: 'p', text: 'Si nous sommes tous différents et qu’on en a conscience, pourquoi l’on continue de se comparer ?' },

        { type: 'p', text: 'Si le but de la vie de ton frère c’est de vivre de sa passion en devenant astronaute et qu’il met tout en oeuvre pour y arriver, est-ce qu’il est dans un meilleur cheminement que toi, est-ce qu’il est plus intelligent que toi, dont le but est peut-être de courir 20 minutes par jour pour vieillir en bonne santé ou bien, passer tes meilleures soirées avec tes potes pour te créer tes meilleurs souvenirs ?' },

        { type: 'h2', text: 'Le livre qui m\'a bousculé' },

        { type: 'quote', text: 'Le discours ambiant nous pousse sans cesse à nous améliorer. Sois plus heureux. Sois en meilleure santé. Sois plus intelligent, plus rapide, plus riche, plus sexy, plus productif. Mais soyons honnêtes : parfois tout va de travers, et il faut faire avec.' },

        { type: 'p', text: 'Dans son livre "L’art subtil de s’en foutre", Mark Manson a une idée bien précise des attentes sociétales et de la manière dont nous nous angoissons à essayer d’y répondre. Je t’invite à l’envisager (je mets le lien tout en bas) si tu veux dédramatiser la situation et essayer une vision différente.' },
        { type: 'p', text: 'Évidemment, il en existe plein d\'autres. Libre à toi de tester plusieurs supports, livres ou podcasts qui abordent ce sujet. Tu verras que nous ne sommes pas seuls dans ces interrogations.' },

        { type: 'h2', text: 'Conclusion' },

        { type: 'p', text: 'Il n’y a pas de réponses claires ou toutes faites. C’est plus une question de perception (comme tout dans la vie…)' },
        { type: 'p', text: 'Et si l’on commençait à partir du principe que ne pas avoir de passion, ce n’est pas un échec.' },
        { type: 'p', text: 'Que changer de but en cours de route, ce n’est pas une faiblesse.' },
        { type: 'p', text: 'Et que de ne pas savoir répondre à “C’est quoi ton but dans la vie ?”, ce n’est pas dramatique.' },
        { type: 'p', text: 'On n’est pas obligé d’avoir une passion spectaculaire pour justifier notre existence.' },
        { type: 'p', text: 'On peut aussi choisir de passer son temps à faire des choses qu’on aime. Que ce soit sociétalement bien vu ou non n’est pas censé rentrer dans l’équation.' },

        { type: 'p', text: 'Alors la prochaine fois qu’on te demande : “C’est quoi ta passion ? Ton but ?”' },
        { type: 'p', text: 'On ne panique pas, on ne se compare plus. On répond simplement :' },

        { type: 'quote', text: '“Être heureux, mon pote.”' },

        { type: 'p', text: '______________________________________________________________________________' },
        { type: 'p', text: 'Si tu veux plus d\'infos et quelques exercices, tu peux télécharger le PDF :) :' },
        {
          "type": "pdf",
          "url": "/assets/pdf/exercices_but_passion.pdf",
          "label": "Télécharger le PDF complet"
        },

        
      ],
      
    }


  ];
}