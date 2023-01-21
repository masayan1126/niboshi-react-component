type Props = {
    className: string
    testId: string
}

const Footer = <T,>(props: Props) => {
    const {className, testId} = props;
  
    const style = {
      display: 'flex',
    };
  
    return (
      // slider
      <div>
          <p>title</p>
          <div style={style}>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
          <ul>
              <li>説明1</li>
              <li>説明2</li>
              <li>説明3</li>
              <li>説明4</li>
          </ul>
      </div>
    );
  }
  
  export default Footer;