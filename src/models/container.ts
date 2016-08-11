import { observable } from 'mobx'

export interface IContainer {
    props: IContainerProps
    toObject: Function
}

export interface IContainerProps {
  direction: string
  parent: boolean
  size: number,
  children?: any[]
};

export class Container implements IContainer {
  props: IContainerProps

  constructor(props: IContainerProps) {
    this.props = observable(props)
  }

  hasChildren(): boolean {
    return this.props.children && this.props.children.length > 0
  }

  toObject(): IContainerProps {
    return this.props
  }
};
