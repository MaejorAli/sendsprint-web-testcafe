import { Selector, ClientFunction } from 'testcafe';

fixture `SendSprint Regression Tests`
    .page `https://frontendstaging.sendsprint.com/`;

test('Automates Login, Send Money, and Logout Flows with pay with Stripe with link option', async t => {
    await t.eval(() => {
        document.body.style.zoom = '80%';
    });

    // Login
    await t
        .navigateTo('/login')
        .expect(Selector('#root > div:nth-child(2) > main > div.ss-container-component.ss-container.ss-flex-1 > div > form > div > div:nth-child(2) > div.ss-space-y-4').with({ timeout: 30000 }).visible).ok()
        .typeText('input[name="email"]', 'lososi3095@wirelay.com')
        .typeText('input[name="password"]', 'leggos78')
        .click(Selector('button').withText('Login'))
        .click(Selector('button').withText('Skip'));

    // Send Money
    await t
        .click(Selector('#send-money > div').with({ visibilityCheck: true }))

    const inputField = Selector('input[name="sendAmount"]');  
    await t 
        .typeText(inputField, '2')
        .pressKey('backspace backspace backspace backspace')
        .typeText(inputField, '250')
        .wait(2000)
        .click(Selector('#headlessui-listbox-button-3').with({ visibilityCheck: true }))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-px-4.ss-py-2.ss-rounded.ss-cursor-pointer.ss-text-neutral-500').withText('Nigeria'))
        .click(Selector('.ss-text-paragraph-regular').withText('The recipient\'s funds are deposited in naira into their naira bank account'))
        .wait(2000);

    // Close Intercom if present
    const intercomIframe = Selector('#intercom-container > div > iframe');
    const intercomSVG = Selector('svg.intercom-1aom7vo.e1jjo5ve0');
    const iframeBody = ClientFunction(() => {
        const iframe = document.querySelector('#intercom-container > div > iframe');
        return iframe ? iframe.contentDocument.body : null;
    });

    if (await intercomIframe.exists) {
        await t
            .switchToIframe(intercomIframe)
            .click(intercomSVG)
            .switchToMainWindow();
    }

    await t
        .click(Selector('button.ss-button'))
        .wait(2000)
        .click(Selector('button').withText('Add A Recipient'))
        .click(Selector('span').withText('Recipient\'s bank'))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-gap-4').withText('Access Bank'))
        .typeText('input[name="accountNumber"]', '1087347653')
        .typeText('input[name="accountName"]', 'Arochukwu Smith')
        .click('input[name="accountName"]', { offsetX: 30, offsetY: 100 })
        
       
        .wait(2000)
        .typeText('input[name="firstName"]', 'Arochukwu')
        .typeText('input[name="lastName"]', 'Smith')
        .typeText('input[name="phoneNumber"]', '9023476892')
        .wait(2000)
        .typeText('input[name="email"]', 'arochukwu@gmail.com')
        .typeText('input[name="address"]', '39 Adeola Adeleye street, Lagos Nigeria')
        .wait(2000)
        .click('input[name="address"]', { offsetX: 30, offsetY: 70 })
        .click(Selector('button').withText('Save'));
   
    const button = Selector('button')
        .withText('Pay with Stripe')
        
    await t
        .click(button)
        .click(Selector('button').withText('Pay 256.00 USD'))
        .wait(2000)
        .typeText('input[name="otp-field-input"]', '0000')
        .click('input[name="otp-field-input"]', { offsetX: 30, offsetY: 150 })
        .wait(10000)
        .expect(getPageURL()).contains('https://checkout.stripe.com/')
        .typeText('input[name="cardnumber"]', '4111111111111111')
        .typeText('input[name="exp-date"]', '12/29')
        .typeText('input[name="cvc"]', '112')
        .click(Selector('span').withText('Country'))
        .click(Selector('.ss-flex.ss-gap-4').withText('United States'))
        .typeText('input[name="postal"]', '10011')
        .click(Selector('button').withText('Pay'))
        .wait(3000)
        .expect(getPageURL()).contains('https://frontendstaging.sendsprint.com/stripe-callback?')

    const successMessage = Selector('.ss-text-h4.ss-text-center').withText('Your payment was successful')
    await t
        .expect(successMessage.exists).ok()
        .click(Selector('.ss-text-paragraph-regular.ss-sr-only.md\\:ss-not-sr-only.ss-hidden.lg\\:ss-inline-block')
        .withText('My Account'))
        .click(Selector('.ss-text-paragraph-regular.ss-text-error-500')
        .withText('Logout'))  
});

