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
        cy.get('body').type('{uparrow}');
        // cy.get('video').should('exist');
      
    })
}) 