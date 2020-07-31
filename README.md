# YeiCook
Contratación de chefs


TITULO:

Proyecto YeiCook - 


HERRAMIENTAS 🛠️: 

MERN - MongoDB, Express, ReactJS, NodeJS.


INSTALACIÓN 🔧

npm i en el directorio

Crear un .env archivo en el server y añadir database (DB) y port (PORT) junto con (CLOUDINARY) y para cors (DOMAIN)


PARA INICIAR APP:

-En server npm run dev

-En client npm start


AUTORA ✒️

Paola Martin Espinoza - Trabajo Completo - paolamartinme

Expresiones de Gratitud 🎁

Gracias al equipo de Ironhack

En especial a mi TA Dayan Rojas y German Alvarez(LT) 

BACK ROUTES
|Id | Method  |  Path                     | Description                                        | Querys           |
|---|:-------:|:-------------------------:|:--------------------------------------------------:|-----------------:|
|2 	|POST	 :|:/chefs/newChef	         :|:   Crea un Chef	                                  :|   Admin         :|
|3  |GET	 :|:/chefs/getAllChefs	     :|:   Muetra la lsita de todos los chefs	          :|   Admin, client :|
|5  |GET	 :|:/chefs/chef/:id	         :|:   Elimina de la BBDD un chef	                  :|   Admin         :|
|6  |GET	 :|:/chefs/getOneChef/:id	 :|:   Selecciona un chef ve sus detalles	          :|   Admin         :|
|7  |PUT	 :|:/chefs/getOneChef/:id	 :|:   Edita en la BBDD el chef	                      :|   Admin         :|
|8  |GET	 :|:/chefs/getOneChef/:id/lik:|:   Selecciona un chef para dar like	              :|   Admin, client :|
|9  |POST	 :|:/signup	                 :|:   Muestra el formulario para registrar al invito :|   Invitado      :|
|10	|POST	 :|:/login	                 :|:   Muestra el formulario para entrar a la cuenta  :|   Admin, client :|
|11	|POST	 :|:/logout	                 :|:   Cierra sesión	                              :|   Admin, client :|
|12	|GET	 :|:/loggedin	             :|:   Sesión	                                      :|   Admin, client :|
|13	|GET	 :|:/user/getOneProfile/:id	 :|:   Selecciona el perfil del usuario	              :|   Admin, client :|
|14	|PATCH	 :|:/user/getOneProfile/:id	 :|:   Edita el perfil y lo guarda en la BBDD	      :|   Admin, client :|


FRONT ROUTES
|Id | Path          |  Component           | Description                                       | Querys         |
|---|:-------------:|:--------------------:|:----------------------------------------------:|---------------:|
|1  |:/	                Home/index	      :|:     Presentación de la página principal	   :|               :|
|2  |:/profile	        Profile/index	  :|:     Perfil del usuario	                   :|               :| 
|3  |:/signup	        Auth/signup-form  :|:     Formulario de signup	                   :|               :|
|4  |:/login	        Auth/login-form	  :|:     Formulario de login	                   :|               :|
|5  |:/chefs	        Chefs/index	      :|:     Vista de chefs	                       :|               :|
|6  |:/chefs/:id	    Chefs/chefsDetails:|:     Detalles de los chefs	                   :|               :|