import React from 'react';


class Title extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: '',
      name: '',
      github: '',
      chick: '',
    };
  }
  componentDidMount = () => {
    const titles = {
      title: '>helioxigen|space',
      name: '>name: Alexander',
      github: '>github: ',
      chick: 'click',
    };


    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function type(component, titleName, title) {
      let newTitle = '';
      for (let i = 0; i < title.length; i += 1) {
        const obj = {};
        newTitle += title[i];
        obj[titleName] = newTitle;
        component.setState(obj);
        await sleep(90);
      }
    }
    const keys = Object.keys(titles);

    async function typeAll(component){
      for (let i = 0; i < keys.length; i += 1) {
        await type(component, keys[i], titles[keys[i]]);
      }
    }

    typeAll(this);
  }
  render() {
    return (
      <div className="name">
        <div>{this.state.title}</div>
        <div>{this.state.name}</div>
        <div>
          {this.state.github}
          <a href="https://github.com/helioxigen">{this.state.chick}</a>
        </div>
      </div>
    );
  }
}

export default Title;
