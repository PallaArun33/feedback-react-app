// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onChangeEmoji = () => this.setState({isFeedbackSelected: true})

  feedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="ul-list">
          {emojis.map(emoji => (
            <li className="li-items" key={emoji.id}>
              <button
                className="img-button"
                type="button"
                onClick={this.onChangeEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="image" />
                <p className="para">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankyouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />

        <h1 className="heading">Thank you!</h1>
        <p className="para">
          We will use you feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="container">
        {isFeedbackSelected ? this.thankyouPage() : this.feedbackPage()}
      </div>
    )
  }
}

export default Feedback
