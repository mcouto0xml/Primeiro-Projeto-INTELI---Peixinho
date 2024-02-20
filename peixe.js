var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
            preload: preload,
            create: create,
            update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    
    //carregando a imagem do mar
    
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregando a imagem da logo

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregando a imagem do peixe

    this.load.image('peixe', 'assets/peixes/peixe.pixelart-removebg-preview.png');

    //carregando a imagem do peixe de fundo

    this.load.image('peixe_fundo', 'assets/peixes/peixe.real.png');

    }

function create() {
    
    //adicionando a imagem do mar 
    
    this.add.image(400, 300, 'mar');

    //adicionando a imagem da logo

    this.add.image(150, 350, 'logo').setScale(0.6);

    //colocando a imagem peixe em uma variável

    peixinho = this.add.image(400, 300, 'peixe').setScale(0.3);

    //transformador a variável

    peixinho.setFlip(false, false);

    //colocando a imagem do peixe_fundo em uma variável

    peixe_fundo = this.add.image(400, 220, 'peixe_fundo').setScale(0.25);
}

function update() {

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y; 

    //variavel da posição do peixe_fundo

    var posX = 800;
    var posY = 600;

    //adicionando movimento ao peixe_fundo

    peixe_fundo.x = posX;
    peixe_fundo.y = posY;
    

    if (posX > peixinho.x && peixinho.x < posX) {
        posX = peixinho.y

        peixe_fundo.x = posX;
    }
    if (posY > peixinho.y && peixinho.y < posY) {
        posY = peixinho.x

        peixe_fundo.y = posY;
    }
}


