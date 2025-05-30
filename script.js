const quotes = [
   "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo. – Winston Churchill",
"Acredite em si mesmo e será imparável. – Desconhecido",
"Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados. – Mahatma Gandhi",
"O único lugar onde o sucesso vem antes do trabalho é no dicionário. – Vidal Sassoon",
"A jornada de mil milhas começa com um único passo. – Lao Tsé",
"Não espere por oportunidades. Crie-as. – Desconhecido",
"Tudo parece impossível até que seja feito. – Nelson Mandela",
"Você não precisa ser grande para começar, mas precisa começar para ser grande. – Zig Ziglar",
"Não importa a velocidade, siga em frente. – Desconhecido",
"O melhor momento para começar foi ontem. O segundo melhor momento é agora. – Desconhecido",
"A persistência realiza o impossível. – Provérbio Chinês",
"Se você quer algo que nunca teve, precisa fazer algo que nunca fez. – Thomas Jefferson",
"O fracasso é apenas a oportunidade de recomeçar de forma mais inteligente. – Henry Ford",
"Não coloque limites em seus sonhos, coloque fé. – Desconhecido",
"Coragem não é a ausência do medo, mas a decisão de que algo é mais importante que o medo. – Franklin D. Roosevelt",
"O futuro pertence àqueles que acreditam na beleza de seus sonhos.– Eleanor Roosevelt",
"Cada novo dia é uma nova chance de fazer diferente. – Desconhecido",
"Se você tropeçar, faça disso parte da dança. – Desconhecido",
"As dificuldades preparam pessoas comuns para destinos extraordinários. – C.S. Lewis",
"Seja teimoso com seus objetivos e flexível com seus métodos. – Desconhecido",
"O impossível é apenas uma opinião. – Paulo Coelho",
"Trabalhe em silêncio e deixe o sucesso fazer barulho. – Frank Ocean",
"Pequenos progressos diários levam a grandes resultados. – Desconhecido",
"Se der medo, vai com medo mesmo. – Desconhecido",
"Pare de duvidar de si mesmo. Trabalhe duro e faça acontecer. – Desconhecido",
"A única maneira de fazer um excelente trabalho é amar o que você faz. – Steve Jobs",
"O único limite para a sua realização de amanhã são as suas dúvidas de hoje. – Franklin D. Roosevelt",
"Não tenha medo de desistir do bom para perseguir o ótimo. – John D. Rockefeller",
"Você é mais forte do que pensa e será mais feliz do que imagina. – Desconhecido",
"Quando estiver cansado, aprenda a descansar, não a desistir. – Banksy",
"O mundo pertence aos que se atrevem. – Desconhecido",
"Não espere por inspiração. Comece, e a inspiração virá até você. – Desconhecido",
"Sucesso não é o resultado da perfeição, mas da persistência. – Desconhecido",
"Vá firme na direção dos seus sonhos. Viva a vida que você imaginou. – Henry David Thoreau",
"A ação é a chave para qualquer sucesso. – Pablo Picasso",
"O segredo para avançar é começar. – Mark Twain",
"Não importa quão devagar você vá, desde que não pare. – Confúcio",
"Grandes batalhas só são dadas a grandes guerreiros. – Desconhecido",
"Seus sonhos não têm prazo de validade. Respire fundo e tente de novo. – Desconhecido",
"Foque no progresso, não na perfeição. – Desconhecido",
];

document.getElementById("new-quote").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
});
