<template>
  <div class="quemsomos" id="inicio">
    <section class="empresa mb-5">
      <h1 class="mb-5 text-center">Conheça a Nossa Empresa</h1>
      <b-container>
        <b-row>
          <b-col class="centralizando-texto">
             <img :src="require('../assets/img/quemsomos-topo.png')" class="img-conteudo">
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="texto-rocket">
              <span class="titulo-rocket">RocketCrédito</span>
            é uma empresa que se propõe a oferecer serviços relacionados A investimentos e emrestimos financeiros.
            De modo rápido, fácil e sem as burocracias comuns das instituições financeiras, além de taxas menores que as do mercado.</p>       
            
            <b-container class="borda-left">
              <b-row>
                <b-col>
                  <p class="texto-rocket">Uma das formas de saber se somos uma empresa real e que existimos de verdade, basta realizar uma consulta no banco de dados do Banco Central.</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="texto-rocket">Basta acessar o <a href="#">link</a> e digitar o nome da empresa ou o CNPJ no campo de buscas.</p>
                </b-col>
                <b-col>
                  <img :src="require('../assets/img/banco_central.png')" class="img-banco">
                </b-col>
              </b-row>
            </b-container>

            <p class="texto-rocket">
              Nossa empresa esta consolidada em Manaus desde 2020. Durante todo esse tempo vem concedendo crédito a milhares de pessoas que já se beneficiaram com a oportunidade.
            </p>
          </b-col>
        </b-row>
      </b-container>

      <h1 class="mb-5 text-center">Nossa Empresa Está prepara para recebê-lo</h1>
      <b-container>
        <b-row>
           <b-col class="centralizando-texto">
             <img :src="require('../assets/img/quemsomos-equipe.png')" class="img-fluid">
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="endereco">
      <h1 class="mb-5 text-center">Nosso Endereço:</h1>
      <b-container>
        <b-row>
          <b-col>
            <div class="mapa">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3142947943975!2d-59.95547638524303!3d-3.0098941978079816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c19a86069dd9b%3A0x181fe5f36f52a680!2sAv.%20Margarita%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1600668479497!5m2!1spt-BR!2sbr" width="900" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="contato-rocket">
              CNPJ 00.000.000/0000-00 MARGARITANA Nº 00 NovanaCity, Manaus - AM
            </p>
            <p class="contato-rocket">
              Telefone
              <br/>(92) 0000-0000
              <br/>(92) 00000-0000
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'quemsomos',
  
}
</script>

<style lang="css">
  .quemsomos {
    padding-top: 90px;
  }
  .titulo-rocket {
    display: block;
    font-size: 35px;
  }
  
  .borda-left {
    width: 90%;
    padding-left: 30px;
    border-left: 2px solid #C4C4C4;
  }
  .img-banco {
    width: 300px;
  }
  .mapa{
    display: flex;
    align-items: center;
    justify-content: center
  }
  .contato-rocket {
    margin-top: 30px;
    width: 200px;
    font-size: 18px;
  }
</style>