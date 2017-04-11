import React from 'react';


class Title extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: '',
      github: '',
      chick: '',
    };
  }
  componentDidMount = () => {
    const titles = {
      title: 'helioxigen|space \n >name: Alexander \n',
      github: '>github:',
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
        await sleep(200);
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
        <TitleWord title={this.state.title} />
        <Url preword={this.state.github} chick={this.state.chick} />
      </div>
    );
  }
}

const TitleWord = props => <div>{`>${props.title}`}</div>;
const Url = props => <div>{props.preword} <a href="https://github.com/helioxigen">{props.chick}</a></div>;

export default Title;