test('Automates Login, Send Money, and Logout Flows with pay with Bank Acccount option', async t => {
    await t.eval(() => {
        document.body.style.zoom = '80%';
    });

    // Login
    await t
        .navigateTo('/login')
        .expect(Selector('#root > div:nth-child(2) > main > div.ss-container-component.ss-container.ss-flex-1 > div > form > div > div:nth-child(2) > div.ss-space-y-4').with({ timeout: 30000 }).visible).ok()
        .typeText('input[name="email"]', 'lososi3095@wirelay.com')
        .typeText('input[name="password"]', 'leggos78')
        .click(Selector('button').withText('Login'))
        .click(Selector('button').withText('Skip'));

    // Send Money
    await t
        .click(Selector('#send-money > div').with({ visibilityCheck: true }))

    const inputField = Selector('input[name="sendAmount"]');  
    await t 
        .typeText(inputField, '2')
        .pressKey('backspace backspace backspace backspace')
        .typeText(inputField, '250')
        .wait(2000)
        .click(Selector('#headlessui-listbox-button-3').with({ visibilityCheck: true }))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-px-4.ss-py-2.ss-rounded.ss-cursor-pointer.ss-text-neutral-500').withText('Nigeria'))
        .click(Selector('.ss-text-paragraph-regular').withText('The recipient\'s funds are deposited in naira into their naira bank account'))
        .wait(2000);

    // Close Intercom if present
    const intercomIframe = Selector('#intercom-container > div > iframe');
    const intercomSVG = Selector('svg.intercom-1aom7vo.e1jjo5ve0');
    const iframeBody = ClientFunction(() => {
        const iframe = document.querySelector('#intercom-container > div > iframe');
        return iframe ? iframe.contentDocument.body : null;
    });

    if (await intercomIframe.exists) {
        await t
            .switchToIframe(intercomIframe)
            .click(intercomSVG)
            .switchToMainWindow();
    }

    await t
        .click(Selector('button.ss-button'))
        .wait(2000)
        .click(Selector('button').withText('Add A Recipient'))
        .click(Selector('span').withText('Recipient\'s bank'))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-gap-4').withText('Access Bank'))
        .typeText('input[name="accountNumber"]', '1087347653')
        .typeText('input[name="accountName"]', 'Arochukwu Smith')
        .click('input[name="accountName"]', { offsetX: 30, offsetY: 100 })
        
       
        .wait(2000)
        .typeText('input[name="firstName"]', 'Arochukwu')
        .typeText('input[name="lastName"]', 'Smith')
        .typeText('input[name="phoneNumber"]', '9023476892')
        .wait(2000)
        .typeText('input[name="email"]', 'arochukwu@gmail.com')
        .typeText('input[name="address"]', '39 Adeola Adeleye street, Lagos Nigeria')
        .wait(2000)
        .click('input[name="address"]', { offsetX: 30, offsetY: 70 })
        .click(Selector('button').withText('Save'));
   
    const button = Selector('button')
        .withText('Pay with your bank account')
        
    await t
        .click(button)
        .click(Selector('button').withText('Pay 256.00 USD'))
        .wait(2000)
        .typeText('input[name="acountNumber"]', '4127658987')
        .click(Selector('.ss-text-paragraph-regular ss-text-left ss-pt-4 ss-text-neutral-40 ss-flex-grow ss-min-w-20 ss-truncate'))
        .click(Selector('ss-text-paragraph-regular ss-text-primary1-500').withText('SAVINGS ACCOUNT'))
        .typeText('input[name="routingNumber"]', '576895555')
        .click(Selector('button').withText('Continue'))
        .typeText('input[name="otp-field-input"]', '0000')
        .click('input[name="otp-field-input"]', { offsetX: 30, offsetY: 150 })
        .click('.ss-button__content.ss-relative')
        .click(Selector('.ss-text-paragraph-regular.ss-sr-only.md:ss-not-sr-only.ss-hidden.lg:ss-inline-block')
        .withText('My Account'))
        .click(Selector('.ss-text-paragraph-regular.ss-text-error-500')
        .withText('Logout'))  
});

