   it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login/');
        cy.get('#k_email').type('User_name')
        cy.get('#k_password').type('User_password')
        cy.get('.MuiButton-root').click();
        cy.get('.header_card_trainer').click();
        cy.get('.k_mobile > :nth-child(5)').click();
        cy.get('.available > button').first().click()
        cy.wait(2000);
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('46208691136329963')
        cy.get(':nth-child(1) > .style_1_base_input').type('0126')
       cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125')
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Ilgiz Sagadeev')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(1000);
        cy.get('.style_1_base_input').type('56456')
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click()
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно');
        

       

    })
