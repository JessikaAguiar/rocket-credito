<template>
    <b-container fluid="xg" class="rodape">
         <b-row class="text-center">
            <b-col>
                <a href="#inicio"><img :src="require('../assets/img/foguete1.png')" class="logo-footer"></a>
            </b-col>
        </b-row>
         <b-row class="p-1 mt-2">
            <b-col class="m-1">
                <b-container>
                    <b-row>
                        <b-col>
                            <div class="siga-nos">
                                <h6 class="mb-4">SIGA-NOS</h6>
                                <div class="d-flex">
                                    <a href="#"><img :src="require('../assets/img/face.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/linke.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/insta.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/twit.svg')" class="logo-redes"></a>
                                </div>
                            </div>
                            <div class="informacoes">
                                <h6 class="mb-4">INFORMAÇÕES</h6>
                                <b-container>
                                    <b-row>
                                        <b-col>
                                            <p><a href="#" class="link-rodape">Sobre Nós</a></p>
                                            <p><a href="#" class="link-rodape">Empreendedor</a></p>
                                            <p><a href="#" class="link-rodape">Gestão de Negócios</a></p>
                                        </b-col>
                                        <b-col>
                                            <p><a href="#" class="link-rodape">Solicite seu Crédito</a></p>
                                            <p><a href="#" class="link-rodape">Realize seus Sonhos</a></p>
                                        </b-col>
                                        <b-col>
                                            <p><a href="#" class="link-rodape">Investimentos</a></p>
                                            <p><a href="#" class="link-rodape">Terms of Service</a></p>
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </div>
                        </b-col>
                        <b-col>
                            <div class="entreemcontato">
                                <h6 class="mb-1">ENTRE EM CONTATO</h6>
                                <h4 class="email-rodape">ola@rocketcredito.com</h4>
                            </div>
                            <div class="mensagem">
                                <h6 class="mb-4">ENVIE UMA MENSAGEM, LOGO RESPONDEREMOS</h6>
                                <form action="#">
                                   
                                    Nome
                                    email
                                    mensagem
                                    button
                                </form>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
         </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'rodape',
}
</script>

<style lang="css">
    .rodape {
        /* background-color: #10206A; */
        color: #ffffff;
    }
    .logo-footer {
        width: 102px;
        height: 115px;
    }
    .siga-nos, .informacoes, .entreemcontato, .mensagem {
        font-family: inter-extrabold;
        color: #ADADAD;
        margin-top: 2%;
    }
    .entreemcontato{
        height: 36%;
    }
    .logo-redes {
        width: 50px;
        height: 50px;
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 2%;
    }
    .link-rodape, a {
        text-decoration: none;
        font-family: inter-regular;
        font-size: 14px;
        color: #2D3436;
    }
    .link-rodape:focus, .link-rodape:hover {
        text-decoration: underline;
        color: #2D3436;
    }
    .email-rodape {
        font-family: inter-bold;
        color: #10206A;
    }
</style>