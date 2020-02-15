import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: 'Top text',
      bottomText: 'Bottom text',
      randomImage: '',
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imageLoad = this.imageLoad.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data }) => {
        const { memes } = data;
        this.setState({
          memes,
          isLoading: false
        });
      })
      .catch(err => console.log(err.message));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      randomImage: this.getRandomImage(),
      isLoading: true
    });
  }

  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.state.memes.length);
    return this.state.memes[randomIndex].url;
  }

  imageLoad() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <section className="meme-generator">
        <section className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="form__group">
              <label>
                Top text
                <input
                  type="text"
                  name="topText"
                  id="topText"
                  value={this.state.topText}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form__group">
              <label>
                Bottom text
                <input
                  type="text"
                  name="bottomText"
                  id="bottomText"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <button type="submit" className="form__submit">
              Generate
            </button>
          </form>
        </section>

        <section className="result">
          {this.state.randomImage && (
            <div className="result__top-text">{this.state.topText}</div>
          )}
          {this.state.randomImage && (
            <div className="result__bottom-text">{this.state.bottomText}</div>
          )}

          <div className="result__image">
            {this.state.isLoading && (
              <div className="result__loading-screen"></div>
            )}
            {this.state.randomImage && (
              <img
                src={this.state.randomImage}
                alt="Random meme"
                onLoad={this.imageLoad}
              />
            )}
          </div>
        </section>
      </section>
    );
  }
}

export default MemeGenerator;