test('Automates Login, Send Money, and Logout Flows with pay with Checkout option', async t => {
    await t.eval(() => {
        document.body.style.zoom = '80%';
    });

    // Login
    await t
        .navigateTo('/login')
        .expect(Selector('#root > div:nth-child(2) > main > div.ss-container-component.ss-container.ss-flex-1 > div > form > div > div:nth-child(2) > div.ss-space-y-4').with({ timeout: 30000 }).visible).ok()
        .typeText('input[name="email"]', 'lososi3095@wirelay.com')
        .typeText('input[name="password"]', 'leggos78')
        .click(Selector('button').withText('Login'))
        .click(Selector('button').withText('Skip'));

    // Send Money
    await t
        .click(Selector('#send-money > div').with({ visibilityCheck: true }))

    const inputField = Selector('input[name="sendAmount"]');  
    await t 
        .typeText(inputField, '2')
        .pressKey('backspace backspace backspace backspace')
        .typeText(inputField, '250')
        .wait(2000)
        .click(Selector('#headlessui-listbox-button-3').with({ visibilityCheck: true }))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-px-4.ss-py-2.ss-rounded.ss-cursor-pointer.ss-text-neutral-500').withText('Nigeria'))
        .click(Selector('.ss-text-paragraph-regular').withText('The recipient\'s funds are deposited in naira into their naira bank account'))
        .wait(2000);

    // Close Intercom if present
    const intercomIframe = Selector('#intercom-container > div > iframe');
    const intercomSVG = Selector('svg.intercom-1aom7vo.e1jjo5ve0');
    const iframeBody = ClientFunction(() => {
        const iframe = document.querySelector('#intercom-container > div > iframe');
        return iframe ? iframe.contentDocument.body : null;
    });

    if (await intercomIframe.exists) {
        await t
            .switchToIframe(intercomIframe)
            .click(intercomSVG)
            .switchToMainWindow();
    }

    await t
        .click(Selector('button.ss-button'))
        .wait(2000)
        .click(Selector('button').withText('Add A Recipient'))
        .click(Selector('span').withText('Recipient\'s bank'))
        .wait(2000)
        .click(Selector('.ss-flex.ss-items-center.ss-gap-4').withText('Access Bank'))
        .typeText('input[name="accountNumber"]', '1087347653')
        .typeText('input[name="accountName"]', 'Arochukwu Smith')
        .click('input[name="accountName"]', { offsetX: 30, offsetY: 100 })
        .wait(2000)
        .typeText('input[name="firstName"]', 'Arochukwu')
        .typeText('input[name="lastName"]', 'Smith')
        .typeText('input[name="phoneNumber"]', '9023476892')
        .wait(2000)
        .typeText('input[name="email"]', 'arochukwu@gmail.com')
        .typeText('input[name="address"]', '39 Adeola Adeleye street, Lagos Nigeria')
        .wait(2000)
        .click('input[name="address"]', { offsetX: 30, offsetY: 70 })
        .click(Selector('button').withText('Save'));
   //pay with checkout
    const button = Selector('button')
        .withText('Pay with Checkout')
        
    await t
        .click(button)
        .click(Selector('button').withText('Pay 256.00 USD'))
        .wait(2000)
        .typeText('input[name="otp-field-input"]', '0000')
        .click('input[name="otp-field-input"]', { offsetX: 30, offsetY: 150 })
        .wait(10000)
        .expect(getPageURL()).contains('https://pay.sandbox.checkout.com/')
        .typeText('input[name="cardnumber"]', '4111111111111111')
        .typeText('input[name="exp-date"]', '12/29')
        .typeText('input[name="cvc"]', '112')
        .click(Selector('button').withText('Pay'))
        .wait(3000)
        .expect(getPageURL()).contains('https://frontendstaging.sendsprint.com/stripe-callback?')

    const successMessage = Selector('.ss-text-h4.ss-text-center').withText('Your payment was successful')
    await t
        .expect(successMessage.exists).ok()
        .click(Selector('.ss-text-paragraph-regular.ss-sr-only.md\\:ss-not-sr-only.ss-hidden.lg\\:ss-inline-block')
        .withText('My Account'))
        .click(Selector('.ss-text-paragraph-regular.ss-text-error-500')
        .withText('Logout'))  
});

