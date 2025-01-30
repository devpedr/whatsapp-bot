const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const puppeteer = require('puppeteer');


const client = new Client({
    authStrategy: new LocalAuth(),
        puppeteer: {
            headless: true,
            executablePath: process.env.CHROMIUM_PATH || '/usr/bin/google-chrome-stable' // Caminho do Chromium no servidor
        },
});
async function main() {
    try {
        const browser = await puppeteer.launch({
           args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage', // Evita problemas de memória
                '--single-process', // Necessário para alguns ambientes
            ],

        });
        const page = await browser.newPage();
        await page.goto('https://example.com');
        console.log('Navegador iniciado com sucesso!');

        await browser.close();

    }catch (error){
        console.log('Erro ao iniciar o navegador',error);
    }


    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });


    await client.initialize();


    const delay = (ms) => new Promise((res) => setTimeout(res, ms)); // Criando o delay

    const iPhoneLinksCapa = {
        '1': 'https://produto.mercadolivre.com.br/MLB-5205225080-capa-capinha-case-aveludada-iphone-xr-_JM',
        '01': 'https://produto.mercadolivre.com.br/MLB-5205225080-capa-capinha-case-aveludada-iphone-xr-_JM',
        '2': 'https://produto.mercadolivre.com.br/MLB-5207197000-capa-capinha-case-aveludada-iphone-11-_JM',
        '02': 'https://produto.mercadolivre.com.br/MLB-5207197000-capa-capinha-case-aveludada-iphone-11-_JM',
        '3': 'https://produto.mercadolivre.com.br/MLB-5244773208-capa-capinha-case-aveludada-iphone-11-pro-_JM',
        '03': 'https://produto.mercadolivre.com.br/MLB-5244773208-capa-capinha-case-aveludada-iphone-11-pro-_JM',
        '4': 'https://produto.mercadolivre.com.br/MLB-5244722276-capa-capinha-case-aveludada-iphone-11-pro-max-_JM',
        '04': 'https://produto.mercadolivre.com.br/MLB-5244722276-capa-capinha-case-aveludada-iphone-11-pro-max-_JM',
        '5': 'https://produto.mercadolivre.com.br/MLB-3924980501-capa-capinha-case-aveludada-iphone-12-_JM?variation=186283407509#reco_item_pos=1&reco_backend=same-seller-odin&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=c61372e7-5c87-4d98-9b23-c479b81778c5&reco_model=machinalis-sellers-baseline',
        '05': 'https://produto.mercadolivre.com.br/MLB-3924980501-capa-capinha-case-aveludada-iphone-12-_JM?variation=186283407509#reco_item_pos=1&reco_backend=same-seller-odin&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=c61372e7-5c87-4d98-9b23-c479b81778c5&reco_model=machinalis-sellers-baseline',
        '6': 'https://produto.mercadolivre.com.br/MLB-3924980501-capa-capinha-case-aveludada-iphone-12-12-pro-_JM?variation=186283407509#reco_item_pos=1&reco_backend=same-seller-odin&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=c61372e7-5c87-4d98-9b23-c479b81778c5&reco_model=machinalis-sellers-baseline',
        '06': 'https://produto.mercadolivre.com.br/MLB-3924980501-capa-capinha-case-aveludada-iphone-12-12-pro-_JM?variation=186283407509#reco_item_pos=1&reco_backend=same-seller-odin&reco_backend_type=low_level&reco_client=vip-seller_items-above&reco_id=c61372e7-5c87-4d98-9b23-c479b81778c5&reco_model=machinalis-sellers-baseline',
        '7': 'https://produto.mercadolivre.com.br/MLB-5244812360-capa-capinha-case-aveludada-iphone-12-pro-max-_JM',
        '07': 'https://produto.mercadolivre.com.br/MLB-5244812360-capa-capinha-case-aveludada-iphone-12-pro-max-_JM',
        '8': 'https://produto.mercadolivre.com.br/MLB-3924988711-capa-capinha-case-aveludada-iphone-13-_JM',
        '08': 'https://produto.mercadolivre.com.br/MLB-3924988711-capa-capinha-case-aveludada-iphone-13-_JM',
        '9': 'https://produto.mercadolivre.com.br/MLB-5244720912-capa-capinha-case-aveludada-iphone-13-pro-_JM',
        '09': 'https://produto.mercadolivre.com.br/MLB-5244720912-capa-capinha-case-aveludada-iphone-13-pro-_JM',
        '10': 'https://produto.mercadolivre.com.br/MLB-3945893503-capa-capinha-case-aveludada-iphone-13-pro-max-_JM',
        '11': 'https://produto.mercadolivre.com.br/MLB-5244796562-capa-capinha-case-aveludada-iphone-14-_JM',
        '12': 'https://produto.mercadolivre.com.br/MLB-5244759672-capa-capinha-case-aveludada-iphone-14-pro-_JM',
        '13': 'https://produto.mercadolivre.com.br/MLB-3945855737-capa-capinha-case-aveludada-iphone-14-pro-max-_JM',
        '14': 'https://produto.mercadolivre.com.br/MLB-5244719948-capa-capinha-case-aveludada-iphone-15-_JM',
        '15': 'https://produto.mercadolivre.com.br/MLB-5244811296-capa-capinha-case-aveludada-iphone-15-pro-_JM',
        '16': 'https://produto.mercadolivre.com.br/MLB-3945906321-capa-capinha-case-aveludada-iphone-15-pro-max-_JM',
        '17': 'https://produto.mercadolivre.com.br/MLB-5244735250-capa-capinha-case-aveludada-iphone-16-_JM'

        // Adicione mais links para outras opções conforme necessário
    };

    const iPhoneLinksPelicula = {
        '1': 'https://produto.mercadolivre.com.br/MLB-5205439100-pelicula-vidro-temperado-3d-iphone-xr-11-12-13-14-15-pro-max-_JM',
        '01': 'https://produto.mercadolivre.com.br/MLB-5205439100-pelicula-vidro-temperado-3d-iphone-xr-11-12-13-14-15-pro-max-_JM',
        '2': 'https://produto.mercadolivre.com.br/MLB-5219239596-pelicula-fosca-privacidade-iphone-xr-11-12-13-14-15-pro-max-_JM',
        '02': 'https://produto.mercadolivre.com.br/MLB-5219239596-pelicula-fosca-privacidade-iphone-xr-11-12-13-14-15-pro-max-_JM'
    };


    let state = {}; // Objeto para gerenciar estados dos usuários

    client.on('message_create', async (message) => {
        const user = message.from; // Identifica o usuário pelo número
        const chat = await message.getChat();

        // Saudações
        if (message.body === '00' || message.body.match(/(Ola|olá|oi|Oi|Bom dia|bom dia|Boa tarde|boa tarde|Boa noite|boa noite)/i) && message.from.endsWith('@c.us')) {
            await delay(2000);
            await chat.sendStateTyping(); // Simulando digitação
            await delay(2000);

            const contact = await message.getContact(); // Pegando o contato
            const name = contact.pushname; // Pegando o nome do Contato

            await client.sendMessage(
                message.from,
                'Bem vindo,' +
                name.split(' ')[0] +
                '! 👋' +
                '\nSou o assistente virtual da empreendimentocruz. Como posso te ajudar ?\n🌟*MENU*:\n\n1️⃣Capa iPhone\n2️⃣Película iPhone\n' +
                '\nPor favor, responda com número da opção desejada.'
            );
            state[user] = 'menu'; // Define o estado do usuário
            return;
        }

        // Opção de Capa iPhone
        if (message.body === '1' && state[user] === 'menu') {
            await delay(2000);
            await chat.sendStateTyping();
            await delay(2000);

            await client.sendMessage(
                message.from,
                '*CAPA IPHONE*📱\n📋*MENU MODELO IPHONE*:\n\n' +
                '0️⃣1️⃣iPhone XR\n0️⃣2️⃣iPhone 11\n0️⃣3️⃣iPhone 11 Pro\n' +
                '0️⃣4️⃣iPhone 11 Pro Max\n0️⃣5️⃣iPhone 12\n0️⃣6️⃣iPhone 12 Pro\n' +
                '0️⃣7️⃣iPhone 12 Pro Max\n0️⃣8️⃣iPhone 13\n0️⃣9️⃣iPhone 13 Pro\n' +
                '1️⃣0️⃣iPhone 13 Pro Max\n1️⃣1️⃣iPhone 14\n1️⃣2️⃣iPhone 14 Pro\n' +
                '1️⃣3️⃣iPhone 14 Pro Max\n1️⃣4️⃣iPhone 15\n1️⃣5️⃣iPhone 15 Pro\n' +
                '1️⃣6️⃣iphone 15 Pro Max\n1️⃣7️⃣iPhone 16\n' +
                '\n0️⃣0️⃣MENU\n' +
                '\nPor favor, responda com número da opção desejada.'
            );
            state[user] = 'modelosCapa'; // Atualiza o estado do usuário
            return;
        }
        // Link do modelo Capa selecionado
        if (state[user] === 'modelosCapa' && message.body in iPhoneLinksCapa) {
            const siteLink = iPhoneLinksCapa[message.body];

            await delay(2000);
            await chat.sendStateTyping();
            await delay(2000);

            await client.sendMessage(message.from, `${siteLink}`);
            await client.sendMessage(message.from, 'Para voltar ao menu, selecione:\n' +
                '\n0️⃣0️⃣MENU\n');
            state[user] = null; // Reseta o estado do usuário
            return;
        }

        // Opção de Pelicula iPhone
        else if (message.body === '2' && state[user] === 'menu') {
            await delay(2000);
            await chat.sendStateTyping();
            await delay(2000);

            await client.sendMessage(
                message.from,
                '*PELÍCULA IPHONE*📱\n📋*MENU MODELO IPHONE*:\n\n' +
                '0️⃣1️⃣Película Vidro Temperado 3D\n0️⃣2️⃣Película Fosca Privacidade\n' +
                '\n0️⃣0️⃣MENU\n' +
                '\nPor favor, responda com número da opção desejada.'
            );
            state[user] = 'modelosPelicula'; // Atualiza o estado do usuário
            return;
        }
        // Link do modelo Capa selecionado
        if (state[user] === 'modelosPelicula' && message.body in iPhoneLinksPelicula) {
            const siteLink = iPhoneLinksPelicula[message.body];

            await delay(2000);
            await chat.sendStateTyping();
            await delay(2000);

            await client.sendMessage(message.from, `${siteLink}`);
            await client.sendMessage(message.from, 'Para voltar ao menu, selecione:\n' +
                '\n0️⃣0️⃣MENU\n');
            state[user] = null; // Reseta o estado do usuário
            return;
        }

        // Caso o usuário não escolha uma opção válida
        if (state[user] === 'modelosCapa' || state[user] === 'modelosPelicula') {
            await client.sendMessage(message.from, 'Opção inválida. Por favor, escolha uma opção válida.');
        }

    });
}
main().catch(console.error);
