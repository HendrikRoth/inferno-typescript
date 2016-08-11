import Component from '../common/component/component'
import { observer } from 'mobx-inferno'

@observer
export default class Bar extends Component {
  props: any

  constructor(props: any) {
    super(props)
  }

  componentStyle() {
    return {
      background: 'green'
    }
  }

  render(): JSX.Element {
    return (
      <div class={this.style}>
        <div>
          <div>PMENU</div>
          <div>STRUCTURE</div>
          <div>ADD</div>
        </div>
        <div open={this.props.children.length > 0}>{this.props.children}</div>
      </div>
    )
  }
}
