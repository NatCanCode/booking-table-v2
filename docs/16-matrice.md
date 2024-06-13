
# Test

## Matrice du cours précédent

| ID  |  Categorie  | Priorité |                                 Nom                                  |        Route         | METHODE |      Attendu       | Créé |
| --- | :---------: | :------: | :------------------------------------------------------------------: | :------------------: | :-----: | :----------------: | ---: |
| 1   |    Auth     |    3     |                    Un utilisateur peut s'inscrire                    |     /api/signup      |  POST   | utilisateur ajouté |    ✅ |
| 2   | Reservation |    2     |   Un utilisateur non connecté ne peut pas récupérer de reservation   |   /api/reservation   |  POST   |        401         |    ✅ |
| 3   |   Profil    |    1     | Un utilisateur connecté ne peut pas voir un profil d'un autre compte | /api/reservation/:id |   GET   |        403         |    ❌ |

## API testing (integration)

| Test ID | Entité      | Méthode HTTP | Description du test                                        |
| ------- | ----------- | ------------ | ---------------------------------------------------------- |
| 1       | membership  | GET          | Récupérer les informations d'une adhésion spécifique       |
| 2       | membership  | POST         | Créer une nouvelle adhésion                                |
| 3       | membership  | PUT          | Mettre à jour les informations d'une adhésion existante    |
| 4       | membership  | DELETE       | Supprimer une adhésion existante                           |
| 5       | membership  | GET (List)   | Récupérer la liste de toutes les adhésions                 |
| 6       | user        | GET          | Récupérer les informations d'un utilisateur spécifique     |
| 7       | user        | POST         | Créer un nouvel utilisateur                                |
| 8       | user        | PUT          | Mettre à jour les informations d'un utilisateur existant   |
| 9       | user        | DELETE       | Supprimer un utilisateur existant                          |
| 10      | user        | GET (List)   | Récupérer la liste de tous les utilisateurs                |
| 11      | room        | GET          | Récupérer les informations d'une salle spécifique          |
| 12      | room        | POST         | Créer une nouvelle salle                                   |
| 13      | room        | PUT          | Mettre à jour les informations d'une salle existante       |
| 14      | room        | DELETE       | Supprimer une salle existante                              |
| 15      | room        | GET (List)   | Récupérer la liste de toutes les salles                    |
| 16      | spot        | GET          | Récupérer les informations d'un spot spécifique            |
| 17      | spot        | POST         | Créer un nouveau spot                                      |
| 18      | spot        | PUT          | Mettre à jour les informations d'un spot existant          |
| 19      | spot        | DELETE       | Supprimer un spot existant                                 |
| 20      | spot        | GET (List)   | Récupérer la liste de tous les spots                       |
| 21      | reservation | GET          | Récupérer les informations d'une réservation spécifique    |
| 22      | reservation | POST         | Créer une nouvelle réservation                             |
| 23      | reservation | PUT          | Mettre à jour les informations d'une réservation existante |
| 24      | reservation | DELETE       | Supprimer une réservation existante                        |
| 26      | reservation | GET (List)   | Récupérer la liste de toutes les réservations              |

## Auth

| Test ID | Scénario                       | Méthode HTTP | Endpoint        | Description du test                                      |
|---------|-------------------------------|--------------|-----------------|----------------------------------------------------------|
| 1       | Sign Up - Succès              | POST         | /signup         | Créer un nouvel utilisateur avec des données valides     |
| 2       | Sign Up - Email déjà utilisé  | POST         | /signup         | Essayer de créer un utilisateur avec un email existant   |
| 3       | Sign Up - Données invalides   | POST         | /signup         | Essayer de créer un utilisateur avec des données invalides|
| 4       | Sign In - Succès              | POST         | /signin         | Connecter un utilisateur avec des identifiants valides   |
| 5       | Sign In - Mot de passe incorrect| POST         | /signin         | Essayer de connecter avec un mot de passe incorrect      |
| 6       | Sign In - Utilisateur non trouvé| POST         | /signin         | Essayer de connecter avec un email non enregistré        |
| 7       | Sign In - Données invalides   | POST         | /signin         | Essayer de connecter avec des données invalides          |
| 8       | Sign Up - Mot de passe faible | POST         | /signup         | Essayer de créer un utilisateur avec un mot de passe faible|
| 9       | Sign Up - Email invalide      | POST         | /signup         | Essayer de créer un utilisateur avec un email invalide   |
| 10      | Sign Up - Champ manquant      | POST         | /signup         | Essayer de créer un utilisateur avec un champ manquant   |

## Test unitaires hashPassword


| Test ID | Scénario                                      | Entrée                      | Sortie attendue                            | Description du test                                                    |
|---------|-----------------------------------------------|-----------------------------|--------------------------------------------|------------------------------------------------------------------------|
| 1       | Hashage réussi d'un mot de passe              | 'mon mot de passe'             | HashedPassword qui match le format bcrypt  | Vérifie que le mot de passe est correctement hashé et correspond au format bcrypt |
| 2       | Mot de passe vide                             | ""                          | Erreur                                     | Vérifie que la méthode lance une erreur si le mot de passe est vide     |
| 3       | Mot de passe nul                              | null                        | Erreur                                     | Vérifie que la méthode lance une erreur si le mot de passe est null     |
| 4       | Gestion des erreurs de bcrypt                 | 'monMotDePasse'             | Erreur 'bcrypt error'                      | Simule une erreur dans bcrypt et vérifie que la méthode gère cette erreur correctement |