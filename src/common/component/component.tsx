import Inferno from 'inferno'
import Component from 'inferno-component'
import { styled } from './styler'

@styled export default class StyledComponent extends Component {
  style: any

  constructor(props: any) {
    super(props)
  }

  componentStyle() {
    return {
      background: 'red'
    }
  }

  render(): JSX.Element {
    return <div class={this.style}></div>
  }
}
