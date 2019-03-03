import React, { Component, Fragment } from "react";
import Main from "views/main";
import Logo from "views/logo";
import Details from "views/details";
import { GET_IDEA_DATA } from "./requests";
import { withApollo } from "react-apollo";
import name from '@rstacruz/startup-name-generator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 1,
      init: false,
      profileRandom: "",
      industryRandom: "",
      problemRandom: {
        content: "",
        complement: "",
      },
      categoryRandom: "",
      technologiesRandom: [],
      advantageRandom: "",
      nameRandom: ""
    };
  }

  changeSlide = slide => this.setState({ slide });
  setInit = init => this.setState({ init });

  handleClick = async () => {
    const { client } = this.props;
    this.setInit(true);
    const { data } = await client.query({
      query: GET_IDEA_DATA
    });
    await this.setState({
      profileRandom: data.profileRandom.content,
      industryRandom: data.industryRandom.content,
      problemRandom: {
        content: data.problemRandom.content,
        complement: data.problemRandom.complement,
      },
      categoryRandom: data.categoryRandom.content,
      technologiesRandom: data.technologiesRandom,
      advantageRandom: data.advantageRandom.content,
    });
    let keywordsString = "";
    for (let i = 0; i < this.state.technologiesRandom.length; i++) {
      keywordsString += this.state.technologiesRandom[i].content
      if(i !== this.state.technologiesRandom.length) {
        keywordsString += " ";
      }
    }
    this.setState({
      nameRandom: name(keywordsString)[0]
    })
    setTimeout(() => {
      this.changeSlide(2);
    }, 3000);
  };

  render() {
    const {
      slide,
      init,
      problemRandom,
      profileRandom,
      industryRandom,
      technologiesRandom,
      categoryRandom,
      advantageRandom,
      nameRandom
    } = this.state;
    return (
      <Fragment>
        {slide === 1 && (
          <Main
            changeSlide={this.changeSlide}
            setInit={this.setInit}
            init={init}
            handleClick={this.handleClick}
          />
        )}
        {slide === 2 && (
          <Details
            changeSlide={this.changeSlide}
            setInit={this.setInit}
            profile={profileRandom}
            industry={industryRandom}
            problem={problemRandom.content}
            problemComplement={problemRandom.complement}
            category={categoryRandom}
            technologies={technologiesRandom}
            advantage={advantageRandom}
            name={nameRandom}
            refetchIdea={this.handleClick}
          />
        )}
        {slide === 3 && <Logo name={nameRandom} changeSlide={this.changeSlide} />}
      </Fragment>
    );
  }
}

export default withApollo(App);
