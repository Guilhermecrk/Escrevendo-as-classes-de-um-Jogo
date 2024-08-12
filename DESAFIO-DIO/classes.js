class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const heroi1 = new Heroi('Gandalf', 1000, 'mago');
  const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
  const heroi3 = new Heroi('Bruce Lee', 30, 'monge');
  const heroi4 = new Heroi('Naruto', 17, 'ninja');
  
  // Chamando o método atacar para cada herói
  heroi1.atacar(); // Exemplo de saída: "O mago atacou usando magia"
  heroi2.atacar(); // Exemplo de saída: "O guerreiro atacou usando espada"
  heroi3.atacar(); // Exemplo de saída: "O monge atacou usando artes marciais"
  heroi4.atacar(); // Exemplo de saída: "O ninja atacou usando shuriken"
  