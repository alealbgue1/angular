// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: false,

	//API_URL_Login: "http://localhost/AJAX/LISTA_PERSONAS/LOGIN/Angular/login.php",
	API_URL_Login: "http://localhost/ProyectoIntegrado/avanzado/login.php",

	API_URL: "http://localhost/ProyectoIntegrado/avanzado/services.php",

	API_URL2: "http://localhost/ProyectoIntegrado/avanzado/servidor.php",

	cabecera: function(){
		let headers = { headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + localStorage.JWT
		})};
		return headers;
	},

	jsonEqual: function (a, b) {
        return JSON.stringify(a) == JSON.stringify(b);
    },

    seleccionaObj: function (lista, obj) {
        let res;
        lista.forEach(valor => {
            if (environment.jsonEqual(valor, obj))
                res = valor;
        });

        return res;
    },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
