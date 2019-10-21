import React, { Component } from "react";
import "./Tabs.scss";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.defaultIndex
    };
  }

  changeTab(index, event) {
    console.log(index);
    this.setState({ activeTab: index });
  }

  render() {
    let labels = null;
    if (this.props.children) {
      labels = this.props.children.map((child, index) => {
        if (child.type === Tab) {
          return (
            <li>
              <a
                href="#a"
                className={
                  "test " +
                  (this.state.activeTab === index ? "active" : "inactive")
                }
                onClick={this.changeTab.bind(this, index)}
              >
                {child.props.label}
              </a>
            </li>
          );
        }
      });
    }
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child, index) =>
        React.cloneElement(child, {
          active: index === this.state.activeTab
        })
    );
    return (
      <div className="tabs">
        <div className="tab-nav">
          <ul>{labels}</ul>
        </div>
        <div className="tab-panes">{childrenWithProps}</div>
      </div>
    );
  }
}

class Tab extends Component {
  render() {
    return (
      <div className={"tab " + (this.props.active ? "active" : "inactive")}>
        {this.props.children}
      </div>
    );
  }
}

export { Tabs, Tab };
