const React = require('react')
const PropTypes = require('prop-types')

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.originalText = props.text
    this.state = {
      text: this.originalText
    }
  }

  componentDidMount () {
    const { text, speed } = this.props
    const stopper = `${text}...`
    this.interval = setInterval(() => {
      this.state.text === stopper
      ? this.setState(() => ({ text }))
      : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, speed)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    const { text } = this.state
    const { content } = styles
    return (
      <p style={content}>
        {text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

module.exports = Loading
