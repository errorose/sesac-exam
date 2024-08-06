import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component{

    render(){
        console.log('Text props >> ', this.props);
        
        const {text, valid} = this.props;

        return(
            <>
                <h1>App 컴포넌트에서 넘겨준 {text} 입니다.</h1>
                <button onClick={()=>{console.log(valid);}}>콘솔메세지</button>
            </>
        )
    }

    static defaultProps = {
        text: '이건 기본 text props 입니다.',
    }
    
    static propTypes = {
        text: PropTypes.string,
    }    
}

export default Text;