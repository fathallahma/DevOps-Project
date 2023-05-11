CREATE DATABASE `DEVOps` /*!40100 DEFAULT CHARACTER SET latin1 */;


CREATE TABLE DEVOps.Produit (
	Idarticle varchar(100) NULL,
	nom varchar(100) NULL,
	prix varchar(100) NULL
)
ENGINE=MyISAM
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;

CREATE TABLE `produit` (
  `Idproduit` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `prix` varchar(100) DEFAULT NULL,
  `marque` varchar(100) DEFAULT NULL,
  `catégorie` varchar(100) DEFAULT NULL,
  `taille_produit` varchar(100) DEFAULT NULL,
  `couleur` varchar(100) DEFAULT NULL,
  `image` longblob
) ENGINE=MyISAM DEFAULT CHARSET=latin1

CREATE TABLE `utilisateur` (
  `Id_user` varchar(100) DEFAULT NULL,
  `nom_user` varchar(100) DEFAULT NULL,
  `prenom_user` varchar(100) DEFAULT NULL,
  `addresse_mail` varchar(100) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL,
  `adresse_livraison` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `commande` (
  `Id_commande` varchar(100) DEFAULT NULL,
  `Id_user` varchar(100) DEFAULT NULL,
  `Idproduit` varchar(100) DEFAULT NULL,
  `date_commande` varchar(100) DEFAULT NULL,
  `quantite_commande` varchar(100) DEFAULT NULL,
  `montant_commande` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO DEVOps.produit
(Idproduit, nom, description, prix, marque, catégorie, taille_produit, couleur, image)
VALUES('1', 'Air force one', 'de trés belle chausure', '110', 'Nike', 'Homme ', '44', 'blanc', NULL);

INSERT INTO DEVOps.utilisateur
(Id_user, nom_user, prenom_user, addresse_mail, mdp, adresse_livraison)
VALUES('1', 'Jean', 'Michel', 'J.michel@gmail.com', 'Jmpei', '49 rue de la monnay Lille');

INSERT INTO DEVOps.commande
(Id_commande, Id_user, Idproduit, date_commande, quantite_commande, montant_commande)
VALUES('1', '1', '1', '25/04/2023', '1', '110');
