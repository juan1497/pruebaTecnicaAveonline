'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">elecciones-presidenciales documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propiedades
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-99b8ba313411c7885f004c658292529b65e31f77ac8f1e2f29fc6263193101a10f843bc5ca52132e4ded2ca94ff0a01b763184fed6fec0891ad80dfa1bcaa97b"' : 'data-target="#xs-components-links-module-AppModule-99b8ba313411c7885f004c658292529b65e31f77ac8f1e2f29fc6263193101a10f843bc5ca52132e4ded2ca94ff0a01b763184fed6fec0891ad80dfa1bcaa97b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-99b8ba313411c7885f004c658292529b65e31f77ac8f1e2f29fc6263193101a10f843bc5ca52132e4ded2ca94ff0a01b763184fed6fec0891ad80dfa1bcaa97b"' :
                                            'id="xs-components-links-module-AppModule-99b8ba313411c7885f004c658292529b65e31f77ac8f1e2f29fc6263193101a10f843bc5ca52132e4ded2ca94ff0a01b763184fed6fec0891ad80dfa1bcaa97b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' : 'data-target="#xs-components-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' :
                                            'id="xs-components-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' }>
                                            <li class="link">
                                                <a href="components/FormContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' : 'data-target="#xs-injectables-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' :
                                        'id="xs-injectables-links-module-BaseModule-9e45004dff794f391ae74e8be6bebb54a7b7477f2574fb5bc193273a1f7ae3dc7593d68850223a74813657f4f25deae6a1b46f70cdfe53389bfbb90cf84c1d9a"' }>
                                        <li class="link">
                                            <a href="injectables/ChoicesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChoicesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ChoicesService.html" data-type="entity-link" >ChoicesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Choice.html" data-type="entity-link" >Choice</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Rutas</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentación generada utilizando <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});