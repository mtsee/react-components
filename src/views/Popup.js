import React from 'react';
import { Layout, Switch, Nav, Cell, Group, Popup} from '@/components'

class Demo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      direction: 'bottom',
      fullOpen: false
    }
    this.handleClose = this.handleClose.bind(this)
  }
  render() {
    return (
      <Layout>
        <Nav slot="header" title="Popup"/>
        <div slot="body">
          <Group>
            <Cell title="popup default" value={<Switch value={this.state.open && this.state.direction === 'bottom'} onChange={this.handleChange.bind(this,'bottom')} />} />
            <Cell title="popup top" value={<Switch value={this.state.open && this.state.direction === 'top'} onChange={this.handleChange.bind(this,'top')} />} />
            <Cell title="popup left" value={<Switch value={this.state.open && this.state.direction === 'left'} onChange={this.handleChange.bind(this,'left')} />} />
            <Cell title="popup right" value={<Switch value={this.state.open && this.state.direction === 'right'} onChange={this.handleChange.bind(this,'right')} />} />
            <Cell title="popup center" value={<Switch value={this.state.open && this.state.direction === 'center'} onChange={this.handleChange.bind(this,'center')} />} />
            <Cell title="popup full" value={<Switch value={this.state.fullOpen} onChange={this.handleFullChange.bind(this)} />} />
          </Group>
        </div>
        <Popup open={this.state.open} onClose={this.handleClose} direction={this.state.direction}>
          <div style={{padding:'0.5rem 0',background:'#fff'}}>
            <Cell title="popup close" value={<Switch value={this.state.open} onChange={this.handleChange.bind(this, this.state.direction)} />} />
          </div>
        </Popup>
        <Popup open={this.state.fullOpen} onClose={this.handleFullClose} direction={this.state.direction} full={true}>
          <div style={{padding:'0.5rem 0',background:'#fff'}}>
            <Cell title="popup close" value={<Switch value={this.state.fullOpen} onChange={this.handleFullChange.bind(this)} />} />
          </div>
        </Popup>
      </Layout>
    );
  }
  handleChange (direction, value) {
    this.setState({
      open: value,
      direction
    })
  }
  handleClose () {
    this.setState({
      open: false
    })
  }
  handleFullChange (value) {
    this.setState({
      fullOpen: value
    })
  }
  handleFullClose () {
    this.setState({
      fullOpen: false
    })
  }
}

export default Demo;