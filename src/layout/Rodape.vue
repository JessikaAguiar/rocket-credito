<template>
    <b-container fluid="xl" class="rodape">
         <b-row class="text-center">
            <b-col>
                <div class="rocket-logo">
                    <a href="#inicio">
                        <span class="logo-footer"></span>
                    </a>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
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
                                <b-form>
                                    <b-container>
                                        <b-row>
                                            <b-col>
                                                <b-form-group id="input-group-1" label-for="input-1">
                                                    <b-form-input
                                                    id="input-1"
                                                    v-model="form.name"
                                                    required
                                                    placeholder="Nome"
                                                    class="input-rocket"
                                                    ></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                            <b-col>
                                                <b-form-group id="input-group-2" label-for="input-2">
                                                    <b-form-input
                                                        id="input-2"
                                                        v-model="form.email"
                                                        type="email"
                                                        required
                                                        placeholder="Email"
                                                        class="input-rocket"
                                                        ></b-form-input>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                                <b-form-group id="input-group-3" label-for="input-3">
                                                    <b-form-textarea
                                                        id="textarea"
                                                        v-model="text"
                                                        placeholder="Sua mensagem.."
                                                        rows="2"
                                                        max-rows="2"
                                                        class="input-rocket"
                                                    ></b-form-textarea>
                                                </b-form-group>
                                            </b-col>
                                            <b-col>
                                                <b-button type="submit" class="btn-rocket-enviar">Enviar</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-container>
                                </b-form>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p class="copy-rodape">Copyright © 2020 RocketCrédito - Brasil</p>
                            <div class="visualizacao">
                                <h4 class="email-rodape">ola@rocketcredito.com</h4>
                                <div class="d-flex sociais">
                                    <a href="#"><img :src="require('../assets/img/face-with.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/linke-with.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/insta-with.svg')" class="logo-redes"></a>
                                    <a href="#"><img :src="require('../assets/img/twit-with.svg')" class="logo-redes"></a>
                                </div>
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
    data() {
        return {
            form: {
            email: '',
            name: '',
            }
        }
    }
}
</script>

<style lang="css">
    .rodape {
        /* background-color: #10206A; */
        color: #ffffff;
    }
    .rocket-logo {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo-footer {
        display: block;
        background-image: url('~@/assets/img/foguete1.png');
        background-repeat: no-repeat;
        background-size: 102px 115px;
        width: 102px;
        height: 115px;
    }
    .logo-footer:hover, .logo-footer:focus{
        background-image: url('~@/assets/img/foguete2.png');
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
    .email-rodape{
        font-family: inter-bold;
        color: #10206A;
    }
    .copy-rodape {
        text-align: center;
    }
    .visualizacao {
        display: none;
        text-align: center;
    }
    
    
    @media (max-width: 768px) {
        .rodape {
            background-color: #10206A;
        }
        .siga-nos, .informacoes, .entreemcontato, .mensagem  {
            display: none;
        }
        .copy-rodape{
            color: #ffffff;
        }
        .visualizacao {
           display: block;
           
        }
        .visualizacao h4{
            color: #ffffff;
        }
        .sociais {
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
        .logo-footer {
            background-image: url('~@/assets/img/foguete2.png');
        }
        
    }
</style>