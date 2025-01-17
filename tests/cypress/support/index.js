// ***********************************************************
// This support/index.js file is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.Cookies.defaults({
	preserve: /wp|wordpress/
});

before(() => {
	cy.login(Cypress.env('wpUsername'), Cypress.env('wpPassword'));
	cy.visit('/wp-admin/admin.php?page=bluehost-site-migrator');
});
