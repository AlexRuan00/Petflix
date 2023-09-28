describe('Petflix', () => {
    it('visitar pagina', () => {
        cy.visit('http://localhost:5173/');
    })

    it('Abrir o primeiro vídeo com click', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[alt="Miniatura do vídeo"]').eq(0).click();
    })

    it('Abrir o primeiro vídeo com a tecla', () => {
        cy.visit('http://localhost:5173/')
        cy.get('body').type('Cypress.io{uparrow}');
        cy.get('video').should('exist');
    })
    
    it('Abrir algum vídeo e verificar se volta para a home', () => {
        cy.visit('http://localhost:5173/')
        cy.get('body').type('Cypress.io{uparrow}');
        cy.get('video').should('exist');
        cy.get('body').type('Cypress.io{1}');
    })
}) 