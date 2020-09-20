<template>
  <div class="home text-center" id="inicio"> 
    <section class="empreendedor mb-5" id="empreendedor">
      <h1 class="mb-5">Pense como um Empreendedor</h1>
      <b-container>
        <b-row>
          <b-col class="text-center centralizando-texto">
            <h3 class="espaco-entrelinhas">
              “Tome atitudes que ninguém tomou.
              Tenha consciência de que quem vence sem obstáculos triunfa sem glória.”
            </h3>
          </b-col>
          <b-col>
            <img :src="require('../assets/img/img-topo.png')" class="img-conteudo">
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="comofunciona mb-5">
      <h1 class="mb-5">Como Funciona?</h1>
      <b-container>
        <b-row>
          <b-col>
            <b-card class="sem-bordas">
              <div class="text-center mb-5">
                <b-icon icon="hand-thumbs-up" animation="throb" font-scale="4" variant="info"></b-icon>
                <h4 class="card-title">Simule sem Compromisso</h4>
              </div>
              <b-card-text>
                
                Informe o quanto você precisa e escolha a quantidade de parcelas que você quer pagar.
              </b-card-text>

              <b-button href="#" variant="primary" class="btn-card">Saiba +</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <div class="text-center mb-5">
                <b-icon icon="file-earmark-check" animation="fade" font-scale="4" class ="yellow"></b-icon>
                <h4 class="card-title">Preencha o formulário em poucos passos</h4>
              </div>
              <b-card-text>
               
                Faça seu pedido de empréstimo e envie seus documentos, tudo pela internet e de onde você estiver.
              </b-card-text>

              <b-button href="#" variant="primary" class="btn-card">Saiba +</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <div class="text-center mb-5">
                <b-icon icon="arrow-clockwise" animation="spin" font-scale="4" class="green"></b-icon>
                <h4 class="card-title">Aguarde a análise dos seus dados</h4>
              </div>
              <b-card-text>
                Seu pedido será analisado e em poucos dias você recebe uma resposta.
              </b-card-text>

              <b-button href="#" variant="primary" class="btn-card">Saiba +</b-button>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <div class="text-center mb-5">
                <b-icon icon="pen" animation="cylon" font-scale="4" class="purple"></b-icon>
                <h4 class="card-title">Assine o contrato e receba o dinheiro em sua conta</h4>
              </div>
              <b-card-text>
                Após seu pedido ser aprovado, assine o contrato digitalmente no seu próprio celular ou computador e receba o dinheiro logo em seguida. É rápido, fácil e seguro.
              </b-card-text>

              <b-button href="#" variant="primary" class="btn-card">Saiba +</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="descubra mb-5">
      <b-container>
        <b-row>
          <b-col class="text-center centralizando-texto">
            <h3 class="espaco-entrelinhas">
              “Descubra as vantagens de pedir um empréstimo conosco e aproveitar as menores taxas e menos burocracia.”
              <b-button href="#" variant="primary" class="btn-card mt-4">Saiba +</b-button>
            </h3>          
          </b-col>
          <b-col>
            <img :src="require('../assets/img/img-descubra.png')" class="img-conteudo">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="resultados mb-5">
      <h1 class="mb-5">Conheça nossos Resultados</h1>
      <b-container>
        <b-row>
          <b-col></b-col>
          <b-col></b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>

<style lang="css">
  .home {
    padding-top: 90px;
  }
  h1, h3 {
    font-family: inter-black;
    color: #2D3436;
  }
  .espaco-entrelinhas {
    line-height: 1.6;
  }
  .img-conteudo {
    width: 520px;
    height: 410px;
  }
  
  .centralizando-texto {
    display: flex;
    align-items: center;
    justify-content: center
  }
  .card-title {
    font-family: inter-bold;
    font-size: 17px;
    margin: 10px;
    margin-top: 25px;
  }
  .yellow {
    color:#FDDE34;
  }
  .green {
    color: #18B187;
  }
  .purple{
    color: #6C5CE7;
  }
  
</style>
