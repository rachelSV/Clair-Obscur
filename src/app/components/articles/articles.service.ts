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
      description: 'Je ne suis ni psychologue, ni médecin, ni thérapeuthe. Cet article est donc à unique but informatif, dans un esprit de partage et de témoignage personnel. Rien de ce qui est dit ici n\est considéré comme une vérité absolue, comme une solution miracle ou thérapeuthique. Pour tous problèmes, quel qu\'en soit le sujet et la cause, n\'hésitez pas à consulter un professionnel. Il n\'y a pas de honte à demander de l\'aide.',
      tags: ['dépendance affective', 'relations', 'confiance en soi'],
      readTime: '6 min',
      content: `
        <h2>Introduction</h2>
        <p>On a tous déjà entendu ce mot barbare : “dépendance affective”. 
        Ça sonne presque comme une maladie mystérieuse, alors qu’en vrai, ça peut être juste… toi, moi, ton pote qui ne supporte pas que sa copine parte en week-end sans lui, ou ta cousine qui panique quand son téléphone reste silencieux trop longtemps.</p>

        <p>Longtemps, j’ai pensé que ce n’était pas mon cas. J’étais juste “très amoureuse”. 
        La vie doit ressembler aux romans qui parlent de couples tellement passionnés qu’ils ne peuvent vivre l’un sans l’autre, non ? 
        Eh bien non. Avec du recul, j’étais l’archétype même de la dépendante affective, supplément maladive et handicapante. 
        Et si tu te reconnais dans ce que je vais raconter… c’est peut-être aussi ton cas.</p>

        <h2>Quand je croyais que “collée H24” = amour absolu</h2>
        <p>Je vous plante le décor. Moi, 16 ans, incapable de dormir seule. Même si mon conjoint était juste dans la pièce d’à côté, impossible de fermer l’œil. 
        J’avais la boule au ventre, l’estomac en vrac et la gorge serrée. Alors imaginez mon choc le jour où ma mère me sort, hilare :</p>
        <p><i>“Tu sais, mes meilleures nuits, c’est quand ton père bosse le soir. Je peux m’étaler en étoile de mer dans le lit tranquille.”</i></p>
        <p>Moi ? Choquée. Comment on peut apprécier dormir sans son partenaire ?! Pour moi, c’était une hérésie.<br>

        Mon ex-mari et moi, on s’est mis ensemble très jeunes (16 ans). Autant vous dire qu’on a grandi dans cette fusion totale. C’était même une fierté : <i>“nous, on ne peut pas vivre l’un sans l’autre.”</i>
        On se le déclarait même dans nos lettres d’amour : je ne peux pas vivre sans toi, je ne suis bien qu’en ta présence.<br> 
        Qu’est-ce que ça avait l’air beau, sur le papier.<br>
        À tel point qu’il a refusé un poste en Suisse, hyper bien payé, juste parce que ça impliquait de travailler de nuit et donc… de dormir séparés. Voilà le niveau.</p>

        À l’époque, je trouvais ça romantique et normal. On ne pouvait pas être bien sans l’autre, pourquoi est-ce censé être mal ou toxique ? Et puis, personne ne m’a jamais appris ou montré le contraire !
        Aujourd’hui, je trouve ça flippant. Parce que ce que je prenais pour du grand amour, cette impression d’être la Mina de son Dracula, la Bella de son Edouard, c’était en réalité juste de la dépendance pure et dure.
        </p>

        <h2>Les racines de tout ça : apprendre à ne jamais être seule</h2>
        <p>En thérapie, j’ai dû remonter loin. Très loin.<br>
        Enfance : 7 à la maison (comme la série, oui, sauf sans la baraque immense ni les fringues coordonnées).<br>
        Chambre ? Jamais seule. Toujours à la partager avec ma sœur, puis avec ma grand-mère.<br>
        Résultat ? Je n’ai littéralement jamais appris à rester seule.</p>

        <p>Alors certes, c’était sympa de passer mes soirées avec ma grand-mère à discuter de son incroyable vie pendant qu’elle cousait à la lueur (oui, ambiance film d’époque 🕯️✨).<br> 
        Mais le revers, c’est que je n’ai pas appris à gérer mes propres pensées, mon propre silence. Et ça, ça marque.
        Je jouais avec mon frère et ma soeur, je discutais avec ma famille, je dormais dans une chambre occupée, bref. Dans chaque pièce se trouvait quelqu’un, et chaque instant était partagé.
        </p>

        <h2>La claque de ma nouvelle relation</h2>
        <p>Après mon divorce, je rencontre mon conjoint actuel. Et là… choc culturel.
        Le mec me sort, du haut de ses 19 ans à l’époque, des phrases comme :
        <ul>
          <li>“Chacun doit avoir sa propre vie, aussi.”</li>
          <li>“J’ai besoin de moments à moi.”</li>
          <li>“Tu vas faire quoi les fois où je ne serai pas là ?”</li>
        </ul>

        Et moi, dans ma tête :
        <ul>
          <li>“Ta vie, ce n’est pas censé être la mienne ?”</li>
          <li>“Des moments à toi ? Donc tu m’aimes moins ?”</li>
          <li>“Comment ça ne pas être là ?”</li>
        </ul>

        Bref, j’étais en panique totale.<br> 
        Je venais de passer dix ans collée à quelqu’un comme Voldemort greffé derrière la tête du professeur Quirrell. Et là, j’avais face à moi un mec qui me disait : “Spoiler alert : tu dois apprendre à vivre sans moi.”
        </p>

        <h2>La prise de conscience (à coups de disputes et d’insomnies)</h2>
        <p>Au début, c’était invivable. Disputes, incompréhensions, crises d’angoisse. Je ne supportais pas l’idée de passer une soirée seule, de dormir dans mon studio vide, de me réveiller sans lui. Et lui ne supportait pas de voir l’état dans lequel je me mettais car pour lui, il ne comprenait pas en quoi il y avait un problème.</p> 
        <p>Il prenait mes états d'âme et mes émotions pour des caprices et de la jalousie.<br>  
        Moi, je prenais ses envies de solitude comme du rejet et un manque d’amour, ses soirées entre amis sans moi comme de l’abandon. J’avais l’impression de l’aimer plus qu’il ne m’aimait, de n’avoir aucune forme d’importance dans sa vie. J’avais cette phrase qui me tournait en boucle dans l’esprit : “Que je sois là ou pas ne fait aucune différence pour lui, il passera quand même un bon moment.”</p>

        <p>Je ne voulais pas venir à une soirée ? Aucun problème, je pouvais rester chez moi profiter de ma petite soirée pendant que lui irait s’amuser et puis, on se retrouverait le lendemain.<br>  
        <i>“Ce n’est pas grave”</i>,<br>  
        <i>“Profites-en pour prendre du temps pour toi et faire tout ce que tu n’as pas le temps de faire quand je suis là”</i><br> 
        Sauf que prendre du temps pour moi, à ce moment-là, c’était être avec lui.</p>

        <p>Et puis un soir, entre deux larmes, je me suis posée une vraie question :
        <i>“Pourquoi je souffre autant quand je suis seule ?”</i><br>
        Car je voyais bien que pour lui, être seul n’était pas un problème. Alors, comment cela pouvait être aussi facile de son côté, et aussi traumatisant du mien ?</p>

        <p>La réponse m’a fait mal : parce que je n’existais qu’à travers l’autre.
        </p>

        <h2>Ce que disent les pros (et ce que j’ai testé)</h2>
        <blockquote>
          “La dépendance affective, ce n’est pas l’amour de l’autre. 
          C’est la peur panique de ne pas exister sans lui.”
        </blockquote>
        <p>Et effectivement, ça collait parfaitement. J’avais, à ce moment-là, la nette impression de n’être importante, belle, intéressante, intelligente, qu’à travers les yeux de mon partenaire. 

        J’ai testé plein de choses pour m’en sortir :
        <ul>
          <li>des séances avec un psychologue,</li>
          <li>des lectures (Guérir du mal d’amour de Quentin Lions a été une petite claque),</li>
          <li>des podcasts et des vidéos,</li>
          <li>et surtout : des exercices pour réapprendre la solitude positive</li>
        </ul></p>

        <h2>La mise en action</h2>
        <p>J’ai alors commencé à pratiquer, un peu bêtement, un peu bancal, en copiant ce qu’il faisait et en essayant de comprendre comment y trouver du plaisir, seule. 
        Parfois, c’était vraiment de ma propre initiative. Et parfois, c’était pour cacher une envie de vengeance. Comme pour lui dire silencieusement : “Tu vois, moi aussi je peux le faire. Moi aussi je peux vivre sans toi, tu ne m’es pas indispensable !”</p>

        <p>Donc j’ai commencé des petites actions. Des choses qui sont censées être simples mais qui, à l’époque, étaient un pas immensément grand vers une indépendance que je n’assumais encore pas du tout.<br>
        J’ai testé : </p>
        <ul>
          <li>aller au cinéma toute seule, souvent pour aller voir un film que lui ne voulait pas et dont je me serais privée d’aller voir sans sa présence.</li>
          <li>aller me promener et faire les boutiques en ville seule, et en profiter pour faire celles qu’il ne voulait pas trop faire ou démonter un gros gâteau en solo car il n’est pas très sucré (le bougre).</li>
          <li>regarder mes propres séries et mes propres films alors qu’il passait sa soirée dans la chambre en train de jouer.</li>
          <li>faire mes premières soirées entre amis sans lui.</li>
        </ul>

        Et bien sûr, le plus important et la plus grosse part du travail : passer des nuits sans lui.</p>

        <p>La première fois, 1 nuit seule : blanche, évidemment. Nausées, estomac noué, pleurs et angoisses. Je n’ai pas fermé l'œil une seule seconde. J’étais terrifié à un point que je ne sois pas sorti du lit de toute la nuit.</p>

        <p>La deuxième fois, 2 nuits : j’ai réussi à dormir quelques heures d’épuisement, et les symptômes ont perdu 10% d’intensité.</p>

        <p>Et ce travail a duré comme ça pendant environ 1 an. 
        Au début, j’avais l’impression de m’infliger une torture. Puis j’ai compris que c’était un entraînement. Comme apprendre à courir quand on déteste le sport : chiant au début, salvateur après.</p>

        Heureusement, à force de discussions, d’échanges et d’explications posés et calmes, mon compagnon a fini par comprendre et a adopté un comportement exemplaire. Nous nous sommes mis en mode “Coop”, comme de vrais collègues d’armée, et on y est allé petit à petit pour m’aider à surpasser tout ça. Une nuit par-ci, deux ou trois par-là… 
        A force, j’ai commencé à prendre mes marques, mes repères, mes habitudes. J’ai recommencé à vivre, à prendre ma vie en main, et au bout de plusieurs années, je peux enfin dire qu’aujourd’hui, contre toute attente, <b>j’y suis arrivé.</b>
        </p>

        <h2>Ce que j’ai appris (et que j’aurais aimé savoir avant)</h2>
        <p>Être collée 24h/24 à quelqu’un, ce n’est pas de l’amour, c’est de l’angoisse maquillée.<br>

        Avoir une vie perso, des passions, des moments à soi, ce n’est pas un manque d’amour, c’est une respiration.<br>

        <blockquote>La solitude, ce n’est pas un vide. C’est un espace où tu te retrouves vraiment toi.</blockquote>

        Aujourd’hui, j’ai encore des moments de rechute parfois. Des vieux démons qui me chuchotent à l’oreille “regarde, il part sans toi.”
        Mais maintenant, je sais les faire taire. Parce que j’ai appris que mon couple ne définit pas toute ma vie.</p>

        <p>Non pas que je sois à 100% guérie. Car son départ au Dakar pour 1 mois entier l’hiver dernier n’a pas été une partie de plaisir quotidienne.<br>
        Mais quand je vois de là où je pars, je peux dire que je suis fière d’en être là aujourd’hui.</p>

        <p>Sortir seule, faire des soirées sans lui, dormir seule chez moi, n’est plus un problème fondamental. J’ai même réussi à y ressentir une forme de plaisir, de paix dans ma solitude, voire même d’envie d’être vraiment seule parfois.</p>

        <p><i>“Je sors avec les potes demain soir”</i>, et m’entendre dire dans ma tête <i>“Yes ! Pizza et Orgueil et préjugés en tête à tête avec mon verre de vin”</i>, est et restera le plus grand cheminement que j’aurais fait de toute ma vie.</p>

        <h2>Conclusion</h2>
        <p>La dépendance affective, c’est vicieux : on croit que c’est une preuve d’amour, alors que c’est souvent une manière de fuir son propre vide intérieur.</p>

        <p>Alors si tu te reconnais là-dedans, sache une chose : ça se travaille. Avec soi-même, avec un professionnel, via des blogs, des podcasts ou des vidéos youtube, les supports sont infinis pour reprendre en main sa vie à soi. A toi de choisir la tienne et de mener tes propres recherches.</p>

        <p>Parles-en à ton partenaire. Explique lui, avec tes mots. <i>"Je crois que j'ai vraiment du mal à être seule, je suis peut-être dépendant(e), on peut en parler ?"</i> </p>
        
        <p>Ce n’est pas une fatalité. On peut apprendre à aimer sans se perdre, à être deux sans s’oublier, à apprécier la solitude sans la craindre.</p>

        <p>Parce qu’au fond, la plus belle preuve d’amour, ce n’est pas de s’accrocher désespérément à l’autre.
        C’est de pouvoir dire :
        <strong>“Je t’aime, mais je m’aime aussi.”</strong></p>
      `,
      createdAt: new Date('2025-08-22'),
      author: 'Elijah',
      cover: 'assets/images/articles/dependance.webp',
      links: [
        { label: 'L\'autonomie affective - site web', url: 'https://quentinlions.podia.com/' },
        { label: 'Guérir de la dependance affective - par Quentin Lions', url: 'https://fr.scribd.com/document/684720866/Guerir-du-mal-damour-de-la-dependance-a-lautonomie-affective-QLions' },
        { label: 'MindDay - application d\'auto-thérapie', url: 'https://www.mindday.com/' },
        { label: 'La vie en rose - podcast de développement personnel', url: 'https://open.spotify.com/show/1ntzhcuJSKtL0Ra0HWTsLr' }
      ]
    },


    {
      id: 'a2',
      title: 'Ce que la solitude m’a appris',
      description: 'Notes douces-amères sur la présence à soi.',
      tags: ['solitude', 'réflexion'],
      content: `<p>Contenu de l’article A2…</p>`,
      createdAt: new Date('2025-08-18'),
      cover: null
    }
  ];

  
}