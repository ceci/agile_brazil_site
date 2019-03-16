/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const translate = require('../../server/translate.js').translate;

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.city}, <b>{siteConfig.year}</b></small>
        <small><translate>september 11, 12 and 13</translate></small>
      </h2>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo-ab.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#sponsorship"><translate>Sponsorship</translate></Button>
            <Button href="#register"><translate>Register</translate></Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl, language = ''} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Patrocinadores = () => (
      <div
        className="productShowcaseSection paddingBottom"
        id="sponsorship" 
        style={{textAlign: 'center'}}>
        <h2><translate>Sponsorship</translate></h2>
        <translate>Want to be a sponsor?</translate>
        <MarkdownBlock>[patrocinio@agilebrazil.com](mailto:patrocinio@agilebrazil.com)</MarkdownBlock>
      </div>
    );

    const Detalhes = () => (
      <Container padding={['bottom', 'top']} background="dark">
        <GridBlock
          contents={[
            {
              imageAlign: 'left',
              image: `${siteConfig.baseUrl}img/bg-body.jpg`,
              title: <translate>In 2019 our conference will be held in Belo Horizonte!</translate>,
              content: <translate>We invite the agile community to sow values ​​and agile principles and together reap the fruits of our culture.</translate>
            },
          ]}
          layout="oneColumn"
        />
      </Container>
    );

    const RegisterButton = props => (
      <a className="" href="https://inscricoes.agilebrazil.com/">
        <div id="register" className="registerButton">Register</div>
      </a>
    )

    const SponsorshipCategory = props => (
      <div className="sponsorshipTable">
        <div className="sponsorshipCategory">
          <span className="sponsorType">Innovators</span>
          <span className="sponsorDescription">100 inscrições ou até 15 de Abril o que vier antes.</span>
          <span className="sponsorPrice">R$390</span>
          <span className="sponsorPrice">AA R$351</span>
        </div>
        <div className="sponsorshipCategory">
          <span className="sponsorType">Early Adopters</span>
          <span className="sponsorDescription">100 inscrições ou até 15 de Maio o que vier antes.</span>
          <span className="sponsorPrice">R$470</span>
          <span className="sponsorPrice">AA R$423</span>
        </div>
        <div className="sponsorshipCategory">
          <span className="sponsorType">Early Majority</span>
          <span className="sponsorDescription">100 inscrições ou até 15 de Junho o que vier antes.</span>
          <span className="sponsorPrice">R$560</span>
          <span className="sponsorPrice">AA R$504</span>
        </div>
        <div className="sponsorshipCategory">
          <span className="sponsorType">Late Majority</span>
          <span className="sponsorDescription">100 inscrições ou até 15 de Julho o que vier antes.</span>
          <span className="sponsorPrice">R$660</span>
          <span className="sponsorPrice">AA R$594</span>
        </div>
        <div className="sponsorshipCategory">
          <span className="sponsorType">Late Adopters</span>
          <span className="sponsorDescription">Até 28 de Agosto.</span>
          <span className="sponsorPrice">R$750</span>
          <span className="sponsorPrice">AA R$675</span>
        </div>
        <div className="sponsorshipCategory">
          <span className="sponsorType">Laggards e Empenhos</span>
          <span className="sponsorDescription">De 29 de Agosto até 11 de Setembro.</span>
          <span className="sponsorPrice">R$950</span>
          <span className="sponsorPrice">AA R$855</span>
        </div>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Detalhes />
          <RegisterButton />
          <SponsorshipCategory />
          <Patrocinadores />
        </div>
      </div>
    );
  }
}

module.exports = Index;
